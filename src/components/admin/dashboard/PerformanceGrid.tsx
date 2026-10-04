import React from 'react';
import { PerformanceMetric } from '@/constants/api/admin/dashboardData';

interface Props {
  metrics: PerformanceMetric[];
}

export const PerformanceGrid: React.FC<Props> = ({ metrics }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="font-semibold text-gray-800 mb-4">Performance overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {metrics.map((metric, idx) => (
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
  );
};