// src/components/social-media/SmTopBar.tsx
"use client";

import React from 'react';
import { SmProfile } from '@/constants/socialMediaData';

interface SmTopBarProps {
  profile: SmProfile;
  onLogout: () => void;
}

export const SmTopBar: React.FC<SmTopBarProps> = ({ profile, onLogout }) => {
  return (
    <header className="bg-white rounded-xl border border-gray-200 px-5 py-3 flex items-center justify-between mb-6 shadow-xs select-none">
      {/* User Info (Silvi - Command Center) */}
      <div className="flex items-center gap-3">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-xs"
        />
        <div className="flex flex-col">
          <span className="text-sm font-bold text-gray-900 leading-tight">
            {profile.name}
          </span>
          <span className="text-xs text-gray-500 font-medium leading-tight">
            {profile.role}
          </span>
        </div>
      </div>

      {/* Log Out Button */}
      <button
        type="button"
        onClick={onLogout}
        className="flex items-center gap-2 px-4 py-2 bg-[#00A896] hover:bg-[#008f80] text-white text-sm font-semibold rounded-lg shadow-xs transition-all active:scale-95"
      >
        <span>Log Out</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      </button>
    </header>
  );
};
