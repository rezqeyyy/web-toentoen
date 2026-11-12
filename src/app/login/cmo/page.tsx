// src/app/login/cmo/page.tsx
"use client";

import React, { useState } from 'react';
import { CmoAuthGuard } from '@/components/cmo/CmoAuthGuard';
import { CmoSidebar } from '@/components/cmo/CmoSidebar';
import { CmoTopBar } from '@/components/cmo/CmoTopBar';
import { CmoAdminTabView } from '@/components/cmo/CmoAdminTabView';
import { CmoSocialMediaTabView } from '@/components/cmo/CmoSocialMediaTabView';
import { CmoPostView } from '@/components/cmo/CmoPostView';
import { INITIAL_CMO_PROFILE } from '@/constants/cmoData';

export default function CmoPage() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'post'>('dashboard');
  const [dashboardTab, setDashboardTab] = useState<'admin' | 'social-media'>('admin');

  return (
    <CmoAuthGuard>
      {({ onLogout }) => (
        // flex h-screen overflow-hidden mengunci sidebar agar tidak bisa di-scroll
        <div className="flex h-screen w-full bg-[#F9FAFB] font-sans text-gray-800 overflow-hidden">
          {/* Left Minimal Sidebar (Terkunci permanen, tidak bisa ke-scroll) */}
          <CmoSidebar
            currentView={currentView}
            onNavigate={(view) => setCurrentView(view)}
          />

          {/* Main Scrollable Area (Hanya area ini yang bisa di-scroll) */}
          <div className="flex-1 h-screen overflow-y-auto overflow-x-hidden min-w-0">
            <main className="p-5 sm:p-7 max-w-7xl w-full mx-auto pb-16">
              {/* Header Box with Silvi (CMO) & Log Out */}
              <CmoTopBar
                profile={INITIAL_CMO_PROFILE}
                onLogout={onLogout}
              />

              {/* View: Dashboard */}
              {currentView === 'dashboard' && (
                <div className="space-y-4">
                  {/* Title & Tabs */}
                  <div>
                    <h1 className="text-xl font-bold text-gray-900 mb-3">Dashboard</h1>
                    
                    {/* Admin / Social Media Tabs */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setDashboardTab('admin')}
                        className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          dashboardTab === 'admin'
                            ? 'bg-[#00A896] text-white shadow-xs'
                            : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        Admin
                      </button>
                      <button
                        type="button"
                        onClick={() => setDashboardTab('social-media')}
                        className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          dashboardTab === 'social-media'
                            ? 'bg-[#00A896] text-white shadow-xs'
                            : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        Social Media
                      </button>
                    </div>
                  </div>

                  {/* Tab Views */}
                  {dashboardTab === 'admin' ? (
                    <CmoAdminTabView />
                  ) : (
                    <CmoSocialMediaTabView />
                  )}
                </div>
              )}

              {/* View: Post */}
              {currentView === 'post' && (
                <CmoPostView />
              )}
            </main>
          </div>
        </div>
      )}
    </CmoAuthGuard>
  );
}
