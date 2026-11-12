// src/components/social-media/SmSidebar.tsx
"use client";

import React from 'react';

export type SmViewType = 'dashboard' | 'schedule' | 'post' | 'chat' | 'account';

interface SmSidebarProps {
  currentView: SmViewType;
  onNavigate: (view: SmViewType) => void;
}

export const SmSidebar: React.FC<SmSidebarProps> = ({ currentView, onNavigate }) => {
  return (
    <aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-6 shrink-0 h-screen sticky top-0 z-20 overflow-hidden select-none">
      {/* Brand Icon TO+EN */}
      <div 
        onClick={() => onNavigate('dashboard')}
        className="w-10 h-10 bg-[#00c2a8] rounded-xl text-white flex flex-col items-center justify-center font-extrabold text-[11px] leading-tight cursor-pointer shadow-xs hover:opacity-90 transition-opacity"
      >
        <span>TO</span>
        <span>+EN</span>
      </div>

      {/* Navigation Icons */}
      <nav className="flex flex-col space-y-4">
        {/* 1. Dashboard Grid Icon */}
        <button
          type="button"
          aria-label="Dashboard"
          title="Dashboard"
          onClick={() => onNavigate('dashboard')}
          className={`p-2.5 rounded-xl transition-all ${
            currentView === 'dashboard'
              ? 'bg-gray-100 text-gray-900 shadow-xs'
              : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
        </button>

        {/* 2. Schedule Calendar Icon */}
        <button
          type="button"
          aria-label="Schedule Post"
          title="Create & Schedule Post"
          onClick={() => onNavigate('schedule')}
          className={`p-2.5 rounded-xl transition-all ${
            currentView === 'schedule'
              ? 'bg-gray-100 text-gray-900 shadow-xs'
              : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </button>

        {/* 3. Post Document Icon */}
        <button
          type="button"
          aria-label="Posts"
          title="Posts"
          onClick={() => onNavigate('post')}
          className={`p-2.5 rounded-xl transition-all ${
            currentView === 'post'
              ? 'bg-gray-100 text-gray-900 shadow-xs'
              : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </button>

        {/* 4. Chat Bubble Icon */}
        <button
          type="button"
          aria-label="Chat"
          title="Chat"
          onClick={() => onNavigate('chat')}
          className={`p-2.5 rounded-xl transition-all ${
            currentView === 'chat'
              ? 'bg-gray-100 text-gray-900 shadow-xs'
              : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>

        {/* 5. Account / Credentials Icon */}
        <button
          type="button"
          aria-label="Credentials & Account"
          title="Credentials & Account"
          onClick={() => onNavigate('account')}
          className={`p-2.5 rounded-xl transition-all ${
            currentView === 'account'
              ? 'bg-gray-100 text-gray-900 shadow-xs'
              : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a2 2 0 100-4 2 2 0 000 4zm0 2c-1.33 0-4 .67-4 2v1h8v-1c0-1.33-2.67-2-4-2z" />
          </svg>
        </button>
      </nav>
    </aside>
  );
};
