// src/components/social-media/SmDashboardView.tsx
"use client";

import React, { useState } from 'react';
import {
  SM_SOCIAL_METRICS,
  SM_WEEKLY_CALENDAR,
  SM_TEAM_MEMBERS,
  SocialMetric,
  CalendarDay,
  CalendarPostItem,
} from '@/constants/socialMediaData';

interface SmDashboardViewProps {
  onCreatePost?: () => void;
}

export const SmDashboardView: React.FC<SmDashboardViewProps> = ({ onCreatePost }) => {
  const [calendarView, setCalendarView] = useState<'weekly' | 'monthly'>('weekly');

  return (
    <div className="space-y-5">
      {/* Title */}
      <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>

      {/* Sub-header row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold text-gray-700">Your social operations, in focus</h2>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          {/* Date Picker Button */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 shadow-xs"
            >
              <span>Today, January 27, 2027</span>
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Export Report */}
          <button
            type="button"
            className="flex items-center gap-2 px-3.5 py-1.5 bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
          >
            <span>Export report</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SM_SOCIAL_METRICS.map((metric: SocialMetric, idx: number) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-200 p-4 shadow-xs">
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
              {metric.title}
            </span>
            <div className="text-2xl font-bold text-gray-900 tracking-tight">
              {metric.value}
            </div>
            <span className={`text-xs font-medium block mt-1.5 ${metric.subColor || 'text-gray-500'}`}>
              {metric.subText}
            </span>
          </div>
        ))}
      </div>

      {/* Middle Grid: Weekly Schedule + Team Capacity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Weekly Content Schedule (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-gray-200 p-5 shadow-xs flex flex-col justify-between">
          <div>
            {/* Header with Switch & Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Your social operations, in focus</h3>
                <p className="text-xs text-gray-500 mt-0.5">This week&apos;s content across your connected channels</p>
              </div>

              <div className="flex items-center gap-2.5">
                {/* Weekly/Monthly Segment */}
                <div className="flex items-center p-0.5 bg-gray-100 rounded-lg text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setCalendarView('weekly')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      calendarView === 'weekly'
                        ? 'bg-[#00A896] text-white shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Weekly
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalendarView('monthly')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      calendarView === 'monthly'
                        ? 'bg-[#00A896] text-white shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Monthly
                  </button>
                </div>

                {/* Create & schedule post */}
                <button
                  type="button"
                  onClick={onCreatePost}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
                >
                  <span>+ Create &amp; schedule post</span>
                </button>
              </div>
            </div>

            {/* 7-Day Calendar Grid */}
            <div className="grid grid-cols-7 border-t border-b border-gray-200 divide-x divide-gray-200 min-h-[220px]">
              {SM_WEEKLY_CALENDAR.map((day: CalendarDay) => (
                <div key={day.dayName + day.dateNumber} className="p-2 flex flex-col">
                  {/* Day header */}
                  <div className="flex items-center justify-center gap-1 mb-2.5 text-center">
                    <span className="text-xs font-bold text-gray-700">
                      {day.dayName} {day.dateNumber}
                    </span>
                    {day.isToday && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    )}
                  </div>

                  {/* Day cards */}
                  <div className="space-y-2 flex-1">
                    {day.posts.map((evt: CalendarPostItem, idx: number) => (
                      <div
                        key={idx}
                        className="bg-white border border-gray-200 rounded-lg p-2 shadow-2xs hover:border-gray-300 transition-colors cursor-pointer"
                      >
                        <div className="text-[11px] font-bold text-gray-900">{evt.channel}</div>
                        <div className="text-[10px] text-gray-600 leading-tight mt-0.5 line-clamp-2">
                          {evt.title}
                        </div>
                        <div className="text-[10px] text-gray-400 mt-1 font-mono">{evt.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Legend */}
          <div className="flex items-center gap-4 text-xs text-gray-500 pt-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Scheduled</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00A896]" />
              <span>Published</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-400" />
              <span>Draft</span>
            </div>
          </div>
        </div>

        {/* Team Capacity (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-gray-200 p-5 shadow-xs flex flex-col">
          <div className="mb-4">
            <h3 className="text-sm font-bold text-gray-900">Team Capacity</h3>
            <p className="text-xs text-gray-500 mt-0.5">3 online</p>
          </div>

          <div className="space-y-3 divide-y divide-gray-100 flex-1">
            {SM_TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="pt-3 first:pt-0 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-7 h-7 rounded-full object-cover border border-gray-200 shadow-2xs"
                  />
                  <span className="text-xs font-semibold text-gray-800">{member.name}</span>
                </div>

                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    member.status === 'Online'
                      ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                      : 'bg-gray-100 text-gray-500 border border-gray-200'
                  }`}
                >
                  {member.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
