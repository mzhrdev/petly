"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setMessage(null);

    // MOCK BACKEND CALL (Replace with Supabase later)
    setTimeout(() => {
      setMessage("If an account exists for this email, a reset link has been sent.");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="rounded-lg bg-white p-8 shadow-md">
      <h2 className="text-center text-2xl font-bold text-gray-900">Reset your password</h2>
      <p className="text-center text-sm text-gray-600 mt-2">Enter your email and we will send you a reset link.</p>
      
      <form onSubmit={handleReset} className="mt-8 space-y-6">
        {error && <div className="rounded-md bg-red-50 p-3 text-sm text-red-600 border border-red-200">{error}</div>}
        {message && <div className="rounded-md bg-green-50 p-3 text-sm text-green-600 border border-green-200">{message}</div>}
        
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
        <button 
          type="submit" 
          disabled={isLoading}
          className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              Sending...
            </span>
          ) : "Send reset link"}
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500 transition">Back to login</Link>
      </p>
    </div>
  );
}