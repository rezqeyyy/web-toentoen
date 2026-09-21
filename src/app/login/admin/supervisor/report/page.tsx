"use client";

import React, { useState, useRef, useEffect, useMemo } from 'react';

// --- MOCK DATA STAFF ADMIN ---
const staffAdmins = [
  { id: 'SA-001', name: 'Budi Santoso', role: 'Staff Admin - Tier 1', avatar: 'https://i.pravatar.cc/150?u=budi' },
  { id: 'SA-002', name: 'Siti Aminah', role: 'Staff Admin - Tier 2', avatar: 'https://i.pravatar.cc/150?u=siti' },
  { id: 'SA-003', name: 'Agus Pratama', role: 'Staff Admin - Tier 1', avatar: 'https://i.pravatar.cc/150?u=agus' },
  { id: 'SA-004', name: 'Rina Melati', role: 'Staff Admin - Tier 3', avatar: 'https://i.pravatar.cc/150?u=rina' },
];

const sidebarMenus = [
  {
    title: "Report a Business",
    items: ["Fake or fraudulent business", "Inaccurate business information", "Policy violation (Illegal business)", "Sham or misleading practices", "Other"]
  },
  {
    title: "Report a post",
    items: ["Spam content", "Inappropriate media", "Copyright violation"]
  },
  {
    title: "Report a comment",
    items: ["Hate speech", "Harassment or bullying", "Promotional spam"]
  },
  {
    title: "Report a product",
    items: ["Counterfeit item", "Misleading description", "Prohibited item"]
  },
  {
    title: "Report a review",
    items: ["Fake review", "Offensive language", "Irrelevant to product"]
  }
];

// Generator tiket dummy per staff
const generateAllTickets = () => {
  const users = [
    { name: "Sarah", role: "(User)", isVip: true, issue: "Fake or fraudulent business", avatar: "https://i.pravatar.cc/150?u=1" },
    { name: "Michael", role: "(Merchant)", isVip: false, issue: "Policy violation (Illegal business)", avatar: "https://i.pravatar.cc/150?u=2" },
    { name: "Andi", role: "(User)", isVip: false, issue: "Inaccurate business information", avatar: "https://i.pravatar.cc/150?u=3" },
    { name: "Dewi", role: "(Merchant)", isVip: true, issue: "Sham or misleading practices", avatar: "https://i.pravatar.cc/150?u=4" },
    { name: "Bambang", role: "(User)", isVip: false, issue: "Other", avatar: "https://i.pravatar.cc/150?u=5" },
  ];

  let tickets: any[] = [];
  let idCounter = 8830;

  staffAdmins.forEach((staff, staffIdx) => {
    // Unsolved
    for (let i = 0; i < 3; i++) {
      const u = users[(staffIdx + i) % users.length];
      tickets.push({
        id: `#TK-UN-${idCounter++}`,
        statusGroup: 'unsolved',
        assignedTo: staff.id,
        assignedStaffName: staff.name,
        name: u.name,
        role: u.role,
        isVip: u.isVip,
        issue: u.issue,
        time: "20.00",
        avatar: u.avatar,
        duration: "10m",
        flag: { type: 'red', count: 1 },
        messages: [{ sender: 'user', text: `[Staff: ${staff.name}] Halo, bisnis ini terindikasi penipuan. Tolong diproses.` }]
      });
    }

    // Pending
    for (let i = 0; i < 2; i++) {
      const u = users[(staffIdx + i + 1) % users.length];
      tickets.push({
        id: `#TK-PD-${idCounter++}`,
        statusGroup: 'pending',
        assignedTo: staff.id,
        assignedStaffName: staff.name,
        name: u.name,
        role: u.role,
        isVip: u.isVip,
        issue: u.issue,
        time: "19.30",
        avatar: u.avatar,
        duration: "25m",
        flag: { type: i % 2 === 0 ? 'orange' : 'green', count: i + 1 },
        messages: [{ sender: 'user', text: `[Staff: ${staff.name}] Bukti pendukung sudah saya unggah, mohon konfirmasi.` }]
      });
    }

    // Solved
    for (let i = 0; i < 2; i++) {
      const u = users[(staffIdx + i + 2) % users.length];
      tickets.push({
        id: `#TK-SL-${idCounter++}`,
        statusGroup: 'solved',
        assignedTo: staff.id,
        assignedStaffName: staff.name,
        name: u.name,
        role: u.role,
        isVip: u.isVip,
        issue: u.issue,
        time: "18.00",
        avatar: u.avatar,
        duration: "12m",
        flag: { type: 'green', count: 1 },
        messages: [{ sender: 'user', text: `[Staff: ${staff.name}] Terima kasih telah menyelesaikan laporan ini.` }]
      });
    }
  });

  return tickets;
};

