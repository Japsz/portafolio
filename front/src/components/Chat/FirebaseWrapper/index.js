import React, { useEffect } from 'react';
import FirebaseContext from './context'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
const FirebaseWrapper = ({children}) => {
    const [fbClient, setFbClient] = useState(null)
    useEffect(() => {
        const check = firebase.appCheck()
        console.log({check})
        const client = firebase.initializeApp({
            apiKey: "AIzaSyDfLZ1yVTUwztBWF8OBBM-FrUnlm5sqvpM",
            authDomain: "gatsby-portfolio-c8fd3.firebaseapp.com",
            databaseURL: "https://gatsby-portfolio-c8fd3-default-rtdb.firebaseio.com",
            projectId: "gatsby-portfolio-c8fd3",
            storageBucket: "gatsby-portfolio-c8fd3.appspot.com",
            messagingSenderId: "308225790356",
            appId: "1:308225790356:web:e6b41fb662a1c04f237f81",
            measurementId: "G-YSGWSRN1MQ"
        })
        setFbClient(client)
    },[])
    return (
        <FirebaseContext.Provider value={fbClient}>
            {children}            
        </FirebaseContext.Provider>
    );
};

export default FirebaseWrapper;