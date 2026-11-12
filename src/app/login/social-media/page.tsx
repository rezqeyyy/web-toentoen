// src/app/login/social-media/page.tsx
"use client";

import React, { useState } from 'react';
import { SmAuthGuard } from '@/components/social-media/SmAuthGuard';
import { SmSidebar, SmViewType } from '@/components/social-media/SmSidebar';
import { SmTopBar } from '@/components/social-media/SmTopBar';
import { SmDashboardView } from '@/components/social-media/SmDashboardView';
import { SmCreatePostView } from '@/components/social-media/SmCreatePostView';
import { SmPostView } from '@/components/social-media/SmPostView';
import { SmChatView } from '@/components/social-media/SmChatView';
import { SmCredentialsView } from '@/components/social-media/SmCredentialsView';
import { SM_PROFILE } from '@/constants/socialMediaData';

export default function SocialMediaPage() {
  const [currentView, setCurrentView] = useState<SmViewType>('dashboard');

  return (
    <SmAuthGuard>
      {({ onLogout }) => (
        // flex h-screen overflow-hidden memastikan sidebar terkunci dan tidak bisa di-scroll
        <div className="flex h-screen w-full bg-[#F9FAFB] font-sans text-gray-800 overflow-hidden">
          {/* Left Minimal Sidebar (Terkunci permanen, tidak bisa ke-scroll) */}
          <SmSidebar
            currentView={currentView}
            onNavigate={(view) => setCurrentView(view)}
          />

          {/* Main Scrollable Area (Hanya area ini yang bisa di-scroll) */}
          <div className="flex-1 h-screen overflow-y-auto overflow-x-hidden min-w-0">
            <main className="p-5 sm:p-7 max-w-7xl w-full mx-auto pb-16">
              {/* Header Box with Silvi (Command Center) & Log Out */}
              {currentView === 'dashboard' && (
                <SmTopBar
                  profile={SM_PROFILE}
                  onLogout={onLogout}
                />
              )}

              {/* Views */}
              {currentView === 'dashboard' && (
                <SmDashboardView onCreatePost={() => setCurrentView('schedule')} />
              )}

              {currentView === 'schedule' && (
                <SmCreatePostView />
              )}

              {currentView === 'post' && (
                <SmPostView />
              )}

              {currentView === 'chat' && (
                <SmChatView />
              )}

              {currentView === 'account' && (
                <SmCredentialsView onBack={() => setCurrentView('dashboard')} />
              )}
            </main>
          </div>
        </div>
      )}
    </SmAuthGuard>
  );
}
