// src/components/social-media/SmChatView.tsx
"use client";

import React, { useState } from 'react';
import {
  SM_CHAT_CONTACTS,
  SM_CHAT_MESSAGES,
  SmChatContact,
  SmChatMessage,
} from '@/constants/socialMediaData';

export const SmChatView: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState<string>('All');
  const [selectedContact, setSelectedContact] = useState<SmChatContact>(SM_CHAT_CONTACTS[0]);
  const [messages, setMessages] = useState<SmChatMessage[]>(SM_CHAT_MESSAGES);
  const [replyText, setReplyText] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const channels = ['All', 'Whatsapp', 'Instagram', 'Facebook', 'Linkedin', 'Tiktok'];

  const handleSendMessage = () => {
    if (!replyText.trim()) return;

    const newMessage: SmChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'you',
      text: replyText.trim(),
      time: 'Just now',
      isRead: false,
    };

    setMessages((prev) => [...prev, newMessage]);
    setReplyText('');
  };

  const filteredContacts = SM_CHAT_CONTACTS.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs flex h-[calc(100vh-140px)] min-h-[550px]">
      {/* Left Contact List (w-80) */}
      <div className="w-80 border-r border-gray-200 flex flex-col shrink-0 bg-[#FBFBFC]">
        {/* Header */}
        <div className="p-4 border-b border-gray-100 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Chat</h2>
            {/* Filter Dropdown */}
            <button
              type="button"
              className="flex items-center gap-1.5 px-2.5 py-1 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 shadow-2xs"
            >
              <span>Filter by...</span>
              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Search bar */}
          <div className="relative">
            <svg
              className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tickets or customers..."
              className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00A896]"
            />
          </div>

          {/* Channel Filter Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {channels.map((chan) => (
              <button
                key={chan}
                type="button"
                onClick={() => setSelectedChannel(chan)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                  selectedChannel === chan
                    ? 'bg-[#00A896] text-white shadow-2xs'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {chan}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Contacts */}
        <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
          {filteredContacts.map((contact) => {
            const isSelected = selectedContact.id === contact.id;
            return (
              <div
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className={`p-3 flex items-center gap-3 cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-white shadow-xs border-l-4 border-l-[#00A896]'
                    : 'hover:bg-gray-100/60'
                }`}
              >
                <div className="relative shrink-0">
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-9 h-9 rounded-full object-cover border border-gray-200"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px] font-bold">
                    f
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold text-gray-900 block truncate">
                    {contact.name}
                  </span>
                  <span className="text-[10px] text-gray-500 block truncate">
                    {contact.platform}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Chat Panel */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="p-3.5 border-b border-gray-200 flex items-center gap-3">
          <div className="relative">
            <img
              src={selectedContact.avatar}
              alt={selectedContact.name}
              className="w-9 h-9 rounded-full object-cover border border-gray-200"
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px] font-bold">
              f
            </span>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-900 leading-tight">
              {selectedContact.name}
            </h3>
            <span className="text-[11px] text-gray-500 leading-tight">
              {selectedContact.platform}
            </span>
          </div>
        </div>

        {/* Message Area */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50/30">
          {messages.map((msg) => {
            const isMe = msg.sender === 'you';

            return (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 ${isMe ? 'justify-end' : 'justify-start'}`}
              >
                {!isMe && (
                  <img
                    src={selectedContact.avatar}
                    alt="Sender"
                    className="w-7 h-7 rounded-full object-cover border border-gray-200 mt-1 shrink-0"
                  />
                )}

                <div
                  className={`max-w-md rounded-2xl p-4 text-xs leading-relaxed shadow-2xs ${
                    isMe
                      ? 'bg-[#D1F2EB] text-gray-900 rounded-tr-none'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none'
                  }`}
                >
                  <div className="font-bold mb-1 text-[11px]">
                    {isMe ? 'You' : 'Sarah'}
                  </div>
                  <p>{msg.text}</p>
                  <div className="flex items-center justify-end gap-1 text-[10px] text-gray-500 mt-2">
                    <span>{msg.time}</span>
                    {isMe && (
                      <span className="text-[#00A896] font-bold">✓✓</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Reply Area */}
        <div className="p-3.5 border-t border-gray-200 bg-white">
          <div className="border border-gray-200 rounded-xl p-2.5 bg-gray-50/60 focus-within:bg-white focus-within:border-[#00A896] transition-colors">
            <textarea
              rows={2}
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Write a reply..."
              className="w-full bg-transparent resize-none text-xs text-gray-800 placeholder-gray-400 focus:outline-none"
            />

            <div className="flex items-center justify-between pt-1 border-t border-gray-100/80">
              {/* Action Icons */}
              <div className="flex items-center gap-2 text-gray-400">
                <button type="button" className="hover:text-gray-600 p-1" title="Attachment">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <button type="button" className="hover:text-gray-600 p-1" title="Emoji">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <button type="button" className="hover:text-gray-600 p-1" title="Document">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>

              {/* Send Button */}
              <button
                type="button"
                onClick={handleSendMessage}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-lg shadow-2xs transition-colors"
              >
                <span>Send</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
