export interface SubMetric {
    label: string;
    value: string;
    color: string;
  }
  
  export interface PerformanceMetric {
    title: string;
    mainValue: string;
    subMetrics?: SubMetric[];
    trend?: string;
    trendText?: string;
    trendColor?: string;
    isBreach?: boolean;
  }
  
  export interface UrgentAlert {
    id: string;
    timeRemaining: string;
    issue: string;
  }
  
  export interface TopCategory {
    label: string;
    value: number;
    percentage: number;
  }
  
  // --- DUMMY DATA ---
  export const PERFORMANCE_METRICS: PerformanceMetric[] = [
    {
      title: "ACTIVE TICKETS",
      mainValue: "500",
      subMetrics: [
        { label: "Open", value: "200", color: "text-gray-600" },
        { label: "Pending", value: "100", color: "text-gray-600" },
        { label: "unassigned", value: "200", color: "text-red-500" },
      ]
    },
    {
      title: "RESPONSE TIME",
      mainValue: "8m 12s",
      trend: "↗ 12% faster",
      trendText: "than yesterday",
      trendColor: "text-green-500"
    },
    {
      title: "AVG RESOLUTION TIME",
      mainValue: "1h 12s",
      trend: "↗ 6% faster",
      trendText: "than yesterday",
      trendColor: "text-green-500"
    },
    {
      title: "CSAT SCORE",
      mainValue: "90%",
      trend: "+2 pts",
      trendText: "from 500 responses",
      trendColor: "text-green-500"
    },
    {
      title: "SLA COMPLIANCE",
      mainValue: "80%",
      trend: "19",
      trendText: "breaches in current period",
      trendColor: "text-gray-500",
      isBreach: true
    }
  ];
  
  export const URGENT_ALERTS: UrgentAlert[] = [
    { id: "#SUP-48291", timeRemaining: "4 hours remaining", issue: "Fake or fraudulent business" },
    { id: "#SUP-42994", timeRemaining: "8 hours remaining", issue: "Fake or fraudulent business" },
    { id: "#SUP-42994", timeRemaining: "8 hours remaining", issue: "Fake or fraudulent business" },
  ];
  
  export const TOP_CATEGORIES: TopCategory[] = [
    { label: "Fake or fraudulent business", value: 200, percentage: 85 },
    { label: "Inaccurate business information", value: 120, percentage: 60 },
    { label: "Policy violation", value: 100, percentage: 50 },
    { label: "Sham or misleading practices", value: 79, percentage: 40 },
    { label: "Misleading information", value: 57, percentage: 30 },
  ];