import { dummyListings } from "./dummyData";

export interface Listing {
  id: number;
  title: string;
  category: "pet" | "accessory";
  price: number;
  imageUrl: string;
  sellerName: string;
  location: string;
  status: "pending" | "approved" | "rejected" | "sold";
  sellerId?: string;
  createdAt: string;
}

// Initialize localStorage with dummy data if not already set
export function initializeData() {
  if (!localStorage.getItem("listings")) {
    const listingsWithStatus: Listing[] = dummyListings.map((item, index) => ({
        ...item,
        category: item.category as "pet" | "accessory", // <-- Add this type assertion
        status: index < 4 ? "approved" : "pending",
        sellerId: "seller-1",
        createdAt: new Date().toISOString(),
      }));
    localStorage.setItem("listings", JSON.stringify(listingsWithStatus));
  }
}

// Get all listings
export function getListings(): Listing[] {
  initializeData();
  const data = localStorage.getItem("listings");
  return data ? JSON.parse(data) : [];
}

// Get approved listings (for home page)
export function getApprovedListings(): Listing[] {
  return getListings().filter((listing) => listing.status === "approved");
}

// Get pending listings (for admin)
export function getPendingListings(): Listing[] {
  return getListings().filter((listing) => listing.status === "pending");
}

// Get seller's listings
export function getSellerListings(sellerId: string): Listing[] {
  return getListings().filter((listing) => listing.sellerId === sellerId);
}

// Add new listing
export function addListing(listing: Omit<Listing, "id" | "createdAt" | "status">): Listing {
  const listings = getListings();
  const newListing: Listing = {
    ...listing,
    id: Date.now(), // Simple unique ID
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  listings.push(newListing);
  localStorage.setItem("listings", JSON.stringify(listings));
  return newListing;
}

// Update listing status
export function updateListingStatus(listingId: number, status: Listing["status"]) {
  const listings = getListings();
  const index = listings.findIndex((l) => l.id === listingId);
  if (index !== -1) {
    listings[index].status = status;
    localStorage.setItem("listings", JSON.stringify(listings));
  }
}

// Delete listing
export function deleteListing(listingId: number) {
  const listings = getListings().filter((l) => l.id !== listingId);
  localStorage.setItem("listings", JSON.stringify(listings));
}