import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAM2DtebY8xtTUn4g_FFuyxnzZLwD-gAgw",
  authDomain: "reactchat-64421.firebaseapp.com",
  projectId: "reactchat-64421",
  storageBucket: "reactchat-64421.appspot.com",
  messagingSenderId: "328530986559",
  appId: "1:328530986559:web:1a0fd667b574c9591e1a8a"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()