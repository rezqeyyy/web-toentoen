// src/constants/socialMediaData.ts

// --- PROFILE ---
export interface SmProfile {
  name: string;
  role: string;
  avatar: string;
}

export const SM_PROFILE: SmProfile = {
  name: 'Silvi',
  role: 'Command Center',
  avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80&fit=crop',
};

// --- SOCIAL METRICS ---
export interface SocialMetric {
  title: string;
  value: string;
  subText: string;
  subColor: string;
}

export const SM_SOCIAL_METRICS: SocialMetric[] = [
  {
    title: 'TOTAL ENGAGEMENT',
    value: '48,292',
    subText: '↗ 12% vs last week',
    subColor: 'text-emerald-600',
  },
  {
    title: 'SCHEDULED POSTS',
    value: '18',
    subText: 'Across 5 channels',
    subColor: 'text-gray-400',
  },
  {
    title: 'OPEN INBOX',
    value: '27',
    subText: '8 need attention',
    subColor: 'text-rose-500',
  },
  {
    title: 'CHANNEL HEALTH',
    value: '96%',
    subText: 'All systems connected',
    subColor: 'text-gray-400',
  },
];

// --- WEEKLY CALENDAR ---
export interface CalendarPostItem {
  channel: 'IG' | 'FB' | 'TikTok' | 'LinkedIn';
  title: string;
  time: string;
  status: 'Scheduled' | 'Published' | 'Draft';
}

export interface CalendarDay {
  dayName: string;
  dateNumber: number;
  isToday?: boolean;
  posts: CalendarPostItem[];
}

export const SM_WEEKLY_CALENDAR: CalendarDay[] = [
  {
    dayName: 'Mon',
    dateNumber: 14,
    posts: [
      { channel: 'IG', title: 'Valentine Poster', time: '11.30', status: 'Scheduled' },
    ],
  },
  {
    dayName: 'Tue',
    dateNumber: 15,
    isToday: true,
    posts: [
      { channel: 'IG', title: 'Valentine Poster', time: '11.30', status: 'Published' },
      { channel: 'FB', title: 'Valentine Poster', time: '12.30', status: 'Published' },
    ],
  },
  {
    dayName: 'Wed',
    dateNumber: 16,
    posts: [
      { channel: 'IG', title: 'Valentine Poster', time: '11.30', status: 'Scheduled' },
    ],
  },
  {
    dayName: 'Thu',
    dateNumber: 17,
    posts: [
      { channel: 'IG', title: 'Valentine Poster', time: '11.30', status: 'Scheduled' },
    ],
  },
  {
    dayName: 'Fri',
    dateNumber: 18,
    posts: [
      { channel: 'IG', title: 'Valentine Poster', time: '11.30', status: 'Scheduled' },
    ],
  },
  {
    dayName: 'Sat',
    dateNumber: 19,
    posts: [
      { channel: 'IG', title: 'Valentine Poster', time: '11.30', status: 'Scheduled' },
    ],
  },
  {
    dayName: 'Sun',
    dateNumber: 20,
    posts: [
      { channel: 'IG', title: 'Valentine Poster', time: '11.30', status: 'Scheduled' },
    ],
  },
];

// --- TEAM MEMBERS ---
export interface SocialTeamMember {
  id: string;
  name: string;
  avatar: string;
  status: 'Online' | 'Offline';
}

