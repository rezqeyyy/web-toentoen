// src/constants/salesSupervisorData.ts
import { SalesProfile, SalesMetric } from './salesData';

export const SUPERVISOR_PROFILE: SalesProfile = {
  name: 'Silvi',
  role: 'Sales Supervisor',
  avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80&fit=crop',
  referralCode: 'A12345',
  registeredEmail: 'silviindah@gmail.com',
  territory: 'Jakarta Selatan',
  legalName: 'Silvi Indah',
  documentType: 'silviindah@gmail.com',
  verificationDate: '12 Jan 2026',
  reviewStatus: 'Approved',
};

export interface SupervisorSalesMember {
  id: string;
  name: string;
  salesCode: string;
  storeCount: number;
  avatar: string;
}

export const SUPERVISOR_TEAM_MEMBERS: SupervisorSalesMember[] = [
  {
    id: 'farel',
    name: 'Farel Dimas',
    salesCode: 'SLS-REP-104',
    storeCount: 12,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&fit=crop',
  },
  {
    id: 'fitri',
    name: 'Fitri',
    salesCode: 'SLS-REP-104',
    storeCount: 12,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&q=80&fit=crop',
  },
  {
    id: 'lexy',
    name: 'Lexy',
    salesCode: 'SLS-REP-104',
    storeCount: 12,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80&fit=crop',
  },
  {
    id: 'masya',
    name: 'Masya',
    salesCode: 'SLS-REP-104',
    storeCount: 12,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80&fit=crop',
  },
  {
    id: 'lyana',
    name: 'Lyana',
    salesCode: 'SLS-REP-104',
    storeCount: 12,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80&fit=crop',
  },
];

export interface SupervisorTeamCapacityRow {
  id: string;
  salesMember: SupervisorSalesMember;
  isFirstRowOfSales?: boolean;
  salesRowSpan?: number;
  merchantName: string;
  merchantId: string;
  storeName: string;
  storeCategory: string;
  storeStatus: 'Online' | 'Close';
  monthlyGoals: 'Achieved' | 'Not Achieved';
  weeklyGoals: 'Achieved' | 'Not Achieved';
  dailyGoals: {
    minOpenHours: boolean;
    postsToday: boolean;
    signalReply: boolean;
  };
}

