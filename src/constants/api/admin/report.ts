// src/constants/api/admin/report.ts

const BASE_URL = 'https://api-ops.toentoen.com/api/v1';

export const getToken = () => {
  if (typeof window !== 'undefined') {
    // Sesuaikan nama key localStorage dengan yang kamu gunakan saat login
    return localStorage.getItem('token') || ''; 
  }
  return '';
};

const getHeaders = () => ({
  "Content-Type": "application/json",
  "Authorization": `Bearer ${getToken()}`
});

export const adminApi = {
  getKanbanBoard: async () => {
    const res = await fetch(`${BASE_URL}/reports/board`, { headers: getHeaders() });
    if (!res.ok) throw new Error(`Kanban Board Error: ${res.status}`);
    return res.json();
  },

  getReportCategories: async () => {
    const res = await fetch(`${BASE_URL}/report-categories`, { headers: getHeaders() });
    if (!res.ok) throw new Error(`Categories Error: ${res.status}`);
    return res.json();
  },

  getLogDetail: async (reportId: string) => {
    if (!reportId) throw new Error("Report ID is required");
    const res = await fetch(`${BASE_URL}/reports/${reportId}/logs`, { headers: getHeaders() });
    if (!res.ok) throw new Error(`Log Detail Error: ${res.status}`);
    return res.json();
  },

  postAdjudication: async (reportId: string, action: string) => {
    if (!reportId) throw new Error("Report ID is required");
    // Asumsi payload, sesuaikan dengan kebutuhan backend Toentoen
    const payload = { status: action }; 
    const res = await fetch(`${BASE_URL}/reports/${reportId}/adjudicate`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Adjudication Error: ${res.status}`);
    return res.json();
  },

  postMessage: async (reportId: string, message: string) => {
    if (!reportId) throw new Error("Report ID is required");
    const payload = { message };
    const res = await fetch(`${BASE_URL}/reports/${reportId}/messages`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Post Message Error: ${res.status}`);
    return res.json();
  },
};