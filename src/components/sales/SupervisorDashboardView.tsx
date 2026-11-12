// src/components/sales/SupervisorDashboardView.tsx
"use client";

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { SALES_OVERVIEW_METRICS } from '@/constants/salesData';
import {
  SUPERVISOR_CAPACITY_DATA,
  SUPERVISOR_TEAM_MEMBERS,
  SupervisorSalesMember,
} from '@/constants/salesSupervisorData';

interface SupervisorDashboardViewProps {
  onSelectStaff: (staff: SupervisorSalesMember) => void;
}

export const SupervisorDashboardView: React.FC<SupervisorDashboardViewProps> = ({ onSelectStaff }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('Today, January 27, 2027');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter Sales Checkbox state (default: Farel, Fitri, Lexy, Masya terpilih)
  const [selectedSalesIds, setSelectedSalesIds] = useState<string[]>([
    'farel',
    'fitri',
    'lexy',
    'masya',
  ]);

  // Tutup dropdown jika klik di luar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowFilterDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSalesFilter = (id: string) => {
    setSelectedSalesIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedSalesIds.length === SUPERVISOR_TEAM_MEMBERS.length) {
      setSelectedSalesIds([]);
    } else {
      setSelectedSalesIds(SUPERVISOR_TEAM_MEMBERS.map((m) => m.id));
    }
  };

  // Filter baris tabel
  const filteredData = useMemo(() => {
    return SUPERVISOR_CAPACITY_DATA.filter((row) => {
      // 1. Filter checkbox sales
      const matchSalesFilter =
        selectedSalesIds.length === 0 || selectedSalesIds.includes(row.salesMember.id);

      // 2. Filter search query
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        row.salesMember.name.toLowerCase().includes(q) ||
        row.merchantName.toLowerCase().includes(q) ||
        row.merchantId.toLowerCase().includes(q) ||
        row.storeName.toLowerCase().includes(q) ||
        row.storeCategory.toLowerCase().includes(q);

      return matchSalesFilter && matchSearch;
    });
  }, [selectedSalesIds, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard</h1>

      {/* SECTION 1: Support Operations Overview */}
      <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6">
          <div>
            <h2 className="text-base font-bold text-gray-900">Support Operations Overview</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Real-time merchant onboarding, goals fulfillment &amp; daily active metrics
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Date filter dropdown */}
            <div className="relative">
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="appearance-none bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded-lg px-3.5 py-2 pr-8 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00c2a8] cursor-pointer shadow-2xs"
              >
                <option value="Today, January 27, 2027">Today, January 27, 2027</option>
                <option value="Yesterday, January 26, 2027">Yesterday, January 26, 2027</option>
                <option value="This Week">This Week</option>
                <option value="This Month">This Month</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-500">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Export report button */}
            <button
              type="button"
              onClick={() => alert("Mengunduh laporan Sales Supervisor...")}
              className="flex items-center gap-1.5 bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-2xs transition-colors"
            >
              <span>Export report</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>

        {/* 5 Cards Overview */}
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

      {/* SECTION 2: Team Capacity */}
      <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
        <div className="mb-4">
          <h2 className="text-base font-bold text-gray-900">Team Capacity</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Live queue load and resolution contribution
          </p>
        </div>

        {/* Search bar & Sort/Filter Dropdown */}
        <div className="flex items-center gap-3 mb-4">
          <div className="relative max-w-sm w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Cari Merchant, Store, Sales.."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#00c2a8] placeholder:text-gray-400 bg-white"
            />
          </div>

          {/* Sort By / Filter Sales Button & Popover */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setShowFilterDropdown((prev) => !prev)}
              className="flex items-center gap-2 bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-2xs transition-colors"
            >
              <span>Sort by...</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>

            {/* Filter Sales Popup / Popover */}
            {showFilterDropdown && (
              <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-xl z-30 p-4 animate-in fade-in slide-in-from-top-1">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <span className="text-xs font-bold text-gray-900">Filter Sales</span>
                  <button
                    type="button"
                    onClick={handleSelectAll}
                    className="text-[11px] font-semibold text-[#00A896] hover:underline"
                  >
                    {selectedSalesIds.length === SUPERVISOR_TEAM_MEMBERS.length
                      ? 'Batal Pilih'
                      : 'Pilih Semua'}
                  </button>
                </div>

                <div className="py-2 space-y-2.5 max-h-56 overflow-y-auto">
                  {SUPERVISOR_TEAM_MEMBERS.map((member) => (
                    <label
                      key={member.id}
                      className="flex items-center justify-between text-xs text-gray-700 hover:bg-gray-50 p-1.5 rounded-lg cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={selectedSalesIds.includes(member.id)}
                          onChange={() => toggleSalesFilter(member.id)}
                          className="w-4 h-4 rounded text-[#00A896] focus:ring-[#00A896] border-gray-300 cursor-pointer"
                        />
                        <span className="font-semibold text-gray-900">{member.name}</span>
                      </div>
                      <span className="text-[11px] text-gray-400 font-medium">
                        {member.storeCount} Store
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto border border-gray-200 rounded-xl">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-[#E5E7EB] text-gray-800 text-[11px] font-bold tracking-wider uppercase border-b border-gray-200">
                <th className="py-3 px-4">SALES</th>
                <th className="py-3 px-4">MERCHANT INVITED</th>
                <th className="py-3 px-4">STORE NAME/S</th>
                <th className="py-3 px-4 text-center">STORE STATUS</th>
                <th className="py-3 px-4 text-center">MONTHLY GOALS</th>
                <th className="py-3 px-4 text-center">WEEKLY GOALS</th>
                <th colSpan={3} className="py-2 px-4 text-center border-l border-gray-300">
                  DAILY GOALS
                </th>
              </tr>
              <tr className="bg-[#E5E7EB] text-gray-700 text-[10px] font-bold tracking-wider uppercase border-b border-gray-200">
                <th colSpan={6} className="py-0"></th>
                <th className="py-1.5 px-3 text-center border-l border-gray-300">MIN. OPEN HOURS</th>
                <th className="py-1.5 px-3 text-center border-l border-gray-200">POSTS TODAY</th>
                <th className="py-1.5 px-3 text-center border-l border-gray-200">SIGNAL REPLY</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-8 text-center text-gray-400 text-xs">
                    Tidak ada data merchant yang sesuai.
                  </td>
                </tr>
              ) : (
                filteredData.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50/70 transition-colors">
                    {/* Kolom Sales - RowSpan logic */}
                    {row.isFirstRowOfSales !== false ? (
                      <td
                        rowSpan={row.salesRowSpan || 1}
                        className="py-3 px-4 align-top border-r border-gray-100 bg-white"
                      >
                        <button
                          type="button"
                          onClick={() => onSelectStaff(row.salesMember)}
                          className="flex items-center gap-3 text-left hover:opacity-80 transition-opacity group"
                          title={`Lihat detail merchant oleh ${row.salesMember.name}`}
                        >
                          <img
                            src={row.salesMember.avatar}
                            alt={row.salesMember.name}
                            className="w-9 h-9 rounded-full object-cover border border-gray-200 shrink-0"
                          />
                          <div>
                            <div className="font-bold text-gray-900 group-hover:text-[#00A896] transition-colors">
                              {row.salesMember.name}
                            </div>
                            <div className="text-[11px] text-gray-400">
                              {row.salesMember.salesCode}
                            </div>
                          </div>
                        </button>
                      </td>
                    ) : null}

                    {/* Merchant Invited */}
                    <td className="py-3 px-4">
                      <div className="font-bold text-gray-900">{row.merchantName}</div>
                      <div className="text-[11px] text-gray-400">ID: {row.merchantId}</div>
                    </td>

                    {/* Store Name */}
                    <td className="py-3 px-4">
                      <div className="font-semibold text-gray-900">{row.storeName}</div>
                      <div className="text-[11px] text-gray-500 font-medium">
                        ({row.storeCategory})
                      </div>
                    </td>

                    {/* Store Status */}
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold ${
                          row.storeStatus === 'Online'
                            ? 'bg-emerald-600 text-white'
                            : 'bg-rose-600 text-white'
                        }`}
                      >
                        {row.storeStatus}
                      </span>
                    </td>

                    {/* Monthly Goals */}
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold ${
                          row.monthlyGoals === 'Achieved'
                            ? 'bg-emerald-600 text-white'
                            : 'bg-rose-600 text-white'
                        }`}
                      >
                        {row.monthlyGoals}
                      </span>
                    </td>

                    {/* Weekly Goals */}
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold ${
                          row.weeklyGoals === 'Achieved'
                            ? 'bg-emerald-600 text-white'
                            : 'bg-rose-600 text-white'
                        }`}
                      >
                        {row.weeklyGoals}
                      </span>
                    </td>

                    {/* Daily Goals: Min Open Hours */}
                    <td
                      className={`py-3 px-4 text-center font-bold text-sm border-l border-gray-100 ${
                        row.dailyGoals.minOpenHours
                          ? 'bg-emerald-50/70 text-emerald-600'
                          : 'bg-rose-50/70 text-rose-500'
                      }`}
                    >
                      {row.dailyGoals.minOpenHours ? '✓' : '✕'}
                    </td>

                    {/* Daily Goals: Posts Today */}
                    <td
                      className={`py-3 px-4 text-center font-bold text-sm border-l border-gray-100 ${
                        row.dailyGoals.postsToday
                          ? 'bg-emerald-50/70 text-emerald-600'
                          : 'bg-rose-50/70 text-rose-500'
                      }`}
                    >
                      {row.dailyGoals.postsToday ? '✓' : '✕'}
                    </td>

                    {/* Daily Goals: Signal Reply */}
                    <td
                      className={`py-3 px-4 text-center font-bold text-sm border-l border-gray-100 ${
                        row.dailyGoals.signalReply
                          ? 'bg-emerald-50/70 text-emerald-600'
                          : 'bg-rose-50/70 text-rose-500'
                      }`}
                    >
                      {row.dailyGoals.signalReply ? '✓' : '✕'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
