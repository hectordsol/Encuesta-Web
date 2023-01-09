import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

var firebaseConfig= {
        apiKey: "AIzaSyBbXg8DQaIIK0zRX0nCFVrMVYSbPJrENog",
        authDomain: "encuestajson.firebaseapp.com",
        projectId: "encuestajson",
        storageBucket: "encuestajson.appspot.com",
        messagingSenderId: "253218449906",
        appId: "1:253218449906:web:6f59b8fd9fa015249ae36b",
        measurementId: "G-XYC3R1Y8RE"
      };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
