export const CS_REPORT_ITEMS = [
  "Fake or fraudulent business",
  "Inaccurate business information",
  "Policy violation",
  "Sham or misleading practices",
  "Other",
] as const;

export const CS_SUPPORT_TICKET_ITEMS = [
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
] as const;

export const CS_STATS = {
  normal: 10,
  priority: 10,
  unsolved: 10,
  solved: 10,
  satisfactionPercent: 80,
  date: "17 Juni 2026",
} as const;

export type CSItemStatus = "paused" | "rejected" | "approved";

export type CSListItem = {
  id: string;
  subject: string;
  requester: string;
  requesterUpdated: string;
  status: CSItemStatus;
};

const baseItem: Omit<CSListItem, "status"> = {
  id: "#18knm",
  subject: "Lorem Ipsum...",
  requester: "Lorem Ipsum...",
  requesterUpdated: "Lorem Ipsum...",
};

export const CS_CHATS_LIST: CSListItem[] = [
  { ...baseItem, status: "paused" },
  { ...baseItem, status: "rejected" },
  { ...baseItem, status: "approved" },
  { ...baseItem, status: "approved" },
];

export const CS_TICKETS_LIST: CSListItem[] = [
  { ...baseItem, status: "paused" },
  { ...baseItem, status: "rejected" },
  { ...baseItem, status: "approved" },
  { ...baseItem, status: "approved" },
];

export type CSMessage = {
  role: "agent" | "user";
};

export const CS_CHAT_MESSAGES: CSMessage[] = [
  { role: "user" },
  { role: "agent" },
];
