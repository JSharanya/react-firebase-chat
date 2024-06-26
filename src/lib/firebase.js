import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-64421.firebaseapp.com",
  projectId: "reactchat-64421",
  storageBucket: "reactchat-64421.appspot.com",
  messagingSenderId: "328530986559",
  appId: "1:328530986559:web:1a0fd667b574c9591e1a8a"
};


const app = initializeApp(firebaseConfig);