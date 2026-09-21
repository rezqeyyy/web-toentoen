"use client";

import React, { useState } from 'react';

// --- DUMMY DATA ---
type ChatStatus = 'Unsolved' | 'Process' | 'Done';

interface Message {
  sender: 'user' | 'admin';
  text: string;
  time: string;
}

interface ChatSession {
  id: string;
  name: string;
  role: 'Merchant' | 'User';
  isVip: boolean;
  avatar: string;
  lastTime: string;
  lastMessage: string;
  status: ChatStatus;
  isInactive: boolean; // True jika > 5 menit tidak ada interaksi
  ticketTitle: string;
  ticketId: string;
  email: string;
  phone: string;
  accountSince: string;
  subscription: string;
  totalTickets: number;
  messages: Message[];
}

const DUMMY_CHATS: ChatSession[] = [
  {
    id: "1",
    name: "John",
    role: "Merchant",
    isVip: false,
    avatar: "https://i.pravatar.cc/150?img=11",
    lastTime: "09.12",
    lastMessage: "Is the chat finished?",
    status: "Unsolved",
    isInactive: true, // Akan memicu background merah dan popup
    ticketTitle: "Payment gateway integration issue",
    ticketId: "#TK-8831",
    email: "john.merchant@gmail.com",
    phone: "+62 811-2222-3333",
    accountSince: "Mar 2025",
    subscription: "Standard",
    totalTickets: 3,
    messages: [
      { sender: "user", text: "Hi, I have a problem with the payment gateway.", time: "09.00" },
      { sender: "admin", text: "Hello John, I can help with that. Could you provide the error code?", time: "09.02" },
      { sender: "user", text: "It says ERR_TIMEOUT.", time: "09.05" },
      { sender: "user", text: "Is the chat finished?", time: "09.12" },
    ]
  },
  {
    id: "2",
    name: "Sarah",
    role: "User",
    isVip: true,
    avatar: "https://i.pravatar.cc/150?img=5",
    lastTime: "09.15",
    lastMessage: "Thank you, please send the corrected invoice to me as well.",
    status: "Process",
    isInactive: false,
    ticketTitle: "Double charge on annual renewal invoice",
    ticketId: "#TK-8832",
    email: "sarahsarah@gmail.com",
    phone: "+62 888-9999-2222",
    accountSince: "Jan 2027",
    subscription: "Annual Plan",
    totalTickets: 12,
    messages: [
      { sender: "user", text: "Hi team, I renewed our annual plan this morning but my card has been charged twice. Could you please check this? We need the invoice corrected before finance closes today.", time: "09.12" },
      { sender: "admin", text: "I'm sorry for the duplicate charge, Sarah. I'm reviewing the payment record now and will confirm the reversal shortly.", time: "09.14" },
      { sender: "user", text: "Thank you, please send the corrected invoice to me as well.", time: "09.15" },
    ]
  },
  {
    id: "3",
    name: "Alex",
    role: "User",
    isVip: false,
    avatar: "https://i.pravatar.cc/150?img=33",
    lastTime: "08.45",
    lastMessage: "Thanks! That fixed it.",
    status: "Done",
    isInactive: false,
    ticketTitle: "Cannot update profile picture",
    ticketId: "#TK-8830",
    email: "alex.user@gmail.com",
    phone: "+62 877-5555-4444",
    accountSince: "Feb 2026",
    subscription: "Free Plan",
    totalTickets: 1,
    messages: [
      { sender: "user", text: "I can't upload a new profile picture. It keeps loading.", time: "08.30" },
      { sender: "admin", text: "Hi Alex, please try clearing your browser cache or use a JPG file under 2MB.", time: "08.35" },
      { sender: "user", text: "Ah, the file was 5MB. Let me resize it.", time: "08.40" },
      { sender: "user", text: "Thanks! That fixed it.", time: "08.45" },
    ]
  }
];

// Helper Badge Status
const StatusBadge = ({ status }: { status: ChatStatus }) => {
  switch (status) {
    case 'Unsolved':
      return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-600"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1.5"></span>Unsolved</span>;
    case 'Process':
      return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-1.5"></span>Process</span>;
    case 'Done':
      return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>Done</span>;
    default:
      return null;
  }
};

