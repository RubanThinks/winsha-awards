

import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, query, orderBy, deleteDoc, doc, updateDoc, limit } from "firebase/firestore";

// Winners
export async function addWinner(data: any) {
  return await addDoc(collection(db, "winners"), {
    ...data,
    createdAt: new Date().toISOString(),
  });
}

export async function getWinners() {
  const q = query(collection(db, "winners"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getFeaturedWinners(limitCount: number) {
  const q = query(collection(db, "winners"), orderBy("createdAt", "desc"), limit(limitCount));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Gallery
export async function addGalleryItem(data: any) {
  return await addDoc(collection(db, "gallery"), {
    ...data,
    createdAt: new Date().toISOString(),
  });
}

export async function getGallery() {
  const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Delete
export async function deleteItem(col: string, id: string) {
  await deleteDoc(doc(db, col, id));
}
