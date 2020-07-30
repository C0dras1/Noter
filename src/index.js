import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration
// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBgVUiFFIqSn1Op0Om9CW9SrzBIqVkT-zI",
  authDomain: "noter-c12a8.firebaseapp.com",
  databaseURL: "https://noter-c12a8.firebaseio.com",
  projectId: "noter-c12a8",
  storageBucket: "noter-c12a8.appspot.com",
  messagingSenderId: "1012984912724",
  appId: "1:1012984912724:web:80fe9395687e9bc88306c1",
  measurementId: "G-6CTJTD6TVR"
});
firebase.analytics();

ReactDOM.render(
  <App />,
  document.getElementById('Note-Container')
);

serviceWorker.unregister();
