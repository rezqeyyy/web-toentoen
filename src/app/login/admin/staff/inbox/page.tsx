"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ChatSession, Message, ChatStatus } from '@/constants/api/admin/types';
import { ChatListPanel } from '@/components/admin/inbox/ChatListPanel';
import { MainChatArea } from '@/components/admin/inbox/MainChatArea';

// Helper Mapping Status dari API ke UI
const mapStatusToUI = (apiStatus: string): ChatStatus => {
  const status = apiStatus?.toLowerCase() || '';
  if (status.includes('queue') || status.includes('open') || status.includes('unsolved')) return 'Unsolved';
  if (status.includes('progress') || status.includes('process') || status.includes('pending')) return 'Process';
  if (status.includes('done') || status.includes('resolved') || status.includes('closed')) return 'Done';
  return 'Unsolved'; 
};

export default function InboxPage() {
  const [chatList, setChatList] = useState<ChatSession[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [activeChat, setActiveChat] = useState<ChatSession | null>(null);
  
  const [isLoadingList, setIsLoadingList] = useState(true);
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getToken = () => localStorage.getItem("token") || "";

  // 1. FETCH TICKETS LIST
  const fetchTickets = useCallback(async () => {
    try {
      setIsLoadingList(true);
      const res = await fetch("https://api-ops.toentoen.com/api/v1/tickets", {
        headers: { "Authorization": `Bearer ${getToken()}` }
      });
      if (!res.ok) throw new Error("Gagal mengambil daftar tiket");
      
      const json = await res.json();
      const ticketsArray = json.data?.tickets || json.tickets || []; 

      const mappedList: ChatSession[] = ticketsArray.map((item: any) => ({
        id: item.ticket_id,
        name: item.requester?.name || "Unknown User",
        role: item.requester?.role || "User",
        isVip: item.requester?.is_vip || false,
        avatar: item.requester?.avatar_url || "https://ui-avatars.com/api/?name=User&background=random",
        lastTime: item.date || "00:00",
        lastMessage: item.last_message || item.subject || "No message",
        status: mapStatusToUI(item.status),
        isInactive: false,
        ticketTitle: item.subject || "Ticket Issue",
        ticketId: item.ticket_code || `#TK-${item.ticket_id}`,
        email: item.requester?.email || "",
        phone: item.requester?.phone || "",
        accountSince: "-",
        subscription: item.priority || "Standard",
        totalTickets: 1,
        messages: []
      }));

      setChatList(mappedList);
      if (mappedList.length > 0 && !selectedChatId) {
        setSelectedChatId(mappedList[0].id);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingList(false);
    }
  }, [selectedChatId]);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  // 2. FETCH TICKET DETAIL & CUSTOMER PROFILE
  useEffect(() => {
    const fetchTicketDetail = async () => {
      if (!selectedChatId) return;
      try {
        setIsLoadingDetail(true);
        
        // A. Ambil Detail Tiket & Pesan
        const res = await fetch(`https://api-ops.toentoen.com/api/v1/tickets/${selectedChatId}/messages`, {
          headers: { "Authorization": `Bearer ${getToken()}` }
        });
        if (!res.ok) throw new Error("Gagal mengambil detail tiket");
        
        const json = await res.json();
        const data = json.data;

        if (!data) return;

        // B. Ambil Data Profil Customer (Menggunakan API yang baru)
        const customerId = data.requester?.id || data.customer_id;
        let customerProfile = null;

        if (customerId) {
          try {
            const customerRes = await fetch(`https://api-ops.toentoen.com/api/v1/customers/${customerId}`, {
              headers: { "Authorization": `Bearer ${getToken()}` }
            });
            if (customerRes.ok) {
              const customerJson = await customerRes.json();
              customerProfile = customerJson.data || customerJson; // Sesuaikan jika tidak ada wrapper "data"
            }
          } catch (error) {
            console.error("Gagal mengambil profil customer", error);
          }
        }

        const baseChatItem = chatList.find(c => c.id === selectedChatId);
        const userComplaint = data.description || baseChatItem?.ticketTitle || "Tidak ada detail keluhan";

        const initialMessages: Message[] = [
          {
            sender: 'user',
            text: userComplaint,
            time: data.started_at || data.waiting_time || baseChatItem?.lastTime || "00:00"
          }
        ];

        if (baseChatItem?.lastMessage && baseChatItem.lastMessage !== userComplaint) {
           initialMessages.push({
             sender: 'admin',
             text: baseChatItem.lastMessage,
             time: baseChatItem.lastTime || "00:00"
           });
        }

        // C. Gabungkan data tiket list, detail pesan tiket, dan profil customer
        setActiveChat(prev => ({
          ...(baseChatItem || prev || {}),
          id: selectedChatId,
          name: customerProfile?.name || data.requester?.name || baseChatItem?.name || "Unknown User",
          role: customerProfile?.role || data.requester?.role || baseChatItem?.role || "User",
          isVip: customerProfile?.is_vip ?? data.requester?.is_vip ?? baseChatItem?.isVip ?? false,
          avatar: customerProfile?.avatar || data.requester?.avatar_url || baseChatItem?.avatar || "https://ui-avatars.com/api/?name=User",
          email: customerProfile?.email || data.requester?.email || baseChatItem?.email || "-",
          phone: customerProfile?.phone || data.requester?.phone || baseChatItem?.phone || "-",
          subscription: customerProfile?.subscription_type || data.priority || baseChatItem?.subscription || "Standard",
          accountSince: customerProfile?.created_at ? new Date(customerProfile.created_at).getFullYear().toString() : "-",
          totalTickets: customerProfile?.total_tickets || 1,
          ticketTitle: data.title || data.current_ticket_summary?.issue_type || baseChatItem?.ticketTitle || "Ticket Issue",
          ticketId: data.ticket_code || baseChatItem?.ticketId || `#TK-${selectedChatId}`,
          status: mapStatusToUI(data.status || baseChatItem?.status || 'QUEUE'),
          lastTime: baseChatItem?.lastTime || "00:00",
          lastMessage: baseChatItem?.lastMessage || "No message",
          isInactive: false,
          messages: initialMessages 
        }));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingDetail(false);
      }
    };

    if (chatList.length > 0) {
      fetchTicketDetail();
    }
  }, [selectedChatId, chatList]);

  // 3. PATCH UPDATE TICKET STATUS
  const handleUpdateStatus = async () => {
    if (!activeChat || isUpdatingStatus) return;
    const nextStatusAPI = activeChat.status === 'Done' ? 'open' : (activeChat.status === 'Process' ? 'resolved' : 'process');
    
    try {
      setIsUpdatingStatus(true);
      const res = await fetch(`https://api-ops.toentoen.com/api/v1/tickets/${activeChat.id}/status`, {
        method: "PATCH",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${getToken()}` 
        },
        body: JSON.stringify({ status: nextStatusAPI })
      });
      if (!res.ok) throw new Error("Gagal update status");
      
      await fetchTickets(); 
    } catch (error) {
      console.error(error);
      alert("Gagal memperbarui status tiket.");
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const handleSendMessage = async (text: string) => {
    if (!activeChat) return;

    const newMessage: Message = {
      sender: 'admin',
      text: text,
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };

    setActiveChat(prev => prev ? {
      ...prev,
      messages: [...prev.messages, newMessage]
    } : prev);

    try {
      const res = await fetch(`https://api-ops.toentoen.com/api/v1/tickets/${activeChat.id}/messages`, {
        method: "POST", 
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${getToken()}` 
        },
        body: JSON.stringify({ message: text }) 
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.message || "Gagal mengirim pesan");
      }
      
    } catch (error: any) {
      console.error("Send Message Error:", error);
      alert(`Pesan gagal dikirim ke server: ${error.message}`);
    }
  };

  return (
    <div className="flex h-screen bg-white font-sans overflow-hidden">
      <ChatListPanel 
        chatList={chatList} 
        isLoadingList={isLoadingList} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        selectedChatId={selectedChatId} 
        setSelectedChatId={setSelectedChatId} 
      />

      {/* Selalu render MainChatArea jika sudah ada data — transisi smooth ala WhatsApp */}
      {activeChat ? (
        <MainChatArea 
          activeChat={activeChat} 
          isLoadingDetail={isLoadingDetail}
          isUpdatingStatus={isUpdatingStatus} 
          onUpdateStatus={handleUpdateStatus} 
          onSendMessage={handleSendMessage}
        />
      ) : isLoadingDetail ? (
        /* Skeleton awal saat belum ada chat sama sekali */
        <section className="flex-1 flex flex-col bg-gray-50/50">
          <div className="m-4 h-16 bg-gray-200 rounded-xl animate-pulse" />
          <div className="flex-1 px-6 py-4 space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`h-14 rounded-2xl bg-gray-200 animate-pulse ${i % 2 === 0 ? 'w-2/3' : 'w-1/2'}`} />
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="flex-1 flex items-center justify-center bg-gray-50/50 text-gray-400 text-sm">
          Pilih percakapan untuk memulai
        </section>
      )}
    </div>
  );
}
