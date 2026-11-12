// src/components/cmo/CmoSidebar.tsx
"use client";

import React from 'react';

interface CmoSidebarProps {
  currentView: 'dashboard' | 'post';
  onNavigate: (view: 'dashboard' | 'post') => void;
}

export const CmoSidebar: React.FC<CmoSidebarProps> = ({ currentView, onNavigate }) => {
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
        {/* Dashboard Grid Icon */}
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

        {/* Post Icon */}
        <button
          type="button"
          aria-label="Post"
          title="Post"
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
      </nav>
    </aside>
  );
};
