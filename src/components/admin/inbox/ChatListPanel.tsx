import React, { useState } from 'react';
import { ChatSession } from '@/constants/api/admin/types';
import { StatusBadge } from './StatusBadge';

interface ChatListPanelProps {
  chatList: ChatSession[];
  isLoadingList: boolean;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedChatId: string | null;
  setSelectedChatId: (id: string) => void;
}

export const ChatListPanel: React.FC<ChatListPanelProps> = ({
  chatList, isLoadingList, searchQuery, setSearchQuery, selectedChatId, setSelectedChatId
}) => {
  // State untuk melacak filter yang sedang aktif
  const [statusFilter, setStatusFilter] = useState<'Queue' | 'Solved'>('Queue');
  const [priorityFilter, setPriorityFilter] = useState<'All' | 'VIP' | 'Standard'>('All');

  // Logika penyaringan tiket
  const filteredChatList = chatList.filter(chat => {
    // 1. Filter Pencarian
    const matchSearch = chat.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        chat.ticketTitle.toLowerCase().includes(searchQuery.toLowerCase());
    
    // 2. Filter Status
    const matchStatus = statusFilter === 'Queue' 
      ? (chat.status === 'Unsolved' || chat.status === 'Process') 
      : chat.status === 'Done';

    // 3. Filter Prioritas
    const matchPriority = priorityFilter === 'All' 
      ? true 
      : priorityFilter === 'VIP' 
        ? chat.isVip === true 
        : chat.isVip === false;

    return matchSearch && matchStatus && matchPriority;
  });

  return (
    <section className="w-[320px] lg:w-[360px] border-r border-gray-200 flex flex-col bg-white">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Inbox</h1>
        
        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </span>
          <input 
            type="text" 
            placeholder="Search tickets..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-teal-500" 
          />
        </div>

        {/* Filter Status */}
        <div className="flex space-x-2 border-b border-gray-200 mb-4 pb-2">
          <button 
            onClick={() => setStatusFilter('Queue')}
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
              statusFilter === 'Queue' ? 'bg-teal-500 text-white' : 'text-gray-600 bg-gray-50 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            Queue
          </button>
          <button 
            onClick={() => setStatusFilter('Solved')}
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
              statusFilter === 'Solved' ? 'bg-teal-500 text-white' : 'text-gray-600 bg-gray-50 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            Solved
          </button>
        </div>

        {/* Filter Prioritas */}
        <div className="flex space-x-2">
          <button 
            onClick={() => setPriorityFilter('All')}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
              priorityFilter === 'All' ? 'bg-teal-500 text-white' : 'text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setPriorityFilter('VIP')}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
              priorityFilter === 'VIP' ? 'bg-teal-500 text-white' : 'text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            VIP
          </button>
          <button 
            onClick={() => setPriorityFilter('Standard')}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
              priorityFilter === 'Standard' ? 'bg-teal-500 text-white' : 'text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Standard
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {isLoadingList ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
          </div>
        ) : filteredChatList.length === 0 ? (
            <div className="text-center p-6 text-gray-500 text-sm">Belum ada tiket masuk</div>
        ) : (
          filteredChatList.map((chat) => (
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
          ))
        )}
      </div>
    </section>
  );
};