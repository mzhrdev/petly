"use client";

import { useState } from "react";

const dummySellers = [
  { id: 1, name: "Ali Khan", email: "ali@example.com", cnic: "35202-1234567-1", status: "Pending" },
  { id: 2, name: "Pet Store PK", email: "info@petstore.pk", cnic: "42101-9876543-2", status: "Pending" },
];

export default function AdminVerificationsPage() {
  const [sellers, setSellers] = useState(dummySellers);

  const handleVerify = (id: number) => {
    setSellers(sellers.filter((s) => s.id !== id));
    alert(`Seller ${id} has been verified! (Mock)`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Seller Verifications</h1>
      
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Seller Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">CNIC</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sellers.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-gray-800">No pending verifications.</td>
              </tr>
            ) : (
              sellers.map((seller) => (
                <tr key={seller.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{seller.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{seller.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">{seller.cnic}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => handleVerify(seller.id)}
                      className="text-blue-600 hover:text-blue-900 bg-blue-50 px-4 py-2 rounded-md text-xs font-semibold transition flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Mark as Verified
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}