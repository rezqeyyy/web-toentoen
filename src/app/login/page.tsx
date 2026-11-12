"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/admin/login/LoginForm";
import { loginUser } from "@/services/authService";
import { LoginPayload } from "@/constants/api/admin/login";

export default function LoginPage() {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async (payload: LoginPayload) => {
    setError("");
    setIsLoading(true);

    try {
      const response = await loginUser(payload);

      // Simpan token ke localStorage jika ada
      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
      }

      // Ambil nilai role dari response API.
      // Pastikan struktur response.data.user.role sesuai dengan struktur yang sebenarnya
      // dikembalikan oleh API ToenToen Anda.
      const userRole = response.data?.user?.role;

      // Pemetaan Role Login
      const roleLower = userRole ? userRole.toLowerCase() : "";

      if (roleLower.includes("supervisor") && roleLower.includes("sales")) {
        router.push("/login/sales/supervisor");
      } else if (roleLower.includes("senior") && roleLower.includes("sales")) {
        router.push("/login/sales/supervisor");
      } else if (roleLower.includes("cmo") || roleLower.includes("com")) {
        router.push("/login/cmo");
      } else if (roleLower.includes("social") || roleLower.includes("sosial") || roleLower.includes("sosmed") || roleLower.includes("socmed")) {
        router.push("/login/social-media");
      } else if (roleLower.includes("sales")) {
        router.push("/login/sales/staff");
      } else if (roleLower.includes("supervisor") || roleLower.includes("spv")) {
        router.push("/login/admin/supervisor");
      } else if (roleLower.includes("admin")) {
        router.push("/login/admin/staff");
      } else {
        router.push("/login/sales/staff");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Terjadi kesalahan pada server. Silakan coba lagi nanti.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginForm onSubmit={handleLogin} isLoading={isLoading} error={error} />
  );
}
