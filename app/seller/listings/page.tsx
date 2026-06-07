"use client";

import { useState } from "react";

const dummyListings = [
  { id: 1, title: "Golden Retriever Puppy", category: "Pet", price: 45000, status: "Approved", date: "2024-01-10" },
  { id: 2, title: "Premium Dog Food (20kg)", category: "Accessory", price: 8500, status: "Pending", date: "2024-01-15" },
  { id: 3, title: "Persian Cat (Female)", category: "Pet", price: 30000, status: "Rejected", date: "2024-01-12" },
];

export default function SellerListingsPage() {
  const [listings, setListings] = useState(dummyListings);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this listing?")) {
      setListings(listings.filter((l) => l.id !== id));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Rejected": return "bg-red-100 text-red-800";
      case "Sold": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">My Listings</h1>
      
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {listings.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">You haven't listed any items yet.</td>
              </tr>
            ) : (
              listings.map((listing) => (
                <tr key={listing.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{listing.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{listing.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Rs. {listing.price.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(listing.status)}`}>
                      {listing.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                    <button className="text-blue-600 hover:text-blue-900">Edit</button>
                    <button 
                      onClick={() => handleDelete(listing.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
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