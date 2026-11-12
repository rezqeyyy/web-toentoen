// src/app/login/sales/staff/page.tsx
"use client";

import React, { useState } from 'react';
import { SalesAuthGuard } from '@/components/sales/SalesAuthGuard';
import { SalesSidebar } from '@/components/sales/SalesSidebar';
import { SalesTopBar } from '@/components/sales/SalesTopBar';
import { SalesDashboardView } from '@/components/sales/SalesDashboardView';
import { SalesAccountView } from '@/components/sales/SalesAccountView';
import { INITIAL_SALES_PROFILE, SalesProfile } from '@/constants/salesData';

export default function SalesStaffPage() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'account'>('dashboard');
  const [profile] = useState<SalesProfile>(INITIAL_SALES_PROFILE);

  return (
    <SalesAuthGuard>
      {({ onLogout }) => (
        // flex h-screen overflow-hidden memastikan sidebar terkunci dan tidak bisa di-scroll
        <div className="flex h-screen w-full bg-[#F9FAFB] font-sans text-gray-800 overflow-hidden">
          {/* Left Minimal Sidebar (Terkunci permanen, tidak bisa ke-scroll) */}
          <SalesSidebar
            currentView={currentView}
            onNavigate={(view) => setCurrentView(view)}
          />

          {/* Main Scrollable Area (Hanya area ini yang bisa di-scroll) */}
          <div className="flex-1 h-screen overflow-y-auto overflow-x-hidden min-w-0">
            <main className="p-6 sm:p-8 max-w-7xl w-full mx-auto pb-16">
              {/* Top Bar with user pill & logout */}
              <SalesTopBar
                profile={profile}
                onOpenAccount={() => setCurrentView('account')}
                onLogout={onLogout}
              />

              {/* View Switcher */}
              {currentView === 'dashboard' ? (
                <SalesDashboardView />
              ) : (
                <SalesAccountView
                  profile={profile}
                  onBackToDashboard={() => setCurrentView('dashboard')}
                />
              )}
            </main>
          </div>
        </div>
      )}
    </SalesAuthGuard>
  );
}
