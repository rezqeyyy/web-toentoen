"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminSidebar() {
  const pathname = usePathname();

  // Fungsi kecil untuk mengecek apakah path saat ini aktif
  const isActive = (path: string) => pathname?.startsWith(path);

  return (
    <aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-8 z-10 hidden md:flex h-screen sticky top-0 shrink-0">
      <div className="w-10 h-10 bg-teal-500 rounded text-white flex items-center justify-center font-bold text-xs leading-none text-center">
        TO<br/>EN
      </div>
      <nav className="flex flex-col space-y-6 text-gray-400">
        
        {/* Dashboard Icon */}
        <Link 
          href="/login/admin" 
          className={`p-2 rounded-lg transition-colors ${isActive('/login/admin') ? 'bg-gray-100 text-gray-800' : 'hover:text-gray-800 cursor-pointer'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
        </Link>
       
         {/* Inbox / Mail Icon */}
        <Link 
          href="/login/admin/inbox" 
          className={`p-2 rounded-lg transition-colors ${isActive('/login/admin/inbox') ? 'bg-gray-100 text-gray-800' : 'hover:text-gray-800 cursor-pointer'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        </Link>
        
        {/* Report Icon */}
        <Link 
          href="/login/admin/report" 
          className={`p-2 rounded-lg transition-colors ${isActive('/login/admin/report') ? 'bg-gray-100 text-gray-800' : 'hover:text-gray-800 cursor-pointer'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        </Link>
        
      </nav>
    </aside>
  );
}