import React from 'react';
// Pastikan path import AdminSidebar ini sesuai dengan lokasi file Anda
import AdminSidebar from '@/components/layout/admin/AdminSidebar'; 

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Pembungkus background putih/abu-abu dan layout flex kita pindahkan ke sini
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      
      {/* Sidebar akan selalu muncul di sisi kiri */}
      <AdminSidebar />
      
      {/* children ini adalah isi dari page.tsx (Dashboard, Inbox, dll) */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
      
    </div>
  );
}