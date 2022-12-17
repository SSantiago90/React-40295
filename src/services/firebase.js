import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBs4uVZXDTEC_9xrtzRYz2HOLZzNpj_TgI",
  authDomain: "react40295.firebaseapp.com",
  projectId: "react40295",
  storageBucket: "react40295.appspot.com",
  messagingSenderId: "1048825608573",
  appId: "1:1048825608573:web:4a56a9e6cded6bf0c37414",
};

const app = initializeApp(firebaseConfig);

const DB = getFirestore(app);

export async function getSingleItem(id) {
  //1. referencia
  let docRef = doc(DB, "products", id);

  //2. obtenemos la respuesta async de getDoc
  let docSnapshot = await getDoc(docRef);

  //3. retornamos la respuesta.data()
  let item = docSnapshot.data();
  item.id = docSnapshot.id;

  return item;
}

export async function getItems() {
  let collectionRef = collection(DB, "products");
  let docsSnapshot = await getDocs(collectionRef);

  let docsArray = docsSnapshot.docs;

  /* let dataDocs = docsArray.map((doc) => {
    let item = doc.data();
    item.id = doc.id;
    return item;
  }); */

  let dataDocs = docsArray.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;
}

export async function getItemsCategory(categoryID) {
  let collectionRef = collection(DB, "products");

  let q = query(collectionRef, where("category", "==", categoryID));

  let docsSnapshot = await getDocs(q);
  let docsArray = docsSnapshot.docs;

  let dataDocs = docsArray.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;
}
