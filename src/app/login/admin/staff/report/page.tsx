// src/app/login/admin/staff/report/page.tsx

import React from 'react';
import ReportTicketComponent from '@/components/admin/report/ReportTicket';

export const metadata = {
  title: 'Report & Support Ticket | Admin',
};

export default function ReportPage() {
  return (
    <main>
      <ReportTicketComponent />
    </main>
  );
}