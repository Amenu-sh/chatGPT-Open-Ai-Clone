import { getApp, getApps, initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD89zDCljOFjsBB4vthjKMphDifc3yO_WQ",
  authDomain: "chatgpt-messenger-yt-d4757.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-d4757",
  storageBucket: "chatgpt-messenger-yt-d4757.appspot.com",
  messagingSenderId: "663360338868",
  appId: "1:663360338868:web:68aef79afc9b4292abd0e1",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFireStore(app);
export { db };
