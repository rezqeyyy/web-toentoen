// src/components/social-media/SmAuthGuard.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface SmAuthGuardProps {
  children: (props: { onLogout: () => void }) => React.ReactNode;
}

export const SmAuthGuard: React.FC<SmAuthGuardProps> = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    if (!token) {
      setIsAuthenticated(false);
      router.replace('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    router.replace('/login');
  };

  if (isAuthenticated === null) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#00A896]" />
          <p className="text-sm font-semibold text-gray-600">Memeriksa izin akses akun Sosial Media...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
          <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Akses Ditolak</h2>
          <p className="text-sm text-gray-500 mb-6">
            Halaman ini khusus untuk tim Sosial Media yang telah terautentikasi. Silakan masuk terlebih dahulu.
          </p>
          <button
            onClick={() => router.replace('/login')}
            className="w-full py-2.5 bg-[#00A896] hover:bg-[#008f80] text-white font-bold rounded-lg text-sm transition-colors"
          >
            Menuju Halaman Login
          </button>
        </div>
      </div>
    );
  }

  return <>{children({ onLogout: handleLogout })}</>;
};
