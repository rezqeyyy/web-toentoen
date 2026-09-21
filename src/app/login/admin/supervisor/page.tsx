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
    trendColor: "text-green-500",
    isBreach: true
  }
];

const urgentAlerts = [
  { id: "#SUP-48291", timeRemaining: "4 hours remaining", issue: "Fake or fraudulent business" },
  { id: "#SUP-42994", timeRemaining: "8 hours remaining", issue: "Fake or fraudulent business" },
  { id: "#SUP-42994", timeRemaining: "8 hours remaining", issue: "Fake or fraudulent business" },
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

const teamCapacity = [
  { id: 1, name: "Farel Dimas", status: "Online", statusClass: "bg-green-500 text-white", load: 18, score: 90.4 },
  { id: 2, name: "Farel Dimas", status: "Busy", statusClass: "bg-teal-400 text-white", load: 18, score: 96.7 },
  { id: 3, name: "Farel Dimas", status: "Busy", statusClass: "bg-teal-400 text-white", load: 18, score: 94.4 },
  { id: 4, name: "Farel Dimas", status: "Offline", statusClass: "bg-gray-200 text-gray-500", load: 18, score: 70 },
  { id: 5, name: "Farel Dimas", status: "Offline", statusClass: "bg-gray-200 text-gray-500", load: 18, score: 70 },
];

export default function SupervisorDashboardPage() {
    const router = useRouter(); 

    return (
        <main className="w-full bg-white min-h-screen pb-8">
            {/* HEADER */}
            <header className="bg-white border border-gray-300 px-6 py-3 flex justify-between items-center m-4 rounded-xl shadow-sm">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border border-gray-200">
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

            <div className="px-6 pt-2 space-y-4">
                <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>

                {/* OVERVIEW BAR */}
                <div className="bg-white border border-gray-300 rounded-xl p-4 flex justify-between items-center shadow-sm">
                    <h3 className="font-semibold text-gray-800 text-sm">Support Operations Overview</h3>
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
                <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm">
                    <h3 className="font-semibold text-gray-800 text-sm mb-4">Performance overview</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {performanceMetrics.map((metric, idx) => (
                            <div key={idx} className="border border-gray-300 rounded-xl p-4 flex flex-col justify-between">
                                <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-2">{metric.title}</h4>
                                <div className="text-3xl font-bold text-gray-900 mb-4">{metric.mainValue}</div>
                                
                                {metric.subMetrics ? (
                                    <div className="flex space-x-3 text-xs font-medium">
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    
                    {/* URGENT ALERTS */}
                    <div className="bg-white border border-gray-300 rounded-xl shadow-sm flex flex-col lg:col-span-1 h-[600px]">
                        <div className="p-5 border-b border-gray-200">
                            <h3 className="font-bold text-gray-900 text-sm">Urgent alerts & SLA breaches</h3>
                            <p className="text-xs text-gray-500 mt-1">Requires action</p>
                        </div>
                        <div className="p-5 space-y-4 overflow-y-auto custom-scrollbar flex-1">
                            {urgentAlerts.map((alert, idx) => (
                                <div key={idx} className="border border-gray-300 rounded-xl p-4">
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="font-bold text-red-500">{alert.id}</span>
                                        <span className="text-gray-800 font-semibold">{alert.timeRemaining}</span>
                                    </div>
                                    <p className="text-sm font-bold text-gray-900 mb-4">{alert.issue}</p>
                                    <button className="w-full border border-gray-900 rounded-lg py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                                        Take Action
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN (CATEGORIES & TEAM CAPACITY) */}
                    <div className="flex flex-col space-y-4 lg:col-span-2">
                        
                        {/* TOP CATEGORIES */}
                        <div className="bg-white border border-gray-300 rounded-xl shadow-sm p-5">
                            <h3 className="font-bold text-gray-900 text-sm">Top ticket categories</h3>
                            <p className="text-xs text-gray-500 mt-1 mb-6">Share of current active queue</p>
                            
                            <div className="space-y-4">
                                {topCategories.map((category, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between text-xs font-bold text-gray-900 mb-1">
                                            <span>{category.label}</span>
                                            <span className="text-gray-500">{category.value}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div 
                                                className="bg-teal-500 h-2.5 rounded-full" 
                                                style={{ width: `${category.percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* TEAM CAPACITY */}
                        <div className="bg-white border border-gray-300 rounded-xl shadow-sm flex-1 overflow-hidden">
                            <div className="p-5 border-b border-gray-200">
                                <h3 className="font-bold text-gray-900 text-sm">Team Capacity</h3>
                                <p className="text-xs text-gray-500 mt-1">Live queue load and resolution contribution</p>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm text-gray-900">
                                    <thead className="text-xs font-bold text-gray-700 bg-gray-200 uppercase">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">AGENT</th>
                                            <th scope="col" className="px-6 py-3">STATUS</th>
                                            <th scope="col" className="px-6 py-3 text-center">LOAD</th>
                                            <th scope="col" className="px-6 py-3 text-center">RESOLUTION SCORE</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {teamCapacity.map((member) => (
                                            <tr key={member.id} className="bg-white hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-3 flex items-center space-x-3">
                                                    <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                                                        <img src={`https://i.pravatar.cc/150?u=${member.id}`} alt={member.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    <span className="font-medium text-sm">{member.name}</span>
                                                </td>
                                                <td className="px-6 py-3">
                                                    <span className={`px-3 py-1 text-[10px] font-bold rounded-full ${member.statusClass}`}>
                                                        {member.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-3 text-center font-medium">
                                                    {member.load}
                                                </td>
                                                <td className="px-6 py-3 text-center font-medium">
                                                    {member.score}
                                                </td>
                                            </tr>
                                        ))}
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