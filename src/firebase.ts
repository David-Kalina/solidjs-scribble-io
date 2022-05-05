// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDeng2oIU3XwIGsM5MOc3W2lFOqkjz2bgY',
  authDomain: 'scribble-io.firebaseapp.com',
  projectId: 'scribble-io',
  storageBucket: 'scribble-io.appspot.com',
  messagingSenderId: '322570117202',
  appId: '1:322570117202:web:e9023cb4f5cfd606b9ff8b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
