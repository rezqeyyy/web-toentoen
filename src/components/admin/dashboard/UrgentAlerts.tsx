import React from 'react';
import { UrgentAlert } from '@/constants/api/admin/dashboardData';

interface Props {
  alerts: UrgentAlert[];
}

export const UrgentAlerts: React.FC<Props> = ({ alerts }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col lg:col-span-1">
      <div className="p-6 border-b border-gray-100">
        <h3 className="font-semibold text-gray-800">Urgent alerts & SLA breaches</h3>
        <p className="text-xs text-gray-500 mt-1">Requires action</p>
      </div>
      <div className="p-6 space-y-4 overflow-y-auto max-h-[400px]">
        {alerts.map((alert, idx) => (
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
  );
};