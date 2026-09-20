"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

// --- DUMMY DATA ---
const performanceMetrics = [
  {
    title: "ACTIVE TICKETS",
    mainValue: "500",
    subMetrics: [
      { label: "Open", value: "200", color: "text-gray-600" },
      { label: "Pending", value: "100", color: "text-gray-600" },
      { label: "unassigned", value: "200", color: "text-red-500" },
    ]
  },
  {
    title: "RESPONSE TIME",
    mainValue: "8m 12s",
    trend: "↗ 12% faster",
    trendText: "than yesterday",
    trendColor: "text-green-500"
  },
  {
    title: "AVG RESOLUTION TIME",
    mainValue: "1h 12s",
    trend: "↗ 6% faster",
    trendText: "than yesterday",
    trendColor: "text-green-500"
  },
  {
    title: "CSAT SCORE",
    mainValue: "90%",
    trend: "+2 pts",
    trendText: "from 500 responses",
    trendColor: "text-green-500"
  },
  {
    title: "SLA COMPLIANCE",
    mainValue: "80%",
    trend: "19",
    trendText: "breaches in current period",
    trendColor: "text-gray-500",
    isBreach: true
  }
];

const urgentAlerts = [
  { id: "#SUP-48291", timeRemaining: "4 hours remaining", issue: "Fake or fraudulent business" },
  { id: "#SUP-42994", timeRemaining: "8 hours remaining", issue: "Fake or fraudulent business" },
  { id: "#SUP-42994", timeRemaining: "8 hours remaining", issue: "Fake or fraudulent business" },
];

const topCategories = [
  { label: "Fake or fraudulent business", value: 200, percentage: 85 },
  { label: "Inaccurate business information", value: 120, percentage: 60 },
  { label: "Policy violation", value: 100, percentage: 50 },
  { label: "Sham or misleading practices", value: 79, percentage: 40 },
  { label: "Misleading information", value: 57, percentage: 30 },
];

export default function DashboardPage() {
    const router = useRouter(); // Inisialisasi router

    return (
        <main className="w-full">
        {/* HEADER */}
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center m-4 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=1" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
                <h2 className="text-sm font-bold text-gray-900 leading-none">Silvi</h2>
                <span className="text-xs text-gray-500">Customer Support</span>
            </div>
            </div>
            <button 
                onClick={() => router.push('/login')} 
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors"
            >
                <span>Log Out</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
            </button>
        </header>

            <div className="p-6 pt-0 space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

            {/* OVERVIEW BAR */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center shadow-sm">
                <h3 className="font-semibold text-gray-800">Support Operations Overview</h3>
                <div className="flex space-x-3">
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700">
                    <option>Today, January 27, 2027</option>
                </select>
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors">
                    <span>Export report</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </button>
                </div>
            </div>

            {/* PERFORMANCE METRICS GRID */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-4">Performance overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {performanceMetrics.map((metric, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
                    <h4 className="text-xs font-semibold text-gray-500 tracking-wider mb-2">{metric.title}</h4>
                    <div className="text-3xl font-bold text-gray-900 mb-4">{metric.mainValue}</div>
                    
                    {metric.subMetrics ? (
                        <div className="flex space-x-4 text-xs font-medium">
                        {metric.subMetrics.map((sub, i) => (
                            <div key={i} className="flex flex-col">
                            <span className="font-bold text-gray-900">{sub.value}</span>
                            <span className={sub.color}>{sub.label}</span>
                            </div>
                        ))}
                        </div>
                    ) : (
                        <div className="text-xs text-gray-500">
                        <span className={`${metric.trendColor} font-medium`}>{metric.trend}</span> {metric.trendText}
                        </div>
                    )}
                    </div>
                ))}
                </div>
            </div>

            {/* BOTTOM SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* URGENT ALERTS */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col lg:col-span-1">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-800">Urgent alerts & SLA breaches</h3>
                    <p className="text-xs text-gray-500 mt-1">Requires action</p>
                </div>
                <div className="p-6 space-y-4 overflow-y-auto max-h-[400px]">
                    {urgentAlerts.map((alert, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl p-4">
                        <div className="flex justify-between text-xs mb-2">
                        <span className="font-semibold text-red-500">{alert.id}</span>
                        <span className="text-gray-500 font-medium">{alert.timeRemaining}</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 mb-4">{alert.issue}</p>
                        <button className="w-full border border-gray-300 rounded-lg py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
                        Take Action
                        </button>
                    </div>
                    ))}
                </div>
                </div>

                {/* RIGHT COLUMN (CATEGORIES & TEAM CAPACITY) */}
                <div className="flex flex-col space-y-6 lg:col-span-2">
                
                {/* TOP CATEGORIES */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                    <h3 className="font-semibold text-gray-800">Top ticket categories</h3>
                    <p className="text-xs text-gray-500 mt-1 mb-6">Share of current active queue</p>
                    
                    <div className="space-y-4">
                    {topCategories.map((category, idx) => (
                        <div key={idx}>
                        <div className="flex justify-between text-sm font-medium text-gray-900 mb-1">
                            <span>{category.label}</span>
                            <span className="text-gray-500">{category.value}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                            className="bg-teal-500 h-2 rounded-full" 
                            style={{ width: `${category.percentage}%` }}
                            ></div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                {/* TEAM CAPACITY */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm flex-1">
                    <div className="p-6 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-800">Team Capacity</h3>
                    <p className="text-xs text-gray-500 mt-1">Live queue load and resolution contribution</p>
                    </div>
                    <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">Agent</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* Empty state untuk menyesuaikan gambar potongan bawah */}
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4 flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                            <span className="font-medium text-gray-900">...</span>
                            </td>
                            <td className="px-6 py-4">...</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                
                </div>
            </div>
            
            </div>
        </main>
    );
}