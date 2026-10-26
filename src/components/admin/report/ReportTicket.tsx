// src/components/admin/report/ReportTicket.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { adminApi } from '@/constants/api/admin/report';

// --- TIPE DATA ---
type TicketStatus = 'Unsolved' | 'Pending' | 'Solved';
type Priority = 1 | 2 | 3 | null;

export interface Ticket {
  id: string;
  name: string;
  role: string;
  isVip: boolean;
  category: string;
  ticketId: string;
  time: string;
  status: TicketStatus;
  priority: Priority;
  isApproved?: boolean;
  message: string;
  avatar: string;
}

export default function ReportTicketComponent() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  
  const [activeMenu, setActiveMenu] = useState<string>('All Reports');
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  
  const [chatInput, setChatInput] = useState("");
  const [showFlagDropdown, setShowFlagDropdown] = useState(false);

  // --- FETCH AWAL ---
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [catData, boardData] = await Promise.all([
          adminApi.getReportCategories(),
          adminApi.getKanbanBoard()
        ]);
        
        // 1. Mapping Categories
        if (catData?.data) setCategories(catData.data);
        
        // 2. Mapping Kanban Board ke format `Ticket`
        if (boardData?.data?.columns) {
          const { unsolved, pending, solved } = boardData.data.columns;
          
          const mapApiToTicket = (item: any): Ticket => {
            const rawStatus = item.column_key || '';
            const statusMapped: TicketStatus = rawStatus === 'solved' ? 'Solved' : rawStatus === 'pending' ? 'Pending' : 'Unsolved';
            const priorityMapped: Priority = item.priority === 'HIGH' ? 1 : item.priority === 'MEDIUM' ? 2 : 3;

            return {
              id: item.report_id,
              name: item.reporter?.name || 'Unknown',
              role: item.target_type === 'business' ? 'Merchant' : 'User',
              isVip: false, // Default fallback
              category: item.reason,
              ticketId: item.report_code,
              time: item.elapsed_time || '0m',
              status: statusMapped,
              priority: priorityMapped,
              isApproved: item.status === 'RESOLVED',
              message: item.description,
              avatar: item.reporter?.avatar_url || 'https://i.pravatar.cc/150'
            };
          };

          const allTickets = [
            ...(unsolved || []).map(mapApiToTicket),
            ...(pending || []).map(mapApiToTicket),
            ...(solved || []).map(mapApiToTicket)
          ];

          setTickets(allTickets);
          if (allTickets.length > 0) setSelectedTicketId(allTickets[0].id);
        }
      } catch (error) {
        console.error("Gagal memuat data awal:", error);
      }
    };
    fetchInitialData();
  }, []);

  // --- FETCH LOG SAAT TIKET DIPILIH ---
  useEffect(() => {
    if (!selectedTicketId) return;
    const fetchLogs = async () => {
      try {
        const logData = await adminApi.getLogDetail(selectedTicketId);
        // TODO: Simpan logData ke dalam state setLogs jika JSON response logs sudah tersedia
      } catch (error) {
        console.error("Gagal memuat log:", error);
      }
    };
    fetchLogs();
  }, [selectedTicketId]);

  const activeTicket = tickets.find(t => t.id === selectedTicketId);
  const unsolvedTickets = tickets.filter(t => t.status === 'Unsolved');
  const pendingTickets = tickets.filter(t => t.status === 'Pending');
  const solvedTickets = tickets.filter(t => t.status === 'Solved');

  // --- ACTIONS ---
  const handleActionClick = async (action: string) => {
    if (!selectedTicketId) return alert("Pilih tiket terlebih dahulu");
    try {
      await adminApi.postAdjudication(selectedTicketId, action.toUpperCase());
      alert(`Berhasil: ${action}`);
    } catch (error) {
      console.error("Adjudicate failed:", error);
      alert(`Gagal memproses adjudicate`);
    }
  };

  const handleSendMessage = async () => {
    if (!selectedTicketId || !chatInput.trim()) return;
    const textToSend = chatInput;
    setChatInput(""); // Reset langsung sebelum kirim (ala WhatsApp)
    try {
      await adminApi.postMessage(selectedTicketId, textToSend);
    } catch (error) {
      console.error("Send message failed:", error);
      setChatInput(textToSend); // Kembalikan teks jika gagal
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#f8f9fa] font-sans text-gray-800">
      
      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
        <h1 className="text-2xl font-extrabold text-gray-900">Report &amp; Support Ticket</h1>
      </header>

      {/* MAIN CONTENT */}
      <div className="flex flex-1 overflow-hidden p-6 gap-6">
        
        {/* SIDEBAR CATEGORY */}
        <aside className="w-64 bg-white border border-gray-300 rounded-xl flex flex-col overflow-hidden shrink-0">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-bold text-lg mb-4">Report</h2>
          </div>
          <div className="flex-1 overflow-y-auto py-2">
            {categories.map((cat) => (
              <div key={cat.key} className="mb-1">
                <button 
                  onClick={() => setActiveMenu(activeMenu === cat.label ? '' : cat.label)}
                  className="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-50 text-sm font-bold text-gray-900"
                >
                  <div className="flex items-center gap-2">
                     <span>{cat.label}</span>
                     {cat.count > 0 && <span className="bg-gray-200 text-xs px-1.5 rounded">{cat.count}</span>}
                  </div>
                </button>
                
                {activeMenu === cat.label && cat.subcategories && (
                  <div className="flex flex-col py-1">
                    {cat.subcategories.map((sub: string) => (
                      <button
                        key={sub}
                        onClick={() => setActiveCategory(sub)}
                        className={`text-left px-4 py-2 text-sm pl-6 transition-colors ${activeCategory === sub ? 'bg-[#d0f0e8] font-semibold text-teal-800' : 'text-gray-600 hover:bg-gray-100'}`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* KANBAN BOARD */}
        <div className="flex-1 flex gap-4 overflow-x-auto min-w-0">
          {[
            { title: "Unsolved", data: unsolvedTickets, color: "bg-red-600" },
            { title: "Pending", data: pendingTickets, color: "bg-orange-500" },
            { title: "Solved", data: solvedTickets, color: "bg-green-600" }
          ].map(col => (
            <div key={col.title} className="w-[320px] shrink-0 bg-white border border-gray-300 rounded-xl flex flex-col">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-xl">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{col.title}</h3>
                  <p className="text-xs text-gray-500">{col.data.length} Open</p>
                </div>
                <span className={`${col.color} text-white font-bold text-sm px-2.5 py-1 rounded-md`}>{col.data.length}</span>
              </div>
              <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-[#f8f9fa]">
                {col.data.map(ticket => (
                  <TicketCard key={ticket.id} ticket={ticket} isActive={selectedTicketId === ticket.id} onClick={() => setSelectedTicketId(ticket.id)} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* TICKET DETAIL / CHAT */}
        {activeTicket && (
          <aside className="w-[380px] bg-white border border-gray-300 rounded-xl flex flex-col shrink-0 relative">
            <div className="p-4 border-b border-gray-200 flex justify-between items-start">
              <div className="flex items-center space-x-3">
                <img src={activeTicket.avatar} alt={activeTicket.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-gray-900 text-base">{activeTicket.name}</span>
                    <span className="text-xs text-gray-500">({activeTicket.role})</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{activeTicket.category}</p>
                  <p className="text-xs text-gray-400">{activeTicket.ticketId}</p>
                </div>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto flex flex-col">
               <div className="bg-white border border-gray-300 p-3 rounded-xl shadow-sm mb-4">
                  <p className="text-sm text-gray-700">{activeTicket.message}</p>
               </div>
            </div>

            <div className="px-4 py-3 flex space-x-2 items-center border-t border-gray-100">
              <button onClick={() => handleActionClick('Agree')} className="flex-1 bg-green-600 text-white font-semibold py-2 rounded-lg text-sm">Agree</button>
              <button onClick={() => handleActionClick('Pending')} className="flex-1 border border-gray-300 text-gray-600 font-semibold py-2 rounded-lg text-sm">Pending</button>
              <button onClick={() => handleActionClick('Decline')} className="flex-1 bg-red-600 text-white font-semibold py-2 rounded-lg text-sm">Decline</button>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-200 rounded-b-xl">
              <div className="relative">
                <textarea 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Write a reply..."
                  spellCheck={false}
                  className="w-full bg-gray-100 rounded-xl p-3 pb-12 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-500 resize-none h-24 text-sm text-gray-900 overflow-y-auto break-words"
                ></textarea>
                <button onClick={handleSendMessage} className="absolute bottom-3 right-3 bg-black text-white px-4 py-1.5 rounded-md text-sm font-bold">Send</button>
              </div>
            </div>
          </aside>
        )}

      </div>
    </div>
  );
}

// --- SUB-KOMPONEN KARTU KANBAN ---
function TicketCard({ ticket, isActive, onClick }: { ticket: Ticket, isActive: boolean, onClick: () => void }) {
  const flagColor =
    ticket.priority === 1 ? 'bg-green-500 text-white' :
    ticket.priority === 2 ? 'bg-yellow-400 text-gray-800' :
    ticket.priority === 3 ? 'bg-red-500 text-white' : '';

  return (
    <div onClick={onClick} className={`bg-white p-4 rounded-xl border cursor-pointer transition-all relative ${isActive ? 'border-teal-500 shadow-md ring-1 ring-teal-500' : 'border-gray-200 shadow-sm'}`}>
      <div className="flex items-start space-x-3 pr-4">
        <img src={ticket.avatar} alt={ticket.name} className="w-10 h-10 rounded-full object-cover" />
        <div className="flex-1">
          <div className="flex items-center space-x-1 flex-wrap">
            <span className="font-bold text-gray-900 text-sm">{ticket.name}</span>
            <span className="text-xs text-gray-500">({ticket.role})</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">{ticket.category}</p>
          <div className="flex justify-between items-end mt-2">
            <span className="text-xs text-gray-400">{ticket.ticketId}</span>
            <div className="flex flex-col items-end gap-1">
              <span className="text-xs text-gray-400">{ticket.time}</span>
              {ticket.priority !== null && (
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${flagColor}`}>
                  🚩 {ticket.priority}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
