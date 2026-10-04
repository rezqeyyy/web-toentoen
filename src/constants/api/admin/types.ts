export type ChatStatus = 'Unsolved' | 'Process' | 'Done';

export interface Message {
    sender: 'user' | 'admin';
    text: string;
    time: string;
}

export interface ChatSession {
    id: string;
    name: string;
    role: string;
    isVip: boolean;
    avatar: string;
    lastTime: string;
    lastMessage: string;
    status: ChatStatus;
    isInactive: boolean;
    ticketTitle: string;
    ticketId: string;
    email: string;
    phone: string;
    accountSince: string;
    subscription: string;
    totalTickets: number;
    messages: Message[];
}