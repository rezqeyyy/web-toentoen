import React from 'react';
import { ChatStatus } from '@/constants/api/admin/types';

export const StatusBadge = ({ status }: { status: ChatStatus }) => {
  switch (status) {
    case 'Unsolved':
      return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-600"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1.5"></span>Unsolved</span>;
    case 'Process':
      return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-1.5"></span>Process</span>;
    case 'Done':
      return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>Done</span>;
    default:
      return null;
  }
};