"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // MOCK BACKEND CALL (Replace with Supabase later)
    setTimeout(() => {
      if (email === "test@test.com" && password === "password") {
        // For demo, let's assume this is a seller
        localStorage.setItem("userRole", "seller");
        localStorage.setItem("userName", "Test Seller");
        localStorage.setItem("userEmail", email); 
        router.push("/seller/dashboard");
      } else if (email === "admin@petly.com" && password === "admin123") {
        // Admin credentials
        localStorage.setItem("userRole", "admin");
        localStorage.setItem("userName", "Admin User");
        localStorage.setItem("userEmail", email);
        router.push("/admin/dashboard");
      } else {
        // Regular buyer
        localStorage.setItem("userRole", "buyer");
        localStorage.setItem("userName", email.split("@")[0]);
        localStorage.setItem("userEmail", email);
        router.push("/");
      }
    }, 1000);
  };

  return (
    <div className="rounded-lg bg-white p-8 shadow-md">
      <h2 className="text-center text-2xl font-bold text-gray-900">Sign in to PETLY</h2>
      <form onSubmit={handleLogin} className="mt-8 space-y-6">
        {error && (
          <div className="rounded-md bg-red-50 p-3 text-sm text-red-600 border border-red-200">
            {error}
          </div>
        )}
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input 
              id="email" 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition" 
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              id="password" 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition" 
              placeholder="••••••••"
            />
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500 transition">Forgot your password?</Link>
        </div>
        <button 
          type="submit" 
          disabled={isLoading}
          className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              Signing in...
            </span>
          ) : "Sign in"}
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500 transition">Sign up</Link>
      </p>
      <div className="mt-6 p-3 bg-gray-50 rounded-md text-xs text-gray-600">
        <p className="font-semibold mb-1">Demo Credentials:</p>
        <p>Admin: admin@petly.com / admin123</p>
        <p>Seller: test@test.com / password</p>
        <p>Any other email = Buyer</p>
      </div>
    </div>
  );
}