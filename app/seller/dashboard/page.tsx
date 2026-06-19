"use client";

import Link from "next/link";

export default function SellerDashboardPage() {
  const stats = [
    { label: "Total Listings", value: "12", change: "All time", color: "bg-blue-50 text-blue-700" },
    { label: "Pending Approval", value: "2", change: "Awaiting admin", color: "bg-yellow-50 text-yellow-700" },
    { label: "Active / Sold", value: "10", change: "+1 this week", color: "bg-green-50 text-green-700" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Seller Dashboard</h1>
        <Link 
          href="/seller/list" 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
        >
          + List New Item
        </Link>
      </div>
      
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-sm font-medium text-gray-800">{stat.label}</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.color}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Tips */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">💡 Seller Tip</h3>
        <p className="text-sm text-blue-800">
          Listings with clear, well-lit photos and detailed descriptions get approved 3x faster and sell quicker. 
          Make sure to include the pet's age, vaccination status, and location.
        </p>
      </div>
    </div>
  );
}