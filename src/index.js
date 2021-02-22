import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDIxmapGN3aCO3a6EdU2on9ircN4SyR298",
  authDomain: "cart-a52cd.firebaseapp.com",
  projectId: "cart-a52cd",
  storageBucket: "cart-a52cd.appspot.com",
  messagingSenderId: "1052011482034",
  appId: "1:1052011482034:web:003084d5108b97764b72ab"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

