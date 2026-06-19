import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  doc,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Listing {
  id: string;
  title: string;
  category: "pet" | "accessory";
  price: number;
  imageUrl: string;
  sellerName: string;
  location: string;
  status: "pending" | "approved" | "rejected" | "sold";
  sellerId: string;
  createdAt: string;
  description?: string;
}

const LISTINGS_COLLECTION = "listings";

function docToListing(docSnapshot: QueryDocumentSnapshot<DocumentData>): Listing {
  const data = docSnapshot.data();
  return {
    id: docSnapshot.id,
    title: data.title,
    category: data.category,
    price: data.price,
    imageUrl: data.imageUrl,
    sellerName: data.sellerName,
    location: data.location,
    status: data.status,
    sellerId: data.sellerId,
    createdAt: data.createdAt,
    description: data.description,
  };
}

export async function getListings(): Promise<Listing[]> {
  try {
    const snapshot = await getDocs(collection(db, LISTINGS_COLLECTION));
    return snapshot.docs.map(docToListing);
  } catch (error) {
    console.error("Error fetching listings:", error);
    throw error;
  }
}

export async function getApprovedListings(): Promise<Listing[]> {
  try {
    const q = query(collection(db, LISTINGS_COLLECTION), where("status", "==", "approved"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(docToListing);
  } catch (error) {
    console.error("Error fetching approved listings:", error);
    throw error;
  }
}

export async function getPendingListings(): Promise<Listing[]> {
  try {
    const q = query(collection(db, LISTINGS_COLLECTION), where("status", "==", "pending"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(docToListing);
  } catch (error) {
    console.error("Error fetching pending listings:", error);
    throw error;
  }
}

export async function getSellerListings(sellerId: string): Promise<Listing[]> {
  try {
    const q = query(collection(db, LISTINGS_COLLECTION), where("sellerId", "==", sellerId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(docToListing);
  } catch (error) {
    console.error("Error fetching seller listings:", error);
    throw error;
  }
}

export async function addListing(
  listing: Omit<Listing, "id" | "createdAt" | "status">
): Promise<Listing> {
  try {
    const createdAt = new Date().toISOString();
    const docRef = await addDoc(collection(db, LISTINGS_COLLECTION), {
      ...listing,
      status: "pending",
      createdAt,
    });
    return {
      id: docRef.id,
      ...listing,
      status: "pending",
      createdAt,
    };
  } catch (error) {
    console.error("Error adding listing:", error);
    throw error;
  }
}

export async function updateListingStatus(
  listingId: string,
  status: Listing["status"]
): Promise<void> {
  try {
    await updateDoc(doc(db, LISTINGS_COLLECTION, listingId), { status });
  } catch (error) {
    console.error("Error updating listing status:", error);
    throw error;
  }
}

export async function deleteListing(listingId: string): Promise<void> {
  try {
    await deleteDoc(doc(db, LISTINGS_COLLECTION, listingId));
  } catch (error) {
    console.error("Error deleting listing:", error);
    throw error;
  }
}
