import { LOGIN_ENDPOINT, LoginPayload, LoginResponse, ApiErrorResponse } from "@/constants/api/admin/login";

export const loginUser = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await fetch(LOGIN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    const errorData = data as ApiErrorResponse;
    throw new Error(errorData.message || "Email atau password yang Anda masukkan salah.");
  }

  return data as LoginResponse;
};