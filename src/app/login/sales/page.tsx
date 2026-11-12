// src/app/login/sales/page.tsx
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SalesRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Cek role user dari localStorage jika tersedia
    try {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        const user = JSON.parse(userStr);
        const role = user?.role?.toLowerCase() || '';
        if (role.includes('supervisor')) {
          router.replace('/login/sales/supervisor');
          return;
        }
      }
    } catch {
      // ignore JSON parse error
    }

    // Default ke sales staff
    router.replace('/login/sales/staff');
  }, [router]);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-[#00c2a8]" />
    </div>
  );
}
