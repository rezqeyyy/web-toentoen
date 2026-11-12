// src/components/sales/SalesTopBar.tsx
"use client";

import React from 'react';
import { SalesProfile } from '@/constants/salesData';

interface SalesTopBarProps {
  profile: SalesProfile;
  onOpenAccount: () => void;
  onLogout: () => void;
}

export const SalesTopBar: React.FC<SalesTopBarProps> = ({ profile, onOpenAccount, onLogout }) => {
  return (
    <div className="flex items-center justify-end w-full gap-4 pb-6">
      {/* User profile button / pill */}
      <button
        type="button"
        onClick={onOpenAccount}
        className="flex items-center gap-3 p-1.5 pr-3 rounded-full hover:bg-gray-100 transition-colors text-left group"
        title="Buka Pengaturan Akun"
      >
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400 shadow-xs"
        />
        <div className="flex flex-col">
          <span className="text-sm font-bold text-gray-900 group-hover:text-[#00c2a8] transition-colors leading-tight">
            {profile.name}
          </span>
          <span className="text-xs text-gray-500 leading-tight">
            {profile.role}
          </span>
        </div>
      </button>

      {/* Notification Bell */}
      <button
        type="button"
        aria-label="Notifications"
        className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </button>

      {/* Log Out Button */}
      <button
        type="button"
        onClick={onLogout}
        className="flex items-center gap-2 px-4 py-2 bg-[#00A896] hover:bg-[#008f80] text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
      >
        <span>Log Out</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      </button>
    </div>
  );
};
