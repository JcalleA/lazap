// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import {getFirestore} from 'firebase/firestore';

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

