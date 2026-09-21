"use client";

import React, { useState } from 'react';

// --- DUMMY DATA ---
const ticketsData = [
  {
    id: "#TK-8832",
    agent: "Layla (Admin)",
    date: "January 20, 2027",
    rating: 5,
    waitingTime: "8m 20s",
    chatTime: "10m 35s",
    avatar: "https://i.pravatar.cc/150?img=5",
    type: "VIP"
  },
  {
    id: "#TK-7642",
    agent: "Layla (Admin)",
    date: "January 20, 2027",
    rating: 4,
    waitingTime: "8m 20s",
    chatTime: "10m 35s",
    avatar: "https://i.pravatar.cc/150?img=5",
    type: "Standard"
  },
  {
    id: "#TK-7632",
    agent: "Layla (Admin)",
    date: "January 20, 2027",
    rating: 2,
    waitingTime: "8m 20s",
    chatTime: "10m 35s",
    avatar: "https://i.pravatar.cc/150?img=5",
    type: "Standard"
  },
  {
    id: "#TK-5832",
    agent: "Layla (Admin)",
    date: "January 20, 2027",
    rating: 5,
    waitingTime: "8m 20s",
    chatTime: "10m 35s",
    avatar: "https://i.pravatar.cc/150?img=5",
    type: "VIP"
  },
  {
    id: "#TK-8834",
    agent: "Layla (Admin)",
    date: "January 20, 2027",
    rating: 5,
    waitingTime: "8m 20s",
    chatTime: "10m 35s",
    avatar: "https://i.pravatar.cc/150?img=5",
    type: "Standard"
  }
];

