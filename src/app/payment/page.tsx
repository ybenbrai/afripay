"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function PaymentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  const [form, setForm] = useState({ account: "", amount: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      // Save transaction
      const savedTransactions = JSON.parse(
        localStorage.getItem("transactions") || "[]"
      );
      const newTransaction = {
        id: Date.now(),
        service: service,
        account: form.account,
        amount: form.amount,
        date: new Date().toLocaleDateString(),
      };
      localStorage.setItem(
        "transactions",
        JSON.stringify([...savedTransactions, newTransaction])
      );

      setLoading(false);
      toast.success(`Payment for ${service} successful!`);
      router.push("/history");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Pay for: {service}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Account / Phone Number"
            value={form.account}
            onChange={(e) => setForm({ ...form, account: e.target.value })}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </div>
    </div>
  );
}