export default function InboxPage() {
  const [selectedChatId, setSelectedChatId] = useState<string>(DUMMY_CHATS[0].id);
  const [chatList] = useState<ChatSession[]>(DUMMY_CHATS);

  const activeChat = chatList.find(c => c.id === selectedChatId) || chatList[0];

  return (
    <div className="flex h-screen bg-white font-sans overflow-hidden">

      {/* CHAT LIST PANEL (Tengah Kiri) */}
      <section className="w-[320px] lg:w-[360px] border-r border-gray-200 flex flex-col bg-white">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Inbox</h1>
          
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </span>
            <input type="text" placeholder="Search tickets or customers..." className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-teal-500" />
          </div>

          <div className="flex space-x-2 border-b border-gray-200 mb-4 pb-2">
            <button className="px-4 py-1.5 bg-teal-500 text-white text-sm font-medium rounded-full">Queue (100)</button>
            <button className="px-4 py-1.5 text-gray-600 bg-gray-50 border border-gray-200 text-sm font-medium rounded-full">Solved (20)</button>
          </div>

          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-teal-500 text-white text-xs font-medium rounded-full">All</button>
            <button className="px-3 py-1 text-gray-600 border border-gray-200 text-xs font-medium rounded-full hover:bg-gray-50">VIP</button>
            <button className="px-3 py-1 text-gray-600 border border-gray-200 text-xs font-medium rounded-full hover:bg-gray-50">Standard</button>
          </div>
        </div>

        {/* LIST CHAT */}
        <div className="flex-1 overflow-y-auto">
          {chatList.map((chat) => (
            <div 
              key={chat.id} 
              onClick={() => setSelectedChatId(chat.id)}
              className={`p-4 border-b border-gray-100 cursor-pointer transition-colors
                ${selectedChatId === chat.id ? (chat.isInactive ? 'bg-red-50 border-r-2 border-r-red-500' : 'bg-teal-50 border-r-2 border-r-teal-500') : (chat.isInactive ? 'bg-red-50/50 hover:bg-red-50' : 'hover:bg-gray-50')}
              `}
            >
              <div className="flex justify-between items-start mb-1">
                <div className="flex items-center space-x-2">
                  <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full bg-gray-200 object-cover" />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-gray-900 text-sm">{chat.name}</span>
                      <span className="text-xs text-gray-500">({chat.role})</span>
                      {chat.isVip && <span className="bg-yellow-400 text-black text-[10px] font-bold px-1.5 rounded">VIP</span>}
                    </div>
                    <p className="text-xs text-gray-500 truncate w-40 mt-0.5">{chat.lastMessage}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{chat.lastTime}</span>
              </div>
              <div className="mt-2 ml-12">
                <StatusBadge status={chat.status} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN CHAT AREA (Tengah) */}
      <section className="flex-1 flex flex-col bg-gray-50/50 relative min-w-[400px]">
        {/* Header Chat */}
        <div className="h-20 bg-white border-b border-gray-200 flex justify-between items-center px-6 m-4 rounded-xl shadow-sm z-10">
          <div>
            <h2 className="text-lg font-bold text-gray-900">{activeChat.ticketTitle}</h2>
            <p className="text-xs text-gray-500">{activeChat.ticketId}</p>
          </div>
          <button className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 text-white
            ${activeChat.status === 'Done' ? 'bg-green-600 hover:bg-green-700' : (activeChat.status === 'Process' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-red-500 hover:bg-red-600')}
          `}>
            <span>{activeChat.status === 'Done' ? 'Solved' : (activeChat.status === 'Process' ? 'Mark as Solved' : 'Unsolved')}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {activeChat.messages.map((msg, idx) => (
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
                <div className={`text-[10px] text-gray-400 mt-2 flex items-center ${msg.sender === 'user' ? 'justify-end' : 'justify-end'}`}>
                  {msg.time}
                  {msg.sender === 'admin' && (
                    <svg className="w-3 h-3 ml-1 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  )}
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
                <button className="flex-1 py-2 border-2 border-gray-900 rounded-full font-bold text-gray-900 hover:bg-gray-50 transition-colors">Yes</button>
                <button className="flex-1 py-2 border-2 border-gray-900 rounded-full font-bold text-gray-900 hover:bg-gray-50 transition-colors">No</button>
              </div>
            </div>
          </div>
        )}

        {/* Chat Input */}
        <div className="p-4 bg-white border-t border-gray-200 mx-4 mb-4 rounded-xl shadow-sm z-10">
          <div className="relative">
            <textarea 
              placeholder="Write a reply..." 
              className="w-full bg-gray-50 rounded-xl p-4 pr-32 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-teal-500 resize-none h-24 text-sm"
            ></textarea>
            
            <div className="absolute bottom-4 left-4 flex space-x-3 text-gray-400">
              <button className="hover:text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg></button>
              <button className="hover:text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button>
              <button className="hover:text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></button>
            </div>
            
            <div className="absolute bottom-4 right-4">
               <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg text-sm font-bold flex items-center space-x-2">
                 <span>Send</span>
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* USER DETAILS PANEL (Paling Kanan) */}
      <aside className="w-[300px] bg-white border-l border-gray-200 hidden xl:flex flex-col p-6 overflow-y-auto">
        
        {/* Profile Header */}
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

        {/* Account Overview */}
        <div className="bg-[#e0f5f0]/50 rounded-xl p-5 mb-4 border border-[#e0f5f0]">
          <h3 className="font-bold text-sm text-gray-900 mb-4">Account Overview</h3>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between"><span className="text-gray-500">Account Since</span><span className="font-medium text-gray-900">{activeChat.accountSince}</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Subscription</span><span className="font-medium text-gray-900">{activeChat.subscription}</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Current Status</span><span className="font-medium text-gray-900">Active</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Last Payment</span><span className="font-medium text-gray-900">Today</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Total Tickets</span><span className="font-medium text-gray-900">{activeChat.totalTickets}</span></div>
          </div>
        </div>

        {/* Current Ticket */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4 shadow-sm">
          <h3 className="font-bold text-sm text-gray-900 mb-2">Current Ticket</h3>
          <p className="text-xs text-gray-500 mb-1">{activeChat.ticketId}</p>
          <p className="text-sm font-medium text-gray-900 mb-3">{activeChat.ticketTitle}</p>
          <StatusBadge status={activeChat.status} />
        </div>

        {/* Recent Activity */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-sm text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between"><span className="text-gray-500">Today</span><span className="font-medium text-gray-900 text-right w-32 truncate">Double charge</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Aug 2026</span><span className="font-medium text-gray-900 text-right w-32 truncate">Payment failed</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Feb 2026</span><span className="font-medium text-gray-900 text-right w-32 truncate">Can't change profile photo</span></div>
          </div>
        </div>

      </aside>

    </div>
  );
}