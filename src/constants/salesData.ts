// src/constants/salesData.ts

export interface SalesProfile {
  name: string;
  role: string;
  avatar: string;
  referralCode: string;
  registeredEmail: string;
  territory: string;
  legalName: string;
  documentType: string;
  verificationDate: string;
  reviewStatus: 'Approved' | 'Pending' | 'Rejected';
}

export interface SalesMetric {
  title: string;
  value: string;
  trendText: string;
  trendType: 'up' | 'live' | 'neutral';
  liveCount?: string;
}

export interface TeamCapacityRow {
  id: string;
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

export interface LoginHistoryItem {
  id: string;
  dateTime: string;
  loginFrom: string;
  location: string;
  status: 'Active Now' | 'Signed Out';
}

export const INITIAL_SALES_PROFILE: SalesProfile = {
  name: 'Fitri',
  role: 'Sales',
  avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&fit=crop',
  referralCode: 'A12345',
  registeredEmail: 'Fitri@gmail.com',
  territory: 'Jakarta Selatan',
  legalName: 'Fitri Candra',
  documentType: 'Fitri@gmail.com',
  verificationDate: '12 Jan 2026',
  reviewStatus: 'Approved',
};

export const SALES_OVERVIEW_METRICS: SalesMetric[] = [
  {
    title: 'MANAGED MERCHANTS',
    value: '10',
    trendText: '↗ 2 added this week',
    trendType: 'up',
  },
  {
    title: 'OPEN STORES',
    value: '5',
    trendText: '↗ 12% portofolio health',
    trendType: 'up',
  },
  {
    title: 'WEEKLY GOALS',
    value: '86%',
    trendText: '↗ 6% vs last week',
    trendType: 'up',
  },
  {
    title: 'MONTHLY GOALS',
    value: '86%',
    trendText: '↗ 6% vs last mounth',
    trendType: 'up',
  },
  {
    title: 'STORE OPEN RATE',
    value: '90%',
    trendText: 'Live online now 292 active outlets',
    trendType: 'live',
  },
];

export const TEAM_CAPACITY_DATA: TeamCapacityRow[] = [
  {
    id: '1',
    merchantName: 'Wakanda',
    merchantId: 'MCH-9999',
    storeName: 'Budi Mart',
    storeCategory: 'Kelontong',
    storeStatus: 'Close',
    monthlyGoals: 'Not Achieved',
    weeklyGoals: 'Not Achieved',
    dailyGoals: {
      minOpenHours: false,
      postsToday: false,
      signalReply: false,
    },
  },
  {
    id: '2',
    merchantName: 'Iron man',
    merchantId: 'MCH-9999',
    storeName: 'Budi Mart',
    storeCategory: 'Kelontong',
    storeStatus: 'Online',
    monthlyGoals: 'Achieved',
    weeklyGoals: 'Achieved',
    dailyGoals: {
      minOpenHours: false,
      postsToday: true,
      signalReply: true,
    },
  },
  {
    id: '3',
    merchantName: 'Captain America',
    merchantId: 'MCH-9999',
    storeName: 'Budi Mart',
    storeCategory: 'Kelontong',
    storeStatus: 'Online',
    monthlyGoals: 'Not Achieved',
    weeklyGoals: 'Achieved',
    dailyGoals: {
      minOpenHours: false,
      postsToday: true,
      signalReply: true,
    },
  },
  {
    id: '4',
    merchantName: 'Tobey',
    merchantId: 'MCH-9999',
    storeName: 'Budi Mart',
    storeCategory: 'Kelontong',
    storeStatus: 'Online',
    monthlyGoals: 'Achieved',
    weeklyGoals: 'Achieved',
    dailyGoals: {
      minOpenHours: true,
      postsToday: true,
      signalReply: false,
    },
  },
  {
    id: '5',
    merchantName: 'Captain America',
    merchantId: 'MCH-9999',
    storeName: 'Budi Mart',
    storeCategory: 'Kelontong',
    storeStatus: 'Online',
    monthlyGoals: 'Not Achieved',
    weeklyGoals: 'Achieved',
    dailyGoals: {
      minOpenHours: false,
      postsToday: true,
      signalReply: true,
    },
  },
  {
    id: '6',
    merchantName: 'Tobey',
    merchantId: 'MCH-9999',
    storeName: 'Budi Mart',
    storeCategory: 'Kelontong',
    storeStatus: 'Online',
    monthlyGoals: 'Achieved',
    weeklyGoals: 'Achieved',
    dailyGoals: {
      minOpenHours: true,
      postsToday: true,
      signalReply: false,
    },
  },
  {
    id: '7',
    merchantName: 'Tobey',
    merchantId: 'MCH-9999',
    storeName: 'Budi Mart',
    storeCategory: 'Kelontong',
    storeStatus: 'Online',
    monthlyGoals: 'Achieved',
    weeklyGoals: 'Achieved',
    dailyGoals: {
      minOpenHours: true,
      postsToday: true,
      signalReply: false,
    },
  },
  {
    id: '8',
    merchantName: 'Tobey',
    merchantId: 'MCH-9999',
    storeName: 'Budi Mart',
    storeCategory: 'Kelontong',
    storeStatus: 'Online',
    monthlyGoals: 'Achieved',
    weeklyGoals: 'Achieved',
    dailyGoals: {
      minOpenHours: true,
      postsToday: true,
      signalReply: false,
    },
  },
];

export const LOGIN_HISTORY_DATA: LoginHistoryItem[] = [
  {
    id: '1',
    dateTime: '10 Jan 2026, 08:00',
    loginFrom: 'Chrome',
    location: 'Jakarta Selatan',
    status: 'Active Now',
  },
  {
    id: '2',
    dateTime: '9 Jan 2026, 09:00',
    loginFrom: 'Chrome',
    location: 'Jakarta Selatan',
    status: 'Signed Out',
  },
  {
    id: '3',
    dateTime: '8 Jan 2026, 08:45',
    loginFrom: 'Chrome',
    location: 'Jakarta Selatan',
    status: 'Signed Out',
  },
];