export default function SupervisorInboxPage() {
  const [selectedTicket, setSelectedTicket] = useState(ticketsData[0]);
  const [activeTab, setActiveTab] = useState<'queue' | 'solved'>('queue');
  const [filterType, setFilterType] = useState('All');

  // Helper render Bintang Rating
  const renderStars = (count: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <div className="flex h-screen bg-white text-gray-800 font-sans overflow-hidden">
      
      {/* ================= COLUMN 1: TICKET LIST ================= */}
      <div className="w-80 border-r border-gray-200 flex flex-col h-full bg-white shrink-0">
        <div className="p-4 border-b border-gray-100 space-y-3">
          <h1 className="text-xl font-bold text-gray-900">Inbox</h1>
          
          {/* Filter Dropdown */}
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <span>Filter</span>
            <select className="border border-gray-300 rounded-md px-2 py-1 text-xs bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-500">
              <option>Filter by...</option>
            </select>
          </div>

          {/* Search Box */}
          <div className="relative">
            <svg className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search tickets or customers..." 
              className="w-full pl-9 pr-3 py-1.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>

          {/* Queue / Solved Toggle */}
          <div className="flex space-x-2 text-xs font-semibold">
            <button 
              onClick={() => setActiveTab('queue')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === 'queue' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Queue (100)
            </button>
            <button 
              onClick={() => setActiveTab('solved')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${activeTab === 'solved' ? 'bg-teal-500 text-white border-teal-500' : 'border-gray-300 text-gray-600 hover:bg-gray-50'}`}
            >
              Solved (20)
            </button>
          </div>

          {/* Sub Filters */}
          <div className="flex items-center space-x-1 text-xs pt-1">
            {['All', 'VIP', 'Standard'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                  filterType === type 
                    ? 'bg-teal-500 text-white' 
                    : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {type}
              </button>
            ))}
            <select className="border border-gray-300 rounded-md px-1.5 py-1 text-[11px] text-gray-600 bg-white focus:outline-none ml-auto">
              <option>Sort by...</option>
            </select>
          </div>
        </div>

        {/* Ticket Items Scrollable */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {ticketsData.map((ticket, idx) => {
            const isSelected = selectedTicket.id === ticket.id;
            return (
              <div
                key={idx}
                onClick={() => setSelectedTicket(ticket)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  isSelected 
                    ? 'border-gray-400 bg-white shadow-sm ring-1 ring-gray-300' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <img src={ticket.avatar} alt="Agent" className="w-8 h-8 rounded-full object-cover" />
                  <div className="flex-1 text-xs space-y-1">
                    <h4 className="font-bold text-gray-900">{ticket.agent}</h4>
                    <p className="text-gray-500 text-[11px]">Code: <span className="font-semibold text-gray-700">{ticket.id}</span></p>
                    <p className="text-gray-400 text-[10px]">Date: {ticket.date}</p>
                    
                    <div className="flex items-center space-x-1 pt-0.5">
                      <span className="text-gray-500 text-[11px]">Rating:</span>
                      <div className="flex text-xs">{renderStars(ticket.rating)}</div>
                    </div>

                    <div className="text-[10px] text-gray-500 pt-1 space-y-0.5">
                      <p>Waiting time: <span className="font-medium text-gray-700">{ticket.waitingTime}</span></p>
                      <p>Chat time: <span className="font-medium text-gray-700">{ticket.chatTime}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= COLUMN 2: CHAT CONVERSATION ================= */}
      <div className="flex-1 flex flex-col h-full bg-white border-r border-gray-200">
        
        {/* Chat Header */}
        <div className="p-4 border border-gray-300 rounded-xl m-4 mb-2 flex justify-between items-center bg-white shadow-sm">
          <div>
            <h2 className="text-base font-bold text-gray-900">Hi team, I renewed our annual...</h2>
            <span className="text-xs text-gray-500 font-medium">{selectedTicket.id}</span>
          </div>
          <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-lg flex items-center space-x-1">
            <span>Solved</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
          </span>
        </div>

        {/* Conversation Stream */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 text-xs">
          
          {/* Sarah Message 1 */}
          <div className="flex items-start space-x-3 max-w-xl">
            <img src="https://i.pravatar.cc/150?img=9" alt="Sarah" className="w-8 h-8 rounded-full object-cover shrink-0" />
            <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm text-gray-800 space-y-1">
              <h5 className="font-bold text-gray-900 text-xs">Sarah</h5>
              <p className="leading-relaxed">
                Hi team, I renewed our annual plan this morning but my card has been charged twice. Could you please check this? We need the invoice corrected before finance closes today.
              </p>
              <span className="text-[10px] text-gray-400 block text-right pt-1">09.12</span>
            </div>
          </div>

          {/* You Message 1 */}
          <div className="flex justify-end">
            <div className="bg-teal-100 border border-teal-200 rounded-2xl p-4 max-w-xl text-gray-800 space-y-1">
              <h5 className="font-bold text-gray-900 text-xs">You</h5>
              <p className="leading-relaxed">
                I'm sorry for the duplicate charge, Sarah. I'm reviewing the payment record now and will confirm the reversal shortly.
              </p>
              <div className="flex justify-end items-center space-x-1 text-[10px] text-gray-500 pt-1">
                <span>09.12</span>
                <span className="text-teal-600 font-bold">✓✓</span>
              </div>
            </div>
          </div>

          {/* Sarah Message 2 */}
          <div className="flex items-start space-x-3 max-w-xl">
            <img src="https://i.pravatar.cc/150?img=9" alt="Sarah" className="w-8 h-8 rounded-full object-cover shrink-0" />
            <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm text-gray-800 space-y-1">
              <h5 className="font-bold text-gray-900 text-xs">Sarah</h5>
              <p className="leading-relaxed">
                Thank you, please send the corrected invoice to me as well.
              </p>
              <span className="text-[10px] text-gray-400 block text-right pt-1">09.12</span>
            </div>
          </div>

          {/* You Message 2 */}
          <div className="flex justify-end">
            <div className="bg-teal-100 border border-teal-200 rounded-2xl p-3 px-4 text-gray-800">
              <h5 className="font-bold text-gray-900 text-xs">You</h5>
              <p>Okay Sarah</p>
              <div className="flex justify-end items-center space-x-1 text-[10px] text-gray-500 pt-1">
                <span>09.12</span>
                <span className="text-teal-600 font-bold">✓</span>
              </div>
            </div>
          </div>

          {/* Feedback Prompt Card */}
          <div className="flex justify-end">
            <div className="bg-teal-100 border border-teal-200 rounded-2xl p-4 max-w-md w-full space-y-3">
              <div>
                <h5 className="font-bold text-gray-900 text-xs">Did our support team help resolve your issue?</h5>
                <p className="text-[11px] text-gray-600">We’d love to hear your feedback.</p>
              </div>
              
              <div className="flex space-x-1 text-xl">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-gray-300">★</span>
              </div>

              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold text-xs px-4 py-1.5 rounded-lg transition-colors">
                Submit Feedback
              </button>

              <div className="flex justify-end items-center space-x-1 text-[10px] text-gray-500">
                <span>09.12</span>
                <span className="text-teal-600 font-bold">✓</span>
              </div>
            </div>
          </div>

          {/* You Final Message */}
          <div className="flex justify-end">
            <div className="bg-teal-100 border border-teal-200 rounded-2xl p-3 px-4 text-gray-800">
              <h5 className="font-bold text-gray-900 text-xs">You</h5>
              <p>Thank you for giving us your feedback!</p>
              <div className="flex justify-end items-center space-x-1 text-[10px] text-gray-500 pt-1">
                <span>09.12</span>
                <span className="text-teal-600 font-bold">✓</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= COLUMN 3: CUSTOMER PROFILE SIDEBAR ================= */}
      <div className="w-80 p-4 border-l border-gray-200 h-full overflow-y-auto space-y-4 shrink-0 bg-white">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center space-y-1">
          <div className="relative">
            <img src="https://i.pravatar.cc/150?img=9" alt="Sarah" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
            <span className="absolute -bottom-1 -right-1 bg-yellow-400 text-black text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase border border-white">
              VIP
            </span>
          </div>
          <h3 className="font-bold text-gray-900 text-sm mt-1">
            Sarah <span className="font-normal text-gray-500">User</span>
          </h3>
          <p className="text-[11px] text-gray-500">sarahsarah@gmail.com</p>
          <p className="text-[11px] text-gray-500">+62 888-9999-2222</p>
        </div>

        {/* Account Overview Box */}
        <div className="bg-teal-100/70 border border-teal-200 rounded-xl p-4 space-y-2 text-xs">
          <h4 className="font-bold text-gray-900 text-xs mb-2">Account Overview</h4>
          
          <div className="flex justify-between text-gray-600">
            <span>Account Since</span>
            <span className="font-semibold text-gray-800">Jan 2027</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Subscription</span>
            <span className="font-semibold text-gray-800">Annual Plan</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Current Status</span>
            <span className="font-semibold text-gray-800">Active</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Last Payment</span>
            <span className="font-semibold text-gray-800">Today</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Total Tickets</span>
            <span className="font-semibold text-gray-800">12</span>
          </div>
        </div>

        {/* Current Ticket Box */}
        <div className="border border-gray-300 rounded-xl p-4 space-y-2 text-xs bg-white shadow-sm">
          <h4 className="font-bold text-gray-900 text-xs">Current Ticket</h4>
          <p className="text-gray-500 text-[11px] font-medium">{selectedTicket.id}</p>
          <p className="font-semibold text-gray-800">Double charge on annual renewal invoice</p>
          
          <div className="pt-1">
            <span className="inline-flex items-center space-x-1.5 bg-red-50 text-red-600 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-red-100">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              <span>Unsolved</span>
            </span>
          </div>
        </div>

        {/* Recent Activity Box */}
        <div className="border border-gray-300 rounded-xl p-4 space-y-3 text-xs bg-white shadow-sm">
          <h4 className="font-bold text-gray-900 text-xs">Recent Activity</h4>
          
          <div className="space-y-2 text-[11px]">
            <div className="flex justify-between">
              <span className="text-gray-500">Today</span>
              <span className="font-medium text-gray-800">Double charge</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Aug 2026</span>
              <span className="font-medium text-gray-800">Payment failed</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Feb 2026</span>
              <span className="font-medium text-gray-800">Can't change profile photo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Jan 2026</span>
              <span className="font-medium text-gray-800">Today</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}