// src/components/sales/SupervisorAccountView.tsx
"use client";

import React, { useState } from 'react';
import { LOGIN_HISTORY_DATA } from '@/constants/salesData';
import { SUPERVISOR_PROFILE } from '@/constants/salesSupervisorData';

interface SupervisorAccountViewProps {
  onBackToDashboard: () => void;
}

export const SupervisorAccountView: React.FC<SupervisorAccountViewProps> = ({
  onBackToDashboard,
}) => {
  const [requestSent, setRequestSent] = useState(false);
  const profile = SUPERVISOR_PROFILE;

  const handleRequestPassword = () => {
    setRequestSent(true);
    alert("Permintaan ganti password telah dikirim ke CTO / Tech Lead untuk persetujuan.");
  };

  return (
    <div className="space-y-6">
      {/* Top Breadcrumb / Back button */}
      <div>
        <button
          type="button"
          onClick={onBackToDashboard}
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

      {/* TOP SECTION: 2 COLUMNS (PROFILE LEFT & IDENTITY/PASSWORD RIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Profile Card (col-span-4) */}
        <div className="lg:col-span-4 bg-white border border-gray-200 rounded-2xl p-6 shadow-xs flex flex-col items-center text-center">
          <div className="relative mb-3">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400 shadow-sm"
            />
          </div>

          <h2 className="text-xl font-extrabold text-gray-900">{profile.name}</h2>
          <span className="text-xs text-gray-400 font-medium mb-6">{profile.role}</span>

          <div className="w-full border-t border-gray-200 my-2"></div>

          <div className="w-full text-left space-y-4 pt-4 text-xs">
            <div>
              <span className="text-gray-400 block font-medium">Referal Code</span>
              <span className="text-sm font-bold text-gray-900">{profile.referralCode}</span>
            </div>
            <div>
              <span className="text-gray-400 block font-medium">Registered email</span>
              <span className="text-sm font-bold text-gray-900">{profile.registeredEmail}</span>
            </div>
            <div>
              <span className="text-gray-400 block font-medium">Territory</span>
              <span className="text-sm font-bold text-gray-900">{profile.territory}</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Identity & Password (col-span-8) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Card 1: Identity Verification */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
            <h2 className="text-base font-bold text-gray-900">Identity verification</h2>
            <p className="text-xs text-gray-500 mt-0.5 mb-5">
              Identity document on file for payout authorization.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* KTP Document Placeholder */}
              <div className="sm:col-span-5 h-28 bg-[#D1D5DB] rounded-xl flex items-center justify-center text-gray-500 font-bold text-base tracking-wider shadow-inner">
                KTP
              </div>

              {/* Document details column 1 */}
              <div className="sm:col-span-4 space-y-4 text-xs">
                <div>
                  <span className="text-gray-400 block font-medium">Document type</span>
                  <span className="text-sm font-bold text-gray-900 break-all">
                    {profile.documentType}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block font-medium">Legal Name</span>
                  <span className="text-sm font-bold text-gray-900">{profile.legalName}</span>
                </div>
              </div>

              {/* Document details column 2 */}
              <div className="sm:col-span-3 space-y-4 text-xs">
                <div>
                  <span className="text-gray-400 block font-medium">Verification Date</span>
                  <span className="text-sm font-bold text-gray-900">
                    {profile.verificationDate}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block font-medium">Review Status</span>
                  <span className="text-sm font-bold text-emerald-600">
                    {profile.reviewStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Password & Access */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div>
                <h2 className="text-base font-bold text-gray-900">Password &amp; access</h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Password changes require approval from CTO / Tech Lead.
                </p>
              </div>

              <button
                type="button"
                onClick={handleRequestPassword}
                className="bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-2xs transition-colors shrink-0"
              >
                {requestSent ? 'Permintaan Terkirim' : 'Request password change'}
              </button>
            </div>

            {/* Note banner */}
            <div className="bg-[#E5E7EB] rounded-lg p-3 text-xs text-gray-600 flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Two-factor device verification is enabled for this account.</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: Login History */}
      <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
        <div className="mb-4">
          <h2 className="text-base font-bold text-gray-900">Login History</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Recent sessions and device verifications.
          </p>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-xl">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-[#E5E7EB] text-gray-800 text-[11px] font-bold tracking-wider uppercase border-b border-gray-200">
                <th className="py-3 px-4">DATE &amp; TIME</th>
                <th className="py-3 px-4">LOGIN FROM</th>
                <th className="py-3 px-4">LOCATION</th>
                <th className="py-3 px-4 text-center">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              {LOGIN_HISTORY_DATA.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-gray-900">{row.dateTime}</td>
                  <td className="py-3 px-4 font-medium text-gray-700">{row.loginFrom}</td>
                  <td className="py-3 px-4 font-medium text-gray-700">{row.location}</td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`inline-block px-6 py-1 rounded-full text-[11px] font-bold text-white ${
                        row.status === 'Active Now' ? 'bg-emerald-600' : 'bg-rose-600'
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
