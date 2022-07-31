import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQ30-AVTBflmUMkA1Uod3WijAHOHBYnSg",
  authDomain: "tiendavomercita.firebaseapp.com",
  projectId: "tiendavomercita",
  storageBucket: "tiendavomercita.appspot.com",
  messagingSenderId: "963143702863",
  appId: "1:963143702863:web:dd79de6ac8e6d9b82c0d3a"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
