// src/components/cmo/CmoAdminTabView.tsx
"use client";

import React, { useState } from 'react';
import { CMO_DIVISIONS_DATA, DivisionData } from '@/constants/cmoData';

export const CmoAdminTabView: React.FC = () => {
  // Simpan state buka/tutup accordion per divisi. Default Division A terbuka
  const [expandedDivisions, setExpandedDivisions] = useState<Record<string, boolean>>({
    'div-a': true,
    'div-b': false,
    'div-c': false,
  });

  const toggleDivision = (divisionId: string) => {
    setExpandedDivisions((prev) => ({
      ...prev,
      [divisionId]: !prev[divisionId],
    }));
  };

  return (
    <div className="space-y-4">
      {/* Overview Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-gray-900">Support Operations Overview</h2>
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

      {/* Performance Overview Container */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs">
        <h3 className="text-sm font-bold text-gray-900 mb-5">Performance overview</h3>

        <div className="space-y-6">
          {CMO_DIVISIONS_DATA.map((division: DivisionData) => {
            const isExpanded = !!expandedDivisions[division.id];

            return (
              <div key={division.id} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                {/* Division Title */}
                <h4 className="text-xs font-bold text-gray-700 mb-3">{division.name}</h4>

                {/* Supervisor Row */}
                <div className="bg-white rounded-lg p-2 hover:bg-gray-50/60 transition-colors">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {/* Supervisor Profile & Accordion Toggle */}
                    <div className="md:col-span-3 flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => toggleDivision(division.id)}
                        className="p-1 text-gray-400 hover:text-gray-700 transition-colors"
                        title={isExpanded ? 'Collapse' : 'Expand'}
                      >
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <img
                        src={division.supervisor.avatar}
                        alt={division.supervisor.name}
                        className="w-8 h-8 rounded-full object-cover border border-gray-200 shadow-2xs shrink-0"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold text-gray-900 truncate">
                          {division.supervisor.name}
                        </span>
                        <span className="text-[11px] text-gray-500 font-medium truncate">
                          {division.supervisor.role}
                        </span>
                      </div>
                    </div>

                    {/* Team Active Tickets */}
                    <div className="md:col-span-2 flex flex-col">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                        TEAM ACTIVE TICKETS
                      </span>
                      <span className="text-xs font-bold text-gray-900 mt-0.5">
                        {division.supervisor.metrics.activeTickets.total}
                      </span>
                      <div className="flex items-center gap-1.5 text-[10px] mt-0.5">
                        <span className="text-gray-500">{division.supervisor.metrics.activeTickets.open} Open</span>
                        <span className="text-gray-500">{division.supervisor.metrics.activeTickets.pending} Pending</span>
                        <span className="text-red-500 font-medium">{division.supervisor.metrics.activeTickets.unassigned} unassigned</span>
                      </div>
                    </div>

                    {/* Team Response Time */}
                    <div className="md:col-span-2 flex flex-col">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                        TEAM RESPONSE TIME
                      </span>
                      <span className="text-xs font-bold text-gray-900 mt-0.5">
                        {division.supervisor.metrics.responseTime}
                      </span>
                      <span className="text-[10px] text-emerald-600 mt-0.5 font-medium">
                        {division.supervisor.metrics.responseTimeTrend}
                      </span>
                    </div>

                    {/* Team Avg Resolution Time */}
                    <div className="md:col-span-2 flex flex-col">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                        TEAM AVG RESOLUTION TIME
                      </span>
                      <span className="text-xs font-bold text-gray-900 mt-0.5">
                        {division.supervisor.metrics.avgResolutionTime}
                      </span>
                      <span className="text-[10px] text-emerald-600 mt-0.5 font-medium">
                        {division.supervisor.metrics.resolutionTimeTrend}
                      </span>
                    </div>

                    {/* Team CSAT Score */}
                    <div className="md:col-span-1.5 flex flex-col">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                        TEAM CSAT SCORE
                      </span>
                      <span className="text-xs font-bold text-gray-900 mt-0.5">
                        {division.supervisor.metrics.csatScore}
                      </span>
                      <span className="text-[10px] text-emerald-600 mt-0.5 font-medium">
                        {division.supervisor.metrics.csatScoreDetail}
                      </span>
                    </div>

                    {/* Team SLA Compliance */}
                    <div className="md:col-span-1.5 flex flex-col">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                        TEAM SLA COMPLIANCE
                      </span>
                      <span className="text-xs font-bold text-gray-900 mt-0.5">
                        {division.supervisor.metrics.slaCompliance}
                      </span>
                      <span className="text-[10px] text-emerald-600 mt-0.5 font-medium">
                        {division.supervisor.metrics.slaBreaches}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Team Members List (Accordion content) */}
                {isExpanded && division.members.length > 0 && (
                  <div className="mt-3 pl-4 sm:pl-7 border-l-2 border-gray-100 space-y-3">
                    <span className="block text-xs font-bold text-gray-600 mb-2">Team Member</span>
                    
                    {division.members.map((member) => (
                      <div
                        key={member.id}
                        className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-2 px-2 hover:bg-gray-50/60 rounded-lg transition-colors"
                      >
                        {/* Member Profile */}
                        <div className="md:col-span-3 flex items-center gap-2.5">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-8 h-8 rounded-full object-cover border border-gray-200 shadow-2xs shrink-0"
                          />
                          <div className="flex flex-col min-w-0">
                            <span className="text-xs font-bold text-gray-900 truncate">
                              {member.name}
                            </span>
                            <span className="text-[11px] text-gray-500 font-medium truncate">
                              {member.role}
                            </span>
                          </div>
                        </div>

                        {/* Active Tickets */}
                        <div className="md:col-span-2 flex flex-col">
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                            ACTIVE TICKETS
                          </span>
                          <span className="text-xs font-bold text-gray-900 mt-0.5">
                            {member.metrics.activeTickets.total}
                          </span>
                          <div className="flex items-center gap-1.5 text-[10px] mt-0.5">
                            <span className="text-gray-500">{member.metrics.activeTickets.open} Open</span>
                            <span className="text-gray-500">{member.metrics.activeTickets.pending} Pending</span>
                            <span className="text-red-500 font-medium">{member.metrics.activeTickets.unassigned} unassigned</span>
                          </div>
                        </div>

                        {/* Response Time */}
                        <div className="md:col-span-2 flex flex-col">
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                            RESPONSE TIME
                          </span>
                          <span className="text-xs font-bold text-gray-900 mt-0.5">
                            {member.metrics.responseTime}
                          </span>
                          <span className="text-[10px] text-emerald-600 mt-0.5 font-medium">
                            {member.metrics.responseTimeTrend}
                          </span>
                        </div>

                        {/* Avg Resolution Time */}
                        <div className="md:col-span-2 flex flex-col">
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                            AVG RESOLUTION TIME
                          </span>
                          <span className="text-xs font-bold text-gray-900 mt-0.5">
                            {member.metrics.avgResolutionTime}
                          </span>
                          <span className="text-[10px] text-emerald-600 mt-0.5 font-medium">
                            {member.metrics.resolutionTimeTrend}
                          </span>
                        </div>

                        {/* CSAT Score */}
                        <div className="md:col-span-1.5 flex flex-col">
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                            CSAT SCORE
                          </span>
                          <span className="text-xs font-bold text-gray-900 mt-0.5">
                            {member.metrics.csatScore}
                          </span>
                          <span className="text-[10px] text-emerald-600 mt-0.5 font-medium">
                            {member.metrics.csatScoreDetail}
                          </span>
                        </div>

                        {/* SLA Compliance */}
                        <div className="md:col-span-1.5 flex flex-col">
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                            SLA COMPLIANCE
                          </span>
                          <span className="text-xs font-bold text-gray-900 mt-0.5">
                            {member.metrics.slaCompliance}
                          </span>
                          <span className="text-[10px] text-emerald-600 mt-0.5 font-medium">
                            {member.metrics.slaBreaches}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
