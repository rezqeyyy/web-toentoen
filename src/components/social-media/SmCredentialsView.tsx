// src/components/social-media/SmCredentialsView.tsx
"use client";

import React, { useState } from 'react';
import {
  SM_CHANNEL_CONNECTIONS,
  SM_LOGIN_HISTORY,
  SmChannelConnection,
  SmLoginHistoryEntry,
} from '@/constants/socialMediaData';

interface SmCredentialsViewProps {
  onBack?: () => void;
}

export const SmCredentialsView: React.FC<SmCredentialsViewProps> = ({ onBack }) => {
  const [channels, setChannels] = useState<SmChannelConnection[]>(SM_CHANNEL_CONNECTIONS);
  const [history] = useState<SmLoginHistoryEntry[]>(SM_LOGIN_HISTORY);
  const [requested, setRequested] = useState<boolean>(false);

  const toggleConnection = (chan: string) => {
    setChannels((prev) =>
      prev.map((c) =>
        c.channel === chan
          ? { ...c, status: c.status === 'Connected' ? 'Pending' : 'Connected' }
          : c
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Title with back button */}
      <div className="flex items-center gap-3">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="p-1 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
            title="Back to dashboard"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
        )}
        <h1 className="text-xl font-bold text-gray-900">credentials managed</h1>
      </div>

      {/* Top Split: Connected channel access + Password & access */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Connected channel access (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-gray-200 p-5 shadow-xs">
          <h2 className="text-sm font-bold text-gray-900">Connected channel access</h2>
          <p className="text-xs text-gray-500 mb-4">Account roles are assigned through the organization directory.</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {channels.map((chan) => (
              <div
                key={chan.channel}
                className="bg-white border border-gray-200 rounded-xl p-3 flex flex-col justify-between hover:border-gray-300 transition-colors"
              >
                <div>
                  <span className="text-xs font-bold text-gray-900 block">{chan.channel}</span>
                  <span className="text-[11px] text-gray-400 block">{chan.handle}</span>
                </div>

                <div className="mt-3">
                  <button
                    type="button"
                    onClick={() => toggleConnection(chan.channel)}
                    className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full transition-colors ${
                      chan.status === 'Connected'
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100'
                        : 'bg-gray-100 text-gray-500 border border-gray-200 hover:bg-gray-200'
                    }`}
                  >
                    {chan.status}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Password & access (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-gray-200 p-5 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div>
              <h2 className="text-sm font-bold text-gray-900">Password &amp; access</h2>
              <p className="text-xs text-gray-500 mt-0.5">Password changes require approval from CTO / Tech Lead.</p>
            </div>

            <button
              type="button"
              onClick={() => setRequested(true)}
              className="px-3.5 py-2 bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors shrink-0"
            >
              {requested ? 'Requested ✓' : 'Request password change'}
            </button>
          </div>

          <div className="bg-gray-100/70 border border-gray-200 rounded-lg p-3 flex items-center gap-2.5 text-xs text-gray-600">
            <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Two-factor device verification is enabled for this account.</span>
          </div>
        </div>
      </div>

      {/* Login History */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs">
        <h2 className="text-sm font-bold text-gray-900">Login History</h2>
        <p className="text-xs text-gray-500 mb-4">Recent sessions and device verifications.</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100/70 text-[11px] font-bold text-gray-600 uppercase tracking-wider">
                <th className="py-2.5 px-4 rounded-l-lg">DATE &amp; TIME</th>
                <th className="py-2.5 px-4">LOGIN FROM</th>
                <th className="py-2.5 px-4">LOCATION</th>
                <th className="py-2.5 px-4 rounded-r-lg">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              {history.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-3 px-4 font-medium text-gray-900">{item.dateTime}</td>
                  <td className="py-3 px-4 text-gray-600">{item.loginFrom}</td>
                  <td className="py-3 px-4 text-gray-600">{item.location}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block text-[11px] font-semibold px-3 py-0.5 rounded-full ${
                        item.status === 'Active Now'
                          ? 'bg-emerald-500 text-white'
                          : 'bg-rose-600 text-white'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
