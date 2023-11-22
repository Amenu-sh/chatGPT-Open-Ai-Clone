import { getApp, getApps, initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: env.apiKey,
  authDomain: "chatgpt-messenger-yt-d4757.firebaseapp.com",
  projectId: env.projectId,
  storageBucket: "chatgpt-messenger-yt-d4757.appspot.com",
  messagingSenderId: env.messagingSenderId,
  appId: env.appId,
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFireStore(app);
export { db };
