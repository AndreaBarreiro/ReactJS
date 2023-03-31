import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, writeBatch } from "firebase/firestore";
import pochis from "../products/products";

const firebaseConfig = {
  apiKey: "AIzaSyCmCDIbpsOUXsrSGJPtGxtjmYozkunG5EI",
  authDomain: "react-barreiroandrea-39575.firebaseapp.com",
  projectId: "react-barreiroandrea-39575",
  storageBucket: "react-barreiroandrea-39575.appspot.com",
  messagingSenderId: "898912367205",
  appId: "1:898912367205:web:b6fb83f57e2b4867528c8c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export async function createOrder(orderData) {
    const collectionRef = collection(db, "orders");
  
    console.log(orderData);
  
    const response = await addDoc(collectionRef, orderData);
    console.log("Su orden fue creada con exito, gracias!", response.id);
  
    return response.id;
  }
  
  /* Opcional */
  export async function exportData() {
    const collectionRef = collection(db, "pochis");
  
    for (let item of pochis) {
      const { id } = await addDoc(collectionRef, item);
      console.log("Documento creado", id);
    }
  }
  
  export async function exportDataWithBatch() {
    const batch = writeBatch(db);
    const collectionRef = collection(db, "pochis");
  
    for (let item of pochis) {
      const newDoc = doc(collectionRef);
      batch.set(newDoc, item);
    }
  
    const resp = await batch.commit();
    console.log(resp);
  }