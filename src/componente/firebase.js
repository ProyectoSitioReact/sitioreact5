// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCq9u8Gkv-HNYD6q_UEOloCOwZ3BW05Mbs',
    authDomain: 'fb-bdreactf.firebaseapp.com',
    projectId: 'fb-bdreactf',
    storageBucket: "fb-bdreactf.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
