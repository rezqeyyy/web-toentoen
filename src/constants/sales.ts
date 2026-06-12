export type SalesRow = {
  merchants: [string, string];
  shopOwned: [string, string];
  status: [string, string];
  monthlyGoals: [string, string];
  weeklyGoals: [string, string];
  dailyGoals: [string, string];
};

const cell: [string, string] = ["Lorem", "Lorem"];

export const SALES_ROWS: SalesRow[] = [
  {
    merchants: cell,
    shopOwned: cell,
    status: cell,
    monthlyGoals: cell,
    weeklyGoals: cell,
    dailyGoals: cell,
  },
  {
    merchants: cell,
    shopOwned: cell,
    status: cell,
    monthlyGoals: cell,
    weeklyGoals: cell,
    dailyGoals: cell,
  },
  {
    merchants: cell,
    shopOwned: cell,
    status: cell,
    monthlyGoals: cell,
    weeklyGoals: cell,
    dailyGoals: cell,
  },
  {
    merchants: cell,
    shopOwned: cell,
    status: cell,
    monthlyGoals: cell,
    weeklyGoals: cell,
    dailyGoals: cell,
  },
];

export const SALES_COLUMNS = [
  "Merchants",
  "Shop Owned",
  "Status",
  "Monthly Goals",
  "Weekly Goals",
  "Daily Goals",
] as const;
