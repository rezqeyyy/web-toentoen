// src/app/login/sales/supervisor/page.tsx
"use client";

import React, { useState } from 'react';
import { SalesAuthGuard } from '@/components/sales/SalesAuthGuard';
import { SalesSidebar } from '@/components/sales/SalesSidebar';
import { SalesTopBar } from '@/components/sales/SalesTopBar';
import { SupervisorDashboardView } from '@/components/sales/SupervisorDashboardView';
import { SupervisorAccountView } from '@/components/sales/SupervisorAccountView';
import { SupervisorStaffDetailView } from '@/components/sales/SupervisorStaffDetailView';
import {
  SUPERVISOR_PROFILE,
  SUPERVISOR_TEAM_MEMBERS,
  SupervisorSalesMember,
} from '@/constants/salesSupervisorData';

export default function SalesSupervisorPage() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'account' | 'staff-detail'>('dashboard');
  const [selectedStaff, setSelectedStaff] = useState<SupervisorSalesMember>(SUPERVISOR_TEAM_MEMBERS[1]); // default Fitri

  const handleSelectStaff = (staff: SupervisorSalesMember) => {
    setSelectedStaff(staff);
    setCurrentView('staff-detail');
  };

  return (
    <SalesAuthGuard>
      {({ onLogout }) => (
        // flex h-screen overflow-hidden memastikan sidebar terkunci dan tidak bisa di-scroll
        <div className="flex h-screen w-full bg-[#F9FAFB] font-sans text-gray-800 overflow-hidden">
          {/* Left Minimal Sidebar (Terkunci permanen, tidak bisa ke-scroll) */}
          <SalesSidebar
            currentView={currentView === 'staff-detail' ? 'dashboard' : currentView}
            onNavigate={(view) => setCurrentView(view)}
          />

          {/* Main Scrollable Area (Hanya area ini yang bisa di-scroll) */}
          <div className="flex-1 h-screen overflow-y-auto overflow-x-hidden min-w-0">
            <main className="p-6 sm:p-8 max-w-7xl w-full mx-auto pb-16">
              {/* Top Bar with user pill & logout */}
              <SalesTopBar
                profile={SUPERVISOR_PROFILE}
                onOpenAccount={() => setCurrentView('account')}
                onLogout={onLogout}
              />

              {/* View Switcher */}
              {currentView === 'dashboard' && (
                <SupervisorDashboardView onSelectStaff={handleSelectStaff} />
              )}

              {currentView === 'account' && (
                <SupervisorAccountView
                  onBackToDashboard={() => setCurrentView('dashboard')}
                />
              )}

              {currentView === 'staff-detail' && (
                <SupervisorStaffDetailView
                  staff={selectedStaff}
                  onBack={() => setCurrentView('dashboard')}
                />
              )}
            </main>
          </div>
        </div>
      )}
    </SalesAuthGuard>
  );
}
