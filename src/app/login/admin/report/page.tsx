"use client";

import React, { useState } from 'react';

// --- TIPE DATA ---
type TicketStatus = 'Unsolved' | 'Pending' | 'Solved';
type Priority = 1 | 2 | 3 | null;

interface Ticket {
  id: string;
  name: string;
  role: 'User' | 'Merchant';
  isVip: boolean;
  category: string;
  ticketId: string;
  time: string;
  status: TicketStatus;
  priority: Priority;
  isApproved?: boolean; // Untuk tanda centang hijau atau silang merah di 'Solved'
  message: string;
  avatar: string;
}

// --- DUMMY DATA ---
const INITIAL_TICKETS: Ticket[] = [
  // Unsolved
  { id: '1', name: 'Sarah', role: 'User', isVip: true, category: 'Fake or fraudulent business', ticketId: '#TK-8832', time: '20.00', status: 'Unsolved', priority: null, message: 'Hi team, I found a business using a fake address.', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: '2', name: 'Budi', role: 'Merchant', isVip: false, category: 'Inaccurate business information', ticketId: '#TK-8833', time: '19.30', status: 'Unsolved', priority: null, message: 'My store address is wrong on the map.', avatar: 'https://i.pravatar.cc/150?img=11' },
  { id: '3', name: 'Alex', role: 'User', isVip: true, category: 'Policy violation (illegal business)', ticketId: '#TK-8834', time: '18.15', status: 'Unsolved', priority: null, message: 'This seller is violating terms of service.', avatar: 'https://i.pravatar.cc/150?img=33' },
  
  // Pending
  { id: '4', name: 'Diana', role: 'User', isVip: true, category: 'Fake or fraudulent business', ticketId: '#TK-8835', time: '15.00', status: 'Pending', priority: 1, message: 'I was scammed by this store.', avatar: 'https://i.pravatar.cc/150?img=44' },
  { id: '5', name: 'Joko', role: 'Merchant', isVip: true, category: 'Sham or misleading practices', ticketId: '#TK-8836', time: '14.20', status: 'Pending', priority: 2, message: 'Competitor is leaving fake reviews on my page.', avatar: 'https://i.pravatar.cc/150?img=55' },
  { id: '6', name: 'Siti', role: 'User', isVip: false, category: 'Report a post', ticketId: '#TK-8837', time: '10.00', status: 'Pending', priority: 3, message: 'Inappropriate post content.', avatar: 'https://i.pravatar.cc/150?img=66' },

  // Solved
  { id: '7', name: 'Kevin', role: 'User', isVip: true, category: 'Fake or fraudulent business', ticketId: '#TK-8838', time: '19.00\n12m', status: 'Solved', priority: null, isApproved: true, message: 'Thanks for taking down the fake store.', avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: '8', name: 'Maya', role: 'Merchant', isVip: true, category: 'Report a review', ticketId: '#TK-8839', time: '12.00\n12m', status: 'Solved', priority: null, isApproved: false, message: 'Why wasn\'t this bad review removed?', avatar: 'https://i.pravatar.cc/150?img=20' },
];

const MENU_CATEGORIES = [
  {
    title: 'Report a Business',
    items: ['Fake or fraudulent business', 'Inaccurate business information', 'Policy violation (illegal business)', 'Sham or misleading practices', 'Other']
  },
  { title: 'Report a post', items: ['Spam', 'Hate speech'] },
  { title: 'Report a comment', items: ['Harassment', 'Spam'] },
  { title: 'Report a product', items: ['Counterfeit', 'Prohibited item'] },
  { title: 'Report a review', items: ['Fake review', 'Offensive language'] },
];

