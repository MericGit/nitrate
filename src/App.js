import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import React from 'react';



const firebaseConfig = {
  apiKey: "AIzaSyAEES1eIh2bXMM1wgAAPAfMkoWDqshcbCk",
  authDomain: "nitrate-eccc5.firebaseapp.com",
  projectId: "nitrate-eccc5",
  storageBucket: "nitrate-eccc5.appspot.com",
  messagingSenderId: "234683029901",
  appId: "1:234683029901:web:3ca449053972f8769745c4",
  measurementId: "G-JZ1K8GKGNY"
};

firebase.initializeApp({
  firebaseConfig 
})


const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
