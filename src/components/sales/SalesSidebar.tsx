// src/components/sales/SalesSidebar.tsx
"use client";

import React from 'react';

interface SalesSidebarProps {
  currentView: string;
  onNavigate: (view: 'dashboard' | 'account') => void;
}

export const SalesSidebar: React.FC<SalesSidebarProps> = ({ currentView, onNavigate }) => {
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
      </nav>
    </aside>
  );
};
