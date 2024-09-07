import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyCC4uY4mRBI5ySANdQShbnP28pooftoCHw",
  authDomain: "movilessabado-f46c9.firebaseapp.com",
  projectId: "movilessabado-f46c9",
  storageBucket: "movilessabado-f46c9.appspot.com",
  messagingSenderId: "152196470796",
  appId: "1:152196470796:web:6d96e80a3f24d3eb08f629"
};
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
export const database = getDatabase(app);
