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

      // Jika role dari API bernilai "admin", arahkan ke direktori staff.
      // Sesuaikan string "admin" dengan nilai eksak yang dikirimkan oleh backend API Anda
      // (misalnya "admin", "adminCS", "Admin", dll.)
      if (userRole && userRole.toLowerCase() === "admin") {
        router.push("/login/admin/staff");
      }
      // Anda bisa menambahkan pemetaan untuk role lain jika dibutuhkan,
      // misalnya untuk CTO atau Senior Sales yang terlihat pada panel Hoppscotch Anda.
      // else if (userRole && userRole.toLowerCase() === "cto") {
      //   router.push("/dashboard/cto");
      // }
      else {
        // Tujuan default jika rolenya tidak terpetakan di atas
        router.push("/dashboard");
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
