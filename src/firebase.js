import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJv0pq-LTL-0k3NuwQ4uBv10GFSej92Zg",
  authDomain: "chat-82421.firebaseapp.com",
  projectId: "chat-82421",
  storageBucket: "chat-82421.appspot.com",
  messagingSenderId: "698413019910",
  appId: "1:698413019910:web:3c124d51c84a1065a5e487"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()