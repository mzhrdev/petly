"use client";
import React from "react";
export default function AdminDashboardPage() {
  const stats = [
    { label: "Total Listings", value: "1,248", change: "+12%", color: "bg-blue-50 text-blue-700" },
    { label: "Pending Approvals", value: "24", change: "Needs attention", color: "bg-yellow-50 text-yellow-700" },
    { label: "Verified Sellers", value: "89", change: "+3 this week", color: "bg-green-50 text-green-700" },
    { label: "Total Users", value: "3,402", change: "+5%", color: "bg-purple-50 text-purple-700" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
      
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* Recent Activity Mock */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">New listing submitted</p>
                  <p className="text-xs text-gray-800">Seller: John Doe • Golden Retriever Puppy</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">2 mins ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}