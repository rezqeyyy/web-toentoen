export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export const LOGIN_ENDPOINT = `https://api-ops.toentoen.com/api/v1/auth/login`;

export interface LoginPayload {
  workerId: string;
  password: string;
}

export interface UserData {
  id: string;
  email: string;
  name?: string;
  role: "staf" | "admin" | string;
}

export interface LoginResponse {
  status: boolean;
  message: string;
  data?: {
    token: string;
    user: UserData;
  };
}

export interface ApiErrorResponse {
  message?: string;
  errors?: Record<string, string[]>;
}