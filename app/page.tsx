"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import ListingCard from "@/components/home/PetCard";
import { dummyListings } from "@/lib/dummyData";

export default function HomePage() {
  const [filter, setFilter] = useState<"all" | "pet" | "accessory">("all");

  const filteredListings = dummyListings.filter((item) => 
    filter === "all" ? true : item.category === filter
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero / Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Find Your Perfect Companion
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse verified, authentic pets and high-quality accessories from trusted sellers across Pakistan.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-lg border border-gray-200 inline-flex shadow-sm">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition ${
                filter === "all" ? "bg-blue-600 text-white shadow-sm" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              All Listings
            </button>
            <button
              onClick={() => setFilter("pet")}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition ${
                filter === "pet" ? "bg-purple-600 text-white shadow-sm" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Pets
            </button>
            <button
              onClick={() => setFilter("accessory")}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition ${
                filter === "accessory" ? "bg-gray-800 text-white shadow-sm" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Accessories
            </button>
          </div>
        </div>

        {/* Listings Grid */}
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No listings found in this category.</p>
          </div>
        )}
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} PETLY. All rights reserved. Built for trusted pet adoption.</p>
        </div>
      </footer>
    </div>
  );
}