export const SM_TEAM_MEMBERS: SocialTeamMember[] = [
  { id: '1', name: 'Farel Dimas', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&fit=crop', status: 'Online' },
  { id: '2', name: 'Farel Dimas', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&fit=crop', status: 'Online' },
  { id: '3', name: 'Farel Dimas', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&fit=crop', status: 'Online' },
  { id: '4', name: 'Farel Dimas', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&fit=crop', status: 'Offline' },
  { id: '5', name: 'Farel Dimas', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&fit=crop', status: 'Offline' },
  { id: '6', name: 'Farel Dimas', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&fit=crop', status: 'Offline' },
];

// --- CHANNEL CONNECTIONS (Credentials page) ---
export interface SmChannelConnection {
  channel: 'Instagram' | 'Facebook' | 'LinkedIn' | 'Tiktok' | 'Whatsapp';
  handle: string;
  status: 'Connected' | 'Pending';
}

export const SM_CHANNEL_CONNECTIONS: SmChannelConnection[] = [
  { channel: 'Instagram', handle: '@Toentoen', status: 'Connected' },
  { channel: 'Facebook', handle: '@Toentoen', status: 'Connected' },
  { channel: 'LinkedIn', handle: '@Toentoen', status: 'Connected' },
  { channel: 'Tiktok', handle: '@Toentoen', status: 'Pending' },
  { channel: 'Whatsapp', handle: '@Toentoen', status: 'Pending' },
];

// --- LOGIN HISTORY ---
export interface SmLoginHistoryEntry {
  dateTime: string;
  loginFrom: string;
  location: string;
  status: 'Active Now' | 'Signed Out';
}

export const SM_LOGIN_HISTORY: SmLoginHistoryEntry[] = [
  { dateTime: 'January 10, 2025 10:00 AM', loginFrom: 'Chrome', location: 'Jakarta Selatan', status: 'Active Now' },
  { dateTime: 'January 9, 2025 08:30 AM', loginFrom: 'Chrome', location: 'Jakarta Selatan', status: 'Signed Out' },
  { dateTime: 'January 8, 2025 09:15 AM', loginFrom: 'Chrome', location: 'Jakarta Selatan', status: 'Signed Out' },
];

// --- CHAT CONTACTS ---
export interface SmChatContact {
  id: string;
  name: string;
  platform: string;
  avatar: string;
}

export const SM_CHAT_CONTACTS: SmChatContact[] = Array.from({ length: 15 }, (_, i) => ({
  id: `contact-${i + 1}`,
  name: 'Layla',
  platform: 'Facebook',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&fit=crop',
}));

// --- CHAT MESSAGES ---
export interface SmChatMessage {
  id: string;
  sender: 'sarah' | 'you';
  text: string;
  time: string;
  isRead?: boolean;
}

export const SM_CHAT_MESSAGES: SmChatMessage[] = [
  {
    id: 'msg-1',
    sender: 'sarah',
    text: 'Hi team, I renewed our annual plan this morning but my card has been charged twice. Could you please check this? We need the invoice corrected before finance closes today.',
    time: '09.12',
  },
  {
    id: 'msg-2',
    sender: 'you',
    text: "I'm sorry for the duplicate charge, Sarah. I'm reviewing the payment record now and will confirm the reversal shortly.",
    time: '09.12',
    isRead: true,
  },
  {
    id: 'msg-3',
    sender: 'sarah',
    text: 'Thank you, please send the corrected invoice to me as well.',
    time: '09.12',
  },
  {
    id: 'msg-4',
    sender: 'you',
    text: 'Okay Sarah',
    time: '09.12',
    isRead: true,
  },
];

// --- POST CARDS ---
export interface SmPostCard {
  id: string;
  channel: 'Tiktok' | 'Facebook' | 'Instagram' | 'Linkedin';
  image: string;
  accountName: string;
  caption: string;
  likes: number;
  comments: number;
  views: number;
  reposts: number;
  bookmarks: number;
}

export const SM_POST_CARDS: SmPostCard[] = [
  {
    id: 'post-1',
    channel: 'Tiktok',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80&fit=crop',
    accountName: 'Toentoen',
    caption: 'Nikmati sajian spesial lokal terbaik di sekitar Anda. Temukan diskon menarik hanya di aplikasi Toentoen!',
    likes: 20,
    comments: 20,
    views: 20,
    reposts: 20,
    bookmarks: 20,
  },
  {
    id: 'post-2',
    channel: 'Tiktok',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&q=80&fit=crop',
    accountName: 'Toentoen',
    caption: 'Kelezatan kuliner khas nusantara siap diantarkan langsung ke depan pintu Anda hari ini.',
    likes: 24,
    comments: 18,
    views: 35,
    reposts: 12,
    bookmarks: 28,
  },
  {
    id: 'post-3',
    channel: 'Instagram',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80&fit=crop',
    accountName: 'Toentoen',
    caption: 'Dukung UMKM favoritmu dengan berbelanja produk lokal pilihan melalui fitur Sinyal Permintaan.',
    likes: 45,
    comments: 32,
    views: 90,
    reposts: 15,
    bookmarks: 40,
  },
  {
    id: 'post-4',
    channel: 'Tiktok',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80&fit=crop',
    accountName: 'Toentoen',
    caption: 'Pilihan menu sehat dan segar dari petani lokal di sekitarmu, cepat dan berkualitas.',
    likes: 19,
    comments: 14,
    views: 28,
    reposts: 8,
    bookmarks: 22,
  },
  {
    id: 'post-5',
    channel: 'Facebook',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80&fit=crop',
    accountName: 'Toentoen',
    caption: 'Kiat sukses mengembangkan bisnis toko kelontong di era digital bersama ekosistem Toentoen.',
    likes: 52,
    comments: 29,
    views: 110,
    reposts: 24,
    bookmarks: 36,
  },
  {
    id: 'post-6',
    channel: 'Linkedin',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80&fit=crop',
    accountName: 'Toentoen',
    caption: 'Transformasi digital UMKM: Laporan performa dan tren pertumbuhan ekonomi lokal kuartal ini.',
    likes: 68,
    comments: 41,
    views: 145,
    reposts: 33,
    bookmarks: 58,
  },
];
