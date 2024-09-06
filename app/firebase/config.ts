import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBTpEE4rHB_IgOheO8SAKt4L-eyx_0lGKA",
    authDomain: "fever-92fd4.firebaseapp.com",
    projectId: "fever-92fd4",
    storageBucket: "fever-92fd4.appspot.com",
    messagingSenderId: "674738460870",
    appId: "1:674738460870:web:7153fb3a604ce73a745fc7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);