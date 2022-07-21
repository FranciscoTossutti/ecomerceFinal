// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8g9KsDaVSvAUWljMvwfn4NXgm-3MHpmo",
  authDomain: "itemcollection-a4b60.firebaseapp.com",
  projectId: "itemcollection-a4b60",
  storageBucket: "itemcollection-a4b60.appspot.com",
  messagingSenderId: "465392709653",
  appId: "1:465392709653:web:afa6d605912f9f605d1e1c"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);


export async function createBuyOrder (dataOrder) {
  
   const orderCollection = collection(appFirestore,'order');
   const orderCreated = await addDoc(orderCollection, dataOrder);
   
   return orderCreated;
}

export default appFirebase; 