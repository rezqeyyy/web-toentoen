import React, { useState } from 'react';
import { ChatSession } from '@/constants/api/admin/types';
import { StatusBadge } from './StatusBadge';

interface MainChatAreaProps {
  activeChat: ChatSession;
  isUpdatingStatus: boolean;
  onUpdateStatus: () => void;
  onSendMessage: (text: string) => Promise<void>;
}

export const MainChatArea: React.FC<MainChatAreaProps> = ({ 
  activeChat, 
  isUpdatingStatus, 
  onUpdateStatus, 
  onSendMessage 
}) => {
  // Tambahkan state untuk menangani input pesan dan status pengiriman
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  // Handler untuk mengirim pesan
  const handleSend = async () => {
    if (!message.trim()) return;
    
    setIsSending(true);
    try {
      await onSendMessage(message);
      setMessage(''); // Kosongkan input setelah pesan terkirim
    } catch (error) {
      console.error("Gagal mengirim pesan:", error);
    } finally {
      setIsSending(false);
    }
  };

  // Handler agar user bisa menekan Enter untuk mengirim (Shift+Enter untuk baris baru)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* MAIN CHAT AREA (Tengah) */}
      <section className="flex-1 flex flex-col bg-gray-50/50 relative min-w-[400px]">
        {/* Header Chat */}
        <div className="bg-white border-b border-gray-200 flex justify-between items-center px-6 py-4 m-4 rounded-xl shadow-sm z-10 gap-4">
          <div className="flex-1">
            <h2 className="text-base md:text-lg font-bold text-gray-900 leading-tight mb-1">
              {activeChat.ticketTitle}
            </h2>
            <p className="text-xs text-gray-500 font-medium">
              {activeChat.ticketId}
            </p>
          </div>
          <button 
            onClick={onUpdateStatus}
            disabled={isUpdatingStatus}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium flex items-center space-x-2 text-white disabled:opacity-50 flex-shrink-0 transition-colors
              ${activeChat.status === 'Done' ? 'bg-green-600 hover:bg-green-700' : (activeChat.status === 'Process' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-red-500 hover:bg-red-600')}
            `}>
            <span>
              {isUpdatingStatus ? 'Updating...' : (activeChat.status === 'Done' ? 'Solved' : (activeChat.status === 'Process' ? 'Mark as Solved' : 'Unsolved'))}
            </span>
            {!isUpdatingStatus && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>}
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {activeChat.messages?.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}>
              {msg.sender === 'user' && (
                <img src={activeChat.avatar} alt="Avatar" className="w-8 h-8 rounded-full mr-2 mt-auto mb-1 object-cover" />
              )}
              <div className={`max-w-[70%] rounded-2xl p-4 shadow-sm relative group
                ${msg.sender === 'user' ? 'bg-white border border-gray-200 rounded-bl-sm' : 'bg-[#e0f5f0] text-gray-800 rounded-br-sm'}
              `}>
                {msg.sender === 'user' && <p className="font-bold text-sm mb-1 text-gray-900">{activeChat.name}</p>}
                {msg.sender === 'admin' && <p className="font-bold text-sm mb-1 text-gray-900">You</p>}
                <p className="text-sm text-gray-700">{msg.text}</p>
                <div className="text-[10px] text-gray-400 mt-2 flex items-center justify-end">
                  {msg.time}
                  {msg.sender === 'admin' && <svg className="w-3 h-3 ml-1 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* POPUP JIKA TIDAK ADA INTERAKSI */}
        {activeChat.isInactive && (
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] flex items-center justify-center z-20">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center max-w-sm w-full mx-4">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Is the chat finished?</h3>
              <p className="text-sm text-gray-500 mb-6">Mark this conversation as solved?</p>
              <div className="flex space-x-4">
                <button onClick={onUpdateStatus} className="flex-1 py-2 border-2 border-gray-900 rounded-full font-bold text-gray-900 hover:bg-gray-50 transition-colors">Yes</button>
                <button className="flex-1 py-2 border-2 border-gray-900 rounded-full font-bold text-gray-900 hover:bg-gray-50 transition-colors">No</button>
              </div>
            </div>
          </div>
        )}

        {/* Chat Input */}
        <div className="p-4 bg-white border-t border-gray-200 mx-4 mb-4 rounded-xl shadow-sm z-10">
          <div className="relative">
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isSending}
              placeholder="Write a reply..." 
              className="w-full bg-gray-50 rounded-xl p-4 pr-32 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-teal-500 resize-none h-24 text-sm disabled:opacity-50"
            ></textarea>
            
            <div className="absolute bottom-4 left-4 flex space-x-3 text-gray-400">
              <button className="hover:text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg></button>
              <button className="hover:text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button>
              <button className="hover:text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></button>
            </div>
            
            <div className="absolute bottom-4 right-4">
              <button 
                onClick={handleSend}
                disabled={isSending || !message.trim()}
                className="bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg text-sm font-bold flex items-center space-x-2 transition-colors">
                <span>{isSending ? 'Sending...' : 'Send'}</span>
                {!isSending && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* USER DETAILS PANEL (Paling Kanan) */}
      <aside className="w-[300px] bg-white border-l border-gray-200 hidden xl:flex flex-col p-6 overflow-y-auto">
        <div className="flex flex-col items-center text-center mb-8 pt-4">
          <div className="relative">
            <img src={activeChat.avatar} alt={activeChat.name} className="w-24 h-24 rounded-full bg-gray-200 object-cover shadow-sm mb-4 border-4 border-white" />
            {activeChat.isVip && (
              <span className="absolute bottom-2 right-0 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white">VIP</span>
            )}
          </div>
          <h2 className="text-xl font-bold text-gray-900">{activeChat.name} <span className="text-gray-400 font-normal">{activeChat.role}</span></h2>
          <p className="text-xs text-gray-500 mt-1">{activeChat.email}</p>
          <p className="text-xs text-gray-500">{activeChat.phone}</p>
        </div>

        <div className="bg-[#e0f5f0]/50 rounded-xl p-5 mb-4 border border-[#e0f5f0]">
          <h3 className="font-bold text-sm text-gray-900 mb-4">Account Overview</h3>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between"><span className="text-gray-500">Account Since</span><span className="font-medium text-gray-900">{activeChat.accountSince}</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Subscription</span><span className="font-medium text-gray-900">{activeChat.subscription}</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Current Status</span><span className="font-medium text-gray-900">Active</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Total Tickets</span><span className="font-medium text-gray-900">{activeChat.totalTickets}</span></div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4 shadow-sm">
          <h3 className="font-bold text-sm text-gray-900 mb-2">Current Ticket</h3>
          <p className="text-xs text-gray-500 mb-1">{activeChat.ticketId}</p>
          <p className="text-sm font-medium text-gray-900 mb-3">{activeChat.ticketTitle}</p>
          <StatusBadge status={activeChat.status} />
        </div>
      </aside>
    </>
  );
};