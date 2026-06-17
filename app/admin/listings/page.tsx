"use client";

import { useState, useEffect } from "react";
import { getPendingListings, updateListingStatus, Listing } from "@/lib/dataStore";

export default function AdminListingsPage() {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    setListings(getPendingListings());
  }, []);

  const handleAction = (id: number, action: "approve" | "reject") => {
    const newStatus = action === "approve" ? "approved" : "rejected";
    updateListingStatus(id, newStatus);
    setListings(getPendingListings());
    alert(`Listing has been ${action}d!`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Pending Listings</h1>
      
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {listings.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">No pending listings. Great job!</td>
              </tr>
            ) : (
              listings.map((listing) => (
                <tr key={listing.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{listing.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${listing.category === "pet" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-700"}`}>
                      {listing.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Rs. {listing.price.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{listing.sellerName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button 
                      onClick={() => handleAction(listing.id, "approve")}
                      className="text-green-600 hover:text-green-900 bg-green-50 px-3 py-1 rounded-md text-xs font-semibold transition"
                    >
                      Approve
                    </button>
                    <button 
                      onClick={() => handleAction(listing.id, "reject")}
                      className="text-red-600 hover:text-red-900 bg-red-50 px-3 py-1 rounded-md text-xs font-semibold transition"
                    >
                      Reject
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