"use client";

import { useEffect, useState } from "react";

interface Transaction {
  id: number;
  service: string;
  account: string;
  amount: string;
  date: string;
}

export default function HistoryPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Simulate fetching transactions from backend or localStorage
    const savedTransactions = JSON.parse(
      localStorage.getItem("transactions") || "[]"
    );
    setTransactions(savedTransactions);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Transaction History
        </h1>

        {transactions.length === 0 ? (
          <p className="text-center text-gray-500">No transactions yet.</p>
        ) : (
          <ul className="space-y-4">
            {transactions.map((item) => (
              <li
                key={item.id}
                className="border p-4 rounded-lg flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{item.service}</p>
                  <p className="text-xs text-gray-500">{item.account}</p>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
                <div className="font-bold">{item.amount} MAD</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