export default function SupervisorReportPage() {
  // Master State Tiket
  const [tickets, setTickets] = useState<any[]>(() => generateAllTickets());

  // Filter Staff State
  const [selectedStaff, setSelectedStaff] = useState<any | null>(null); // null = All Staff Admin
  const [staffSearchQuery, setStaffSearchQuery] = useState("");
  const [showStaffDropdown, setShowStaffDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sidebar State
  const [expandedMenu, setExpandedMenu] = useState<string>("Report a Business");
  const [activeCategory, setActiveCategory] = useState<string>("Fake or fraudulent business");

  // Chat Panel State
  const [selectedTicket, setSelectedTicket] = useState<any | null>(null);
  const [chatInput, setChatInput] = useState("");
  const [showFlagMenu, setShowFlagMenu] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowStaffDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter tiket sesuai staff yang dipilih
  const filteredTickets = useMemo(() => {
    if (!selectedStaff) return tickets;
    return tickets.filter(t => t.assignedTo === selectedStaff.id);
  }, [tickets, selectedStaff]);

  // Pisahkan ke dalam 3 kolom Kanban
  const unsolvedTickets = useMemo(() => filteredTickets.filter(t => t.statusGroup === 'unsolved'), [filteredTickets]);
  const pendingTickets = useMemo(() => filteredTickets.filter(t => t.statusGroup === 'pending'), [filteredTickets]);
  const solvedTickets = useMemo(() => filteredTickets.filter(t => t.statusGroup === 'solved'), [filteredTickets]);

  // Reset selected ticket jika tidak ada di list filter saat ini
  useEffect(() => {
    if (selectedTicket) {
      const isStillVisible = filteredTickets.some(t => t.id === selectedTicket.id);
      if (!isStillVisible) {
        setSelectedTicket(null);
      }
    }
  }, [selectedStaff, filteredTickets, selectedTicket]);

  // Auto-scroll chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [selectedTicket?.messages]);

  const handleSelectTicket = (ticket: any) => {
    setSelectedTicket(ticket);
    setShowFlagMenu(false);
  };

  const handleSendMessage = () => {
    if (!chatInput.trim() || !selectedTicket) return;
    
    const newMessage = { sender: 'admin', text: chatInput };
    const updatedTicket = { ...selectedTicket, messages: [...selectedTicket.messages, newMessage] };
    
    setSelectedTicket(updatedTicket);
    setTickets(prev => prev.map(t => t.id === updatedTicket.id ? updatedTicket : t));
    setChatInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleAction = (actionName: string) => {
    if (!selectedTicket) return;
    
    alert(`Aksi [${actionName}] dipilih. Tiket ${selectedTicket.id} ditindaklanjuti.`);
    setTickets(prev => prev.filter(t => t.id !== selectedTicket.id));
    setSelectedTicket(null);
  };

  const handleSetPriority = (level: number) => {
    alert(`Prioritas tiket ${selectedTicket?.id} diubah ke Prioritas ${level}`);
    setShowFlagMenu(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans overflow-hidden">
      
      {/* 1. TOP HEADER */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shrink-0 shadow-sm">
        <div className="flex items-center space-x-6">
          <h1 className="text-xl font-extrabold text-gray-900">Report & Support Ticket</h1>
          
          <div className="flex bg-white rounded-lg border border-gray-300 overflow-hidden text-sm font-medium">
            <button className="bg-teal-500 text-white px-5 py-1.5 transition-colors">Report</button>
            <button className="text-gray-600 px-5 py-1.5 hover:bg-gray-50 transition-colors">Support Ticket</button>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Date</span>
            <select className="border border-gray-300 rounded-md px-3 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-teal-500 cursor-pointer">
              <option>Start</option>
            </select>
            <span>-</span>
            <select className="border border-gray-300 rounded-md px-3 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-teal-500 cursor-pointer">
              <option>End</option>
            </select>
            <span className="text-gray-400 px-1">/</span>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-1.5 rounded-md text-xs font-bold transition-colors">Live</button>
            
            <span className="ml-4 font-bold text-gray-700">By</span>
            
            {/* SELECTOR FILTER STAFF ADMIN */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setShowStaffDropdown(!showStaffDropdown)}
                className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-1.5 bg-white text-sm font-medium w-56 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors text-left"
              >
                <span className="truncate text-gray-800">
                  {selectedStaff ? selectedStaff.name : "Search Staff Admin..."}
                </span>
                <svg className={`w-4 h-4 ml-2 text-gray-400 transition-transform ${showStaffDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* DROPDOWN MENU - SELALU MENAMPILKAN SELURUH STAFF */}
              {showStaffDropdown && (
                <div className="absolute top-full mt-1 left-0 w-64 bg-white border border-gray-200 shadow-xl rounded-lg z-50 py-1 overflow-hidden">
                  
                  {/* Search box internal jika staff sangat banyak */}
                  <div className="px-2 pb-2 pt-1.5 border-b border-gray-100">
                    <input 
                      type="text" 
                      placeholder="Filter list staff..."
                      value={staffSearchQuery}
                      onChange={(e) => setStaffSearchQuery(e.target.value)}
                      className="w-full px-2.5 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 bg-gray-50"
                      autoFocus
                    />
                  </div>

                  <div className="max-h-60 overflow-y-auto custom-scrollbar">
                    {/* Opsi: All Staff Admin (Gabungan) */}
                    <div 
                      onClick={() => {
                        setSelectedStaff(null);
                        setShowStaffDropdown(false);
                        setStaffSearchQuery("");
                      }}
                      className={`px-3 py-2 text-xs font-bold cursor-pointer border-b border-gray-100 flex items-center justify-between transition-colors ${!selectedStaff ? 'bg-teal-50 text-teal-700' : 'hover:bg-gray-50 text-gray-700'}`}
                    >
                      <span>Search Staff Admin...</span>
                      {!selectedStaff && <span className="text-[10px] bg-teal-200 text-teal-800 px-1.5 py-0.5 rounded font-bold">Semua</span>}
                    </div>

                    {/* Menampilkan Seluruh Staff Admin */}
                    {staffAdmins
                      .filter(s => s.name.toLowerCase().includes(staffSearchQuery.toLowerCase()))
                      .map(staff => {
                        const isSelected = selectedStaff?.id === staff.id;
                        return (
                          <div 
                            key={staff.id} 
                            onClick={() => {
                              setSelectedStaff(staff);
                              setShowStaffDropdown(false);
                              setStaffSearchQuery("");
                            }}
                            className={`px-3 py-2 hover:bg-teal-50 cursor-pointer flex items-center space-x-2.5 border-b border-gray-50 last:border-0 transition-colors ${isSelected ? 'bg-teal-50/80 font-bold' : ''}`}
                          >
                            <img src={staff.avatar} alt={staff.name} className="w-7 h-7 rounded-full object-cover shrink-0 border border-gray-200" />
                            <div className="flex-1 min-w-0">
                              <div className="text-xs text-gray-900 truncate">{staff.name}</div>
                              <div className="text-[10px] text-gray-400 truncate">{staff.role}</div>
                            </div>
                            {isSelected && (
                              <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0"></span>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-sm font-semibold text-gray-800">
          Today: January 27, 2027
        </div>
      </header>

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex flex-1 overflow-hidden p-4 gap-4">
        
        {/* KOLOM KIRI: REPORT CATEGORY SIDEBAR */}
        <div className="w-64 flex flex-col shrink-0 bg-transparent">
          <h2 className="font-bold text-gray-900 mb-3 text-lg">Report</h2>
          <div className="relative mb-4">
            <svg className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input type="text" placeholder="Search..." className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-teal-500" />
          </div>

          <div className="flex-1 overflow-y-auto pr-2 space-y-1 text-sm font-semibold text-gray-800 custom-scrollbar">
            {sidebarMenus.map((menu, idx) => (
              <div key={idx}>
                <div 
                  onClick={() => setExpandedMenu(expandedMenu === menu.title ? "" : menu.title)}
                  className={`flex justify-between items-center py-2 cursor-pointer transition-colors ${expandedMenu === menu.title ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'}`}
                >
                  <span>{menu.title}</span>
                  <svg className={`w-4 h-4 transition-transform ${expandedMenu === menu.title ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
                
                {expandedMenu === menu.title && (
                  <div className="ml-2 mt-1 mb-2 space-y-1 border-l-2 border-gray-200 pl-3 text-xs font-medium text-gray-600">
                    {menu.items.map((item, subIdx) => (
                      <div 
                        key={subIdx}
                        onClick={() => setActiveCategory(item)} 
                        className={`py-2 px-3 rounded-md cursor-pointer transition-colors ${activeCategory === item ? 'bg-teal-100 text-teal-800 font-bold' : 'hover:bg-gray-100'}`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* KOLOM TENGAH: KANBAN BOARD */}
        <div className="flex-1 flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
          
          {/* UNSOLVED COLUMN */}
          <div className="w-[300px] flex flex-col border border-gray-300 rounded-xl bg-white shrink-0 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white shrink-0">
              <div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight">Unsolved</h3>
                <p className="text-xs text-gray-500 mt-0.5">{unsolvedTickets.length} Open</p>
              </div>
              <span className="bg-red-600 text-white text-sm font-bold px-2.5 py-1 rounded-md">{unsolvedTickets.length}</span>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50/50 custom-scrollbar">
              {unsolvedTickets.map((ticket) => (
                <div key={ticket.id} onClick={() => handleSelectTicket(ticket)} className={`border rounded-xl p-3 bg-white shadow-sm cursor-pointer relative transition-colors ${selectedTicket?.id === ticket.id ? 'border-teal-500 bg-teal-50/10' : 'border-gray-200 hover:border-gray-400'}`}>
                  <div className="flex items-start space-x-3">
                    <img src={ticket.avatar} alt="Avatar" className="w-8 h-8 rounded-full object-cover shrink-0" />
                    <div className="flex-1 text-xs">
                      <div className="flex items-center space-x-1.5 mb-1">
                        <span className="font-bold text-gray-900">{ticket.name}</span>
                        <span className="text-gray-500">{ticket.role}</span>
                        {ticket.isVip && <span className="bg-yellow-400 text-black text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">VIP</span>}
                      </div>
                      <p className="text-gray-600 mb-1">{ticket.issue}</p>
                      
                      {!selectedStaff && (
                        <div className="mb-2">
                          <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200">
                            Admin: <b>{ticket.assignedStaffName}</b>
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between text-gray-400 font-medium">
                        <span>{ticket.id}</span>
                        <span>{ticket.time}</span>
                      </div>
                    </div>
                  </div>
                  {selectedTicket?.id === ticket.id && <div className="absolute right-0 top-3 bottom-3 w-1.5 bg-gray-300 rounded-l-full"></div>}
                </div>
              ))}
            </div>
          </div>

          {/* PENDING COLUMN */}
          <div className="w-[300px] flex flex-col border border-gray-300 rounded-xl bg-white shrink-0 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white shrink-0">
              <div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight">Pending</h3>
                <p className="text-xs text-gray-500 mt-0.5">{pendingTickets.length} Open</p>
              </div>
              <span className="bg-orange-500 text-white text-sm font-bold px-2.5 py-1 rounded-md">{pendingTickets.length}</span>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50/50 custom-scrollbar">
              {pendingTickets.map((ticket) => (
                <div key={ticket.id} onClick={() => handleSelectTicket(ticket)} className={`border rounded-xl p-3 bg-white shadow-sm cursor-pointer relative transition-colors ${selectedTicket?.id === ticket.id ? 'border-teal-500 bg-teal-50/10' : 'border-gray-200 hover:border-gray-400'}`}>
                  <div className="flex items-start space-x-3">
                    <img src={ticket.avatar} alt="Avatar" className="w-8 h-8 rounded-full object-cover shrink-0" />
                    <div className="flex-1 text-xs">
                      <div className="flex items-center space-x-1.5 mb-1">
                        <span className="font-bold text-gray-900">{ticket.name}</span>
                        <span className="text-gray-500">{ticket.role}</span>
                        {ticket.isVip && <span className="bg-yellow-400 text-black text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">VIP</span>}
                      </div>
                      <p className="text-gray-600 mb-1">{ticket.issue}</p>

                      {!selectedStaff && (
                        <div className="mb-2">
                          <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200">
                            Admin: <b>{ticket.assignedStaffName}</b>
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between items-center text-gray-400 font-medium">
                        <span>{ticket.id}</span>
                        <div className="flex items-center space-x-2">
                          <span>{ticket.time}</span>
                          <span className={`flex items-center px-1.5 py-0.5 rounded text-white font-bold space-x-1 ${
                            ticket.flag.type === 'green' ? 'bg-emerald-500' : ticket.flag.type === 'orange' ? 'bg-orange-500' : 'bg-red-600'
                          }`}>
                            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" /></svg>
                            <span>{ticket.flag.count}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {selectedTicket?.id === ticket.id && <div className="absolute right-0 top-3 bottom-3 w-1.5 bg-gray-300 rounded-l-full"></div>}
                </div>
              ))}
            </div>
          </div>

          {/* SOLVED COLUMN */}
          <div className="w-[300px] flex flex-col border border-gray-300 rounded-xl bg-white shrink-0 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white shrink-0">
              <div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight">Solved</h3>
                <p className="text-xs text-gray-500 mt-0.5">{solvedTickets.length} Open</p>
              </div>
              <span className="bg-emerald-500 text-white text-sm font-bold px-2.5 py-1 rounded-md">{solvedTickets.length}</span>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50/50 custom-scrollbar">
              {solvedTickets.map((ticket) => (
                <div key={ticket.id} onClick={() => handleSelectTicket(ticket)} className={`border rounded-xl p-3 bg-white shadow-sm cursor-pointer relative transition-colors ${selectedTicket?.id === ticket.id ? 'border-teal-500 bg-teal-50/10' : 'border-gray-200 hover:border-gray-400'}`}>
                  <div className="flex items-start space-x-3">
                    <img src={ticket.avatar} alt="Avatar" className="w-8 h-8 rounded-full object-cover shrink-0" />
                    <div className="flex-1 text-xs">
                      <div className="flex items-center space-x-1.5 mb-1">
                        <span className="font-bold text-gray-900">{ticket.name}</span>
                        <span className="text-gray-500">{ticket.role}</span>
                        {ticket.isVip && <span className="bg-yellow-400 text-black text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">VIP</span>}
                      </div>
                      <p className="text-gray-600 mb-1">{ticket.issue}</p>

                      {!selectedStaff && (
                        <div className="mb-2">
                          <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200">
                            Admin: <b>{ticket.assignedStaffName}</b>
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between items-end">
                        <span className="text-gray-400 font-medium">{ticket.id}</span>
                        <div className="flex flex-col items-end space-y-1">
                          <span className="text-gray-400">{ticket.time}</span>
                          <span className="text-gray-500 font-medium">{ticket.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {selectedTicket?.id === ticket.id && <div className="absolute right-0 top-3 bottom-3 w-1.5 bg-gray-300 rounded-l-full"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: CHAT & ACTIONS PANEL */}
        <div className="w-[380px] border border-gray-300 rounded-xl bg-white flex flex-col shrink-0 shadow-sm overflow-hidden relative">
          
          {!selectedTicket ? (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-6 text-center">
               <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
               <p className="font-medium text-sm">Pilih salah satu tiket di Kanban board untuk melihat detail interaksi laporan.</p>
            </div>
          ) : (
            <>
              {/* Detail User Header */}
              <div className="p-4 border-b border-gray-100 flex items-start space-x-3 shrink-0 bg-white shadow-sm z-10">
                <img src={selectedTicket.avatar} alt="Profile" className="w-10 h-10 rounded-full object-cover border border-gray-200 shrink-0" />
                <div className="flex-1 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <span className="font-bold text-gray-900">{selectedTicket.name}</span>
                      <span className="text-gray-500 text-xs">{selectedTicket.role}</span>
                      {selectedTicket.isVip && <span className="bg-yellow-400 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase">VIP</span>}
                    </div>
                    <span className="text-gray-400 text-xs font-medium">{selectedTicket.duration}</span>
                  </div>
                  <p className="text-gray-600 text-xs mt-0.5 font-medium">{selectedTicket.issue}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-gray-400 text-xs font-medium">{selectedTicket.id}</span>
                    <span className="text-[10px] bg-teal-50 text-teal-700 font-bold px-2 py-0.5 rounded border border-teal-200">
                      Assigned to: {selectedTicket.assignedStaffName}
                    </span>
                  </div>
                </div>
              </div>

              {/* Chat Stream */}
              <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-5 flex flex-col space-y-4 bg-gray-50/50 custom-scrollbar">
                {selectedTicket.messages.map((msg: any, index: number) => (
                  <div key={index} className={`flex items-start space-x-3 w-full ${msg.sender === 'admin' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    {msg.sender === 'user' && (
                      <img src={selectedTicket.avatar} alt="User" className="w-8 h-8 rounded-full object-cover shrink-0 border border-gray-200" />
                    )}
                    <div className={`p-3 shadow-sm text-sm max-w-[260px] ${
                      msg.sender === 'admin' 
                        ? 'bg-teal-500 text-white rounded-2xl rounded-tr-none' 
                        : 'bg-white border border-gray-200 rounded-2xl rounded-tl-none text-gray-800'
                    }`}>
                      {msg.sender === 'user' && <h5 className="font-bold text-gray-900 mb-1 text-xs">{selectedTicket.name}</h5>}
                      <p className={`leading-relaxed text-xs ${msg.sender === 'admin' ? 'text-teal-50' : 'text-gray-600'}`}>
                        {msg.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons & Chat Input */}
              <div className="p-4 bg-white shrink-0 border-t border-gray-100 space-y-3 relative">
                <div className="flex space-x-2">
                    <button onClick={() => handleAction('Agree')} className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-lg flex-1 transition-colors">Agree</button>
                    <button onClick={() => handleAction('Pending')} className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-lg flex-1 transition-colors">Pending</button>
                    <button onClick={() => handleAction('Decline')} className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-lg flex-1 transition-colors">Decline</button>
                    
                    <div className="relative flex">
                      <button 
                        onClick={() => setShowFlagMenu(!showFlagMenu)} 
                        className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" /></svg>
                      </button>

                      {showFlagMenu && (
                        <div className="absolute bottom-full mb-2 right-0 bg-white border border-gray-200 shadow-xl rounded-lg p-2 flex flex-col space-y-1.5 z-20 min-w-[50px]">
                          {[3, 2, 1].map((level) => (
                            <React.Fragment key={level}>
                              <button onClick={() => handleSetPriority(level)} className="flex items-center space-x-2 text-xs font-bold px-2 py-1.5 hover:bg-gray-100 rounded text-gray-700 transition-colors w-full">
                                <svg className={`w-3 h-3 ${level === 3 ? 'text-red-500' : level === 2 ? 'text-orange-500' : 'text-emerald-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg> 
                                <span>{level}</span>
                              </button>
                              {level > 1 && <div className="border-t border-gray-100 w-full"></div>}
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>
                </div>

                <div className="border border-gray-300 rounded-xl p-3 bg-gray-50 flex flex-col shadow-sm focus-within:ring-1 focus-within:ring-teal-500 transition-shadow">
                    <textarea 
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Write a reply... (Press Enter to send)" 
                      className="bg-transparent w-full resize-none text-xs focus:outline-none mb-3 text-gray-700 h-16"
                    ></textarea>
                    
                    <div className="flex justify-between items-center text-gray-500">
                      <div className="flex space-x-3">
                          <svg className="w-5 h-5 cursor-pointer hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                          <svg className="w-5 h-5 cursor-pointer hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          <svg className="w-5 h-5 cursor-pointer hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                      </div>
                      <button 
                        onClick={handleSendMessage}
                        disabled={!chatInput.trim()}
                        className="bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                      >
                        <span>Send</span>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                      </button>
                    </div>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}