export const SUPERVISOR_CAPACITY_DATA: SupervisorTeamCapacityRow[] = [
  // Farel Dimas (membawahi 4 toko)
  {
    id: '1',
    salesMember: SUPERVISOR_TEAM_MEMBERS[0],
    isFirstRowOfSales: true,
    salesRowSpan: 4,
    merchantName: 'Budi Pratama',
    merchantId: 'MCH-9999',
    storeName: 'Budi Mart',
    storeCategory: 'Kelontong',
    storeStatus: 'Online',
    monthlyGoals: 'Achieved',
    weeklyGoals: 'Achieved',
    dailyGoals: { minOpenHours: false, postsToday: true, signalReply: true },
  },
  {
    id: '2',
    salesMember: SUPERVISOR_TEAM_MEMBERS[0],
    merchantName: 'Budi Pratama',
    merchantId: 'MCH-9999',
    storeName: 'Budi Mart',
    storeCategory: 'Kelontong',
    storeStatus: 'Online',
    monthlyGoals: 'Achieved',
    weeklyGoals: 'Achieved',
    dailyGoals: { minOpenHours: false, postsToday: true, signalReply: true },
  },
  {
    id: '3',
    salesMember: SUPERVISOR_TEAM_MEMBERS[0],
    merchantName: 'Budi Pratama',
    merchantId: 'MCH-9999',
    storeName: 'Budi Bakso',
    storeCategory: 'Kuliner',
    storeStatus: 'Online',
    monthlyGoals: 'Achieved',
    weeklyGoals: 'Achieved',
    dailyGoals: { minOpenHours: false, postsToday: true, signalReply: true },
  },
  {
    id: '4',
    salesMember: SUPERVISOR_TEAM_MEMBERS[0],
    merchantName: 'Silvi',
    merchantId: 'MCH-9987',
    storeName: 'Toko Buku',
    storeCategory: 'Retail',
    storeStatus: 'Online',
    monthlyGoals: 'Achieved',
    weeklyGoals: 'Achieved',
    dailyGoals: { minOpenHours: false, postsToday: true, signalReply: true },
  },

  // Lyana
  {
    id: '5',
    salesMember: SUPERVISOR_TEAM_MEMBERS[4],
    isFirstRowOfSales: true,
    salesRowSpan: 1,
    merchantName: 'Wakanda',
    merchantId: 'MCH-9999',
    storeName: 'Budi Mart',
    storeCategory: 'Kelontong',
    storeStatus: 'Close',
    monthlyGoals: 'Not Achieved',
    weeklyGoals: 'Not Achieved',
    dailyGoals: { minOpenHours: false, postsToday: false, signalReply: false },
  },

  // Fitri
  {
    id: '6',
    salesMember: SUPERVISOR_TEAM_MEMBERS[1],
    isFirstRowOfSales: true,
    salesRowSpan: 1,
    merchantName: 'Iron man',
    merchantId: 'MCH-9999',
    storeName: 'Budi Mart',
    storeCategory: 'Kelontong',
    storeStatus: 'Online',
    monthlyGoals: 'Achieved',
    weeklyGoals: 'Achieved',
    dailyGoals: { minOpenHours: false, postsToday: true, signalReply: true },
  },

  // Masya
  {
    id: '7',
    salesMember: SUPERVISOR_TEAM_MEMBERS[3],
    isFirstRowOfSales: true,
    salesRowSpan: 1,
    merchantName: 'Captain America',
    merchantId: 'MCH-9999',
    storeName: 'Budi Mart',
    storeCategory: 'Kelontong',
    storeStatus: 'Online',
    monthlyGoals: 'Not Achieved',
    weeklyGoals: 'Achieved',
    dailyGoals: { minOpenHours: false, postsToday: true, signalReply: true },
  },

  // Lexy
  {
    id: '8',
    salesMember: SUPERVISOR_TEAM_MEMBERS[2],
    isFirstRowOfSales: true,
    salesRowSpan: 1,
    merchantName: 'Tobey',
    merchantId: 'MCH-9999',
    storeName: 'Budi Mart',
    storeCategory: 'Kelontong',
    storeStatus: 'Online',
    monthlyGoals: 'Achieved',
    weeklyGoals: 'Achieved',
    dailyGoals: { minOpenHours: true, postsToday: true, signalReply: false },
  },
];

// Detail Merchant Invited oleh Staff (Tampilan Gambar 1)
export interface StaffMerchantInvitedItem {
  id: string;
  merchantName: string;
  merchantId: string;
  storeName: string;
  storeCategory: string;
  joiningDate: string;
}

export const STAFF_MERCHANT_INVITED_LIST: StaffMerchantInvitedItem[] = [
  {
    id: '1',
    merchantName: 'Budi Pratama',
    merchantId: 'MCH-9999',
    storeName: 'Budi Mart',
    storeCategory: 'Kelontong',
    joiningDate: '23 Jan 2026',
  },
  {
    id: '2',
    merchantName: 'Budi Pratama',
    merchantId: 'MCH-9999',
    storeName: 'Budi Mart',
    storeCategory: 'Kelontong',
    joiningDate: '19 Jan 2026',
  },
  {
    id: '3',
    merchantName: 'Budi Pratama',
    merchantId: 'MCH-9999',
    storeName: 'Budi Mart',
    storeCategory: 'Kelontong',
    joiningDate: '21 Jan 2026',
  },
  {
    id: '4',
    merchantName: 'Budi Pratama',
    merchantId: 'MCH-9999',
    storeName: 'Budi Mart',
    storeCategory: 'Kelontong',
    joiningDate: '22 Jan 2026',
  },
];