export default function ReportTicketPage() {
  const [tickets, setTickets] = useState<Ticket[]>(INITIAL_TICKETS);
  const [activeMenu, setActiveMenu] = useState<string>('Report a Business');
  const [activeCategory, setActiveCategory] = useState<string>('Fake or fraudulent business');
  const [selectedTicketId, setSelectedTicketId] = useState<string>('1');
  
  // State untuk dropdown menu bendera prioritas
  const [showFlagDropdown, setShowFlagDropdown] = useState(false);

  const activeTicket = tickets.find(t => t.id === selectedTicketId) || tickets[0];

  // Memfilter tiket berdasarkan kolom (status)
  const unsolvedTickets = tickets.filter(t => t.status === 'Unsolved');
  const pendingTickets = tickets.filter(t => t.status === 'Pending');
  const solvedTickets = tickets.filter(t => t.status === 'Solved');

  // Aksi untuk 3 Tombol (Agree, Pending, Decline) -> Lempar ke Inbox
  const handleActionClick = (action: string) => {
    if (action === 'Decline') {
      // Logika khusus untuk Decline (TIDAK pindah ke inbox)
      alert(`Tiket ${activeTicket.ticketId} telah ditolak (Declined).`);
      
      // Opsional: Anda bisa menambahkan logika setTickets di sini 
      // untuk menghapus tiket dari daftar atau mengubah statusnya menjadi 'Declined'
    } else {
      // Logika untuk Agree dan Pending (Pindah ke inbox)
      alert(`Aksi "${action}" dipilih untuk tiket ${activeTicket.ticketId}.\n\nMengalihkan Anda ke halaman Inbox...`);
      
      // Simulasi redirect ke inbox
      // window.location.href = '/inbox';
      // atau menggunakan useRouter() dari next/navigation:
      // router.push('/inbox');
    }
  };

  // Aksi memilih prioritas bendera (1, 2, 3)
  const handleSetPriority = (level: Priority) => {
    setTickets(prev => prev.map(t => 
      t.id === activeTicket.id ? { ...t, priority: level } : t
    ));
    setShowFlagDropdown(false);
  };

  return (
    <div className="flex flex-col h-screen bg-[#f8f9fa] font-sans text-gray-800">
      
      {/* HEADER ATAS */}
      <header className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-extrabold text-gray-900">Report & Support Ticket</h1>
          <div className="flex space-x-2 border border-gray-300 rounded-lg overflow-hidden">
            <button className="px-4 py-1.5 bg-teal-500 text-white text-sm font-medium">Report</button>
            <button className="px-4 py-1.5 bg-white text-gray-600 text-sm font-medium hover:bg-gray-50">Support Ticket</button>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Today: January 27, 2027
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <div className="flex flex-1 overflow-hidden p-6 gap-6">
        
        {/* KIRI: REPORT CATEGORY SIDEBAR */}
        <aside className="w-64 bg-white border border-gray-300 rounded-xl flex flex-col overflow-hidden shrink-0">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-bold text-lg mb-4">Report</h2>
            <div className="relative">
              <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input type="text" placeholder="Search..." className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-teal-500" />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto py-2">
            {MENU_CATEGORIES.map((menu) => (
              <div key={menu.title} className="mb-1">
                <button 
                  onClick={() => setActiveMenu(activeMenu === menu.title ? '' : menu.title)}
                  className="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-50 text-sm font-bold text-gray-900"
                >
                  {menu.title}
                  <svg className={`w-4 h-4 transform transition-transform ${activeMenu === menu.title ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                
                {activeMenu === menu.title && (
                  <div className="flex flex-col py-1">
                    {menu.items.map(item => (
                      <button
                        key={item}
                        onClick={() => setActiveCategory(item)}
                        className={`text-left px-4 py-2 text-sm pl-6 transition-colors ${activeCategory === item ? 'bg-[#d0f0e8] font-semibold text-teal-800' : 'text-gray-600 hover:bg-gray-100'}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* TENGAH: KANBAN BOARD */}
        <div className="flex-1 flex gap-4 overflow-x-auto min-w-0">
          
          {/* Column: Unsolved */}
          <div className="w-[320px] shrink-0 bg-white border border-gray-300 rounded-xl flex flex-col">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-xl">
              <div>
                <h3 className="font-bold text-lg text-gray-900">Unsolved</h3>
                <p className="text-xs text-gray-500">{unsolvedTickets.length} Open</p>
              </div>
              <span className="bg-red-600 text-white font-bold text-sm px-2.5 py-1 rounded-md">{unsolvedTickets.length}</span>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-[#f8f9fa]">
              {unsolvedTickets.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} isActive={selectedTicketId === ticket.id} onClick={() => setSelectedTicketId(ticket.id)} />
              ))}
            </div>
          </div>

          {/* Column: Pending */}
          <div className="w-[320px] shrink-0 bg-white border border-gray-300 rounded-xl flex flex-col">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-xl">
              <div>
                <h3 className="font-bold text-lg text-gray-900">Pending</h3>
                <p className="text-xs text-gray-500">{pendingTickets.length} Open</p>
              </div>
              <span className="bg-orange-500 text-white font-bold text-sm px-2.5 py-1 rounded-md">{pendingTickets.length}</span>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-[#f8f9fa]">
              {pendingTickets.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} isActive={selectedTicketId === ticket.id} onClick={() => setSelectedTicketId(ticket.id)} />
              ))}
            </div>
          </div>

          {/* Column: Solved */}
          <div className="w-[320px] shrink-0 bg-white border border-gray-300 rounded-xl flex flex-col">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-xl">
              <div>
                <h3 className="font-bold text-lg text-gray-900">Solved</h3>
                <p className="text-xs text-gray-500">{solvedTickets.length} Open</p>
              </div>
              <span className="bg-green-600 text-white font-bold text-sm px-2.5 py-1 rounded-md">{solvedTickets.length}</span>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-[#f8f9fa]">
              {solvedTickets.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} isActive={selectedTicketId === ticket.id} onClick={() => setSelectedTicketId(ticket.id)} />
              ))}
            </div>
          </div>

        </div>

        {/* KANAN: TICKET DETAIL & CHAT */}
        <aside className="w-[380px] bg-white border border-gray-300 rounded-xl flex flex-col shrink-0 relative">
          
          {/* Header Profil */}
          <div className="p-4 border-b border-gray-200 flex justify-between items-start">
            <div className="flex items-center space-x-3">
              <img src={activeTicket.avatar} alt={activeTicket.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-gray-900 text-base">{activeTicket.name}</span>
                  <span className="text-xs text-gray-500">({activeTicket.role})</span>
                  {activeTicket.isVip && <span className="bg-yellow-400 text-black text-[10px] font-bold px-1.5 py-0.5 rounded">VIP</span>}
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{activeTicket.category}</p>
                <p className="text-xs text-gray-400">{activeTicket.ticketId}</p>
              </div>
            </div>
            <span className="text-xs text-gray-400">12m</span>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col">
            <div className="mt-auto mb-4 self-start max-w-[85%]">
              <div className="flex space-x-2 items-start">
                <img src={activeTicket.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                <div className="bg-white border border-gray-300 p-3 rounded-xl rounded-tl-sm shadow-sm">
                  <p className="font-bold text-sm text-gray-900 mb-1">{activeTicket.name}</p>
                  <p className="text-sm text-gray-700">{activeTicket.message}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons & Flag */}
          <div className="px-4 py-3 flex space-x-2 items-center border-t border-gray-100">
            <button onClick={() => handleActionClick('Agree')} className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg text-sm">Agree</button>
            <button onClick={() => handleActionClick('Pending')} className="flex-1 border border-gray-300 text-gray-600 font-semibold py-2 rounded-lg hover:bg-gray-50 text-sm">Pending</button>
            <button onClick={() => handleActionClick('Decline')} className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg text-sm">Decline</button>
            
            {/* Wrapper Flag Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setShowFlagDropdown(!showFlagDropdown)} 
                className="w-10 h-10 bg-teal-500 hover:bg-teal-600 text-white rounded-lg flex items-center justify-center relative"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
                {activeTicket.priority && (
                   <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">{activeTicket.priority}</span>
                )}
              </button>

              {/* Popup Dropdown Bendera */}
              {showFlagDropdown && (
                <div className="absolute bottom-full right-0 mb-2 w-16 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-20">
                  <div className="flex flex-col">
                    {[1, 2, 3].map(level => (
                      <button 
                        key={level} 
                        onClick={() => handleSetPriority(level as Priority)}
                        className="flex items-center justify-center space-x-1 py-2 hover:bg-gray-100 text-sm border-b last:border-b-0 border-gray-100"
                      >
                         <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
                         <span className="font-bold">{level}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-gray-50 border-t border-gray-200 rounded-b-xl">
            <div className="relative">
              <textarea 
                placeholder="Write a reply..." 
                className="w-full bg-gray-100 rounded-xl p-3 pb-12 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-500 resize-none h-24 text-sm"
              ></textarea>
              <div className="absolute bottom-3 left-3 flex space-x-3 text-gray-500">
                <button className="hover:text-gray-700"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg></button>
                <button className="hover:text-gray-700"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button>
                <button className="hover:text-gray-700"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></button>
              </div>
              <div className="absolute bottom-3 right-3">
                <button className="bg-black hover:bg-gray-800 text-white px-4 py-1.5 rounded-md text-sm font-bold flex items-center space-x-1">
                  <span>Send</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </button>
              </div>
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
}

// --- KOMPONEN KARTU TIKET KECIL (Digunakan di 3 Kolom) ---
function TicketCard({ ticket, isActive, onClick }: { ticket: Ticket, isActive: boolean, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`bg-white p-4 rounded-xl border cursor-pointer transition-all relative ${isActive ? 'border-teal-500 shadow-md ring-1 ring-teal-500 ring-opacity-50' : 'border-gray-200 shadow-sm hover:border-gray-300'}`}
    >
      {/* Tanda Abu-Abu di Kanan (Indikator Aktif) */}
      <div className={`absolute top-2 bottom-2 right-1.5 w-1.5 rounded-full ${isActive ? 'bg-gray-400' : 'bg-transparent'}`}></div>

      <div className="flex items-start space-x-3 pr-4">
        <img src={ticket.avatar} alt={ticket.name} className="w-10 h-10 rounded-full object-cover" />
        <div className="flex-1">
          <div className="flex items-center space-x-1 flex-wrap">
            <span className="font-bold text-gray-900 text-sm">{ticket.name}</span>
            <span className="text-xs text-gray-500">({ticket.role})</span>
            {ticket.isVip && <span className="bg-yellow-400 text-black text-[10px] font-bold px-1 rounded-sm">VIP</span>}
          </div>
          <p className="text-xs text-gray-500 mt-1 leading-snug">{ticket.category}</p>
          <div className="flex justify-between items-end mt-2">
            <span className="text-xs text-gray-400">{ticket.ticketId}</span>
            
            <div className="flex flex-col items-end">
               <span className="text-xs text-gray-400 whitespace-pre-line text-right">{ticket.time}</span>
               
               {/* Icon Priority (Pending) atau Status (Solved) */}
               {ticket.priority && (
                 <span className="mt-1 bg-[#00a651] text-white text-[10px] px-1.5 py-0.5 rounded flex items-center space-x-1">
                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
                   <span>{ticket.priority}</span>
                 </span>
               )}
               {ticket.status === 'Solved' && ticket.isApproved === true && (
                 <span className="mt-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white">
                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                 </span>
               )}
               {ticket.status === 'Solved' && ticket.isApproved === false && (
                 <span className="mt-1 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white">
                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                 </span>
               )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}