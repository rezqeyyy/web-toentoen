// src/components/sales/SupervisorStaffDetailView.tsx
"use client";

import React, { useState } from 'react';
import { SALES_OVERVIEW_METRICS } from '@/constants/salesData';
import {
  STAFF_MERCHANT_INVITED_LIST,
  SupervisorSalesMember,
} from '@/constants/salesSupervisorData';

interface SupervisorStaffDetailViewProps {
  staff: SupervisorSalesMember;
  onBack: () => void;
}

export const SupervisorStaffDetailView: React.FC<SupervisorStaffDetailViewProps> = ({
  staff,
  onBack,
}) => {
  const [selectedDate, setSelectedDate] = useState('Today, January 27, 2027');

  return (
    <div className="space-y-6">
      {/* Top Breadcrumb / Back button */}
      <div>
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-lg font-bold text-gray-900 hover:text-[#00c2a8] transition-colors group mb-2"
        >
          <svg
            className="w-5 h-5 text-gray-700 group-hover:text-[#00c2a8] transition-colors"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Account Management</span>
        </button>
        <h1 className="text-sm font-bold text-gray-900 mt-1">Profile &amp; Security</h1>
        <p className="text-xs text-gray-500 mt-0.5">
          Keep your sales operations account protected and up to date.
        </p>
      </div>

      {/* TOP SECTION: 2 COLUMNS (STAFF PROFILE LEFT & MERCHANT INVITED RIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Staff Profile Card (col-span-4) */}
        <div className="lg:col-span-4 bg-white border border-gray-200 rounded-2xl p-6 shadow-xs flex flex-col items-center text-center">
          <div className="relative mb-3">
            <img
              src={staff.avatar}
              alt={staff.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400 shadow-sm"
            />
          </div>

          <h2 className="text-xl font-extrabold text-gray-900">{staff.name}</h2>
          <span className="text-xs text-gray-400 font-medium mb-6">Sales</span>

          <div className="w-full border-t border-gray-200 my-2"></div>

          <div className="w-full text-left space-y-4 pt-4 text-xs">
            <div>
              <span className="text-gray-400 block font-medium">Referal Code</span>
              <span className="text-sm font-bold text-gray-900">B12345</span>
            </div>
            <div>
              <span className="text-gray-400 block font-medium">Registered email</span>
              <span className="text-sm font-bold text-gray-900">
                {staff.name.toLowerCase().replace(/\s+/g, '')}@gmail.com
              </span>
            </div>
            <div>
              <span className="text-gray-400 block font-medium">Territory</span>
              <span className="text-sm font-bold text-gray-900">Jakarta Selatan</span>
            </div>
          </div>
        </div>

        {/* Right Column: Merchant Invited Table (col-span-8) */}
        <div className="lg:col-span-8 bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-gray-900">Merchant Invited</h2>
              <p className="text-xs text-gray-500 mt-0.5">
                List and number of merchants who have joined
              </p>
            </div>
            {/* Total Invited Badge */}
            <span className="bg-[#00c2a8] text-white text-xs font-bold px-3 py-1 rounded-md shadow-xs">
              29
            </span>
          </div>

          <div className="overflow-x-auto border border-gray-200 rounded-xl">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-[#E5E7EB] text-gray-800 text-[11px] font-bold tracking-wider uppercase border-b border-gray-200">
                  <th className="py-3 px-4">MERCHANT INVITED</th>
                  <th className="py-3 px-4">STORE NAME/S</th>
                  <th className="py-3 px-4">JOINING DATE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                {STAFF_MERCHANT_INVITED_LIST.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50/70 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-gray-900">{row.merchantName}</div>
                      <div className="text-[11px] text-gray-400">ID: {row.merchantId}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-gray-900">{row.storeName}</div>
                      <div className="text-[11px] text-gray-500 font-medium">
                        ({row.storeCategory})
                      </div>
                    </td>
                    <td className="py-3 px-4 font-semibold text-gray-800">{row.joiningDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: Support Operations Overview */}
      <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6">
          <div>
            <h2 className="text-base font-bold text-gray-900">Support Operations Overview</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Real-time merchant onboarding, goals fulfillment &amp; daily active metrics
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="relative">
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="appearance-none bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded-lg px-3.5 py-2 pr-8 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00c2a8] cursor-pointer shadow-2xs"
              >
                <option value="Today, January 27, 2027">Today, January 27, 2027</option>
                <option value="Yesterday, January 26, 2027">Yesterday, January 26, 2027</option>
                <option value="This Week">This Week</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-500">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <button
              type="button"
              onClick={() => alert(`Mengunduh laporan ${staff.name}...`)}
              className="flex items-center gap-1.5 bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-2xs transition-colors"
            >
              <span>Export report</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>

        {/* 5 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SALES_OVERVIEW_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl p-4 flex flex-col justify-between bg-white hover:border-gray-300 transition-colors"
            >
              <span className="text-[11px] font-bold text-gray-800 tracking-wider">
                {metric.title}
              </span>
              <div className="my-2">
                <span className="text-3xl font-extrabold text-gray-900 tracking-tight">
                  {metric.value}
                </span>
              </div>
              <div className="text-[11px] flex items-center gap-1.5 font-medium">
                {metric.trendType === 'up' && (
                  <span className="text-emerald-600 font-semibold">{metric.trendText}</span>
                )}
                {metric.trendType === 'live' && (
                  <span className="text-gray-500 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                    <span className="text-emerald-600 font-semibold">Live online now</span>
                    <span>292 active outlets</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
