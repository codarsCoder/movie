import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const firebaseConfig = {
    apiKey: "AIzaSyDK7W_BY5MD9gw1KJ7sdcNfbZtD5cE-rIU",
    authDomain: "mydb-10cd6.firebaseapp.com",
    projectId: "mydb-10cd6",
    storageBucket: "mydb-10cd6.appspot.com",
    messagingSenderId: "4721019883",
    appId: "1:4721019883:web:fa84587bb5b74af985e7ae",
    measurementId: "G-TDR0CNY9VQ",
    databaseURL: "https://myDb.firebaseio.com",
};

const  app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const getUser = (email, password, setUserL, setMessage) => {
    console.log(email, password, "kk")
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setUserL({ user: user.reloadUserInfo.email, email: user.reloadUserInfo.email });
            //  user ?  setUserState({email:"111",password:"2222"}) : setUserState({email:"yok",password:"yok"})
          const uss = auth.currentUser
            console.log(uss,"user");
            console.log(user.reloadUserInfo.email);
        })
        .catch((error) => {

            setMessage(error.code.replaceAll("firebase:",""))
            console.log(error.message);
        });
}

export const createUser = (email, password) => {
    console.log(email, password, "kk")
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
        })
        .catch((error) => {
            console.log(error);
        });
}

export const signOutUser = (setUserL) => {
    signOut(auth)
        .then((userCredential) => {
            setUserL({ user: "", email: ""});
           
        })
        .catch((error) => {
            console.log(error);
        });
}