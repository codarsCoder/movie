import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { useLoginContext } from '../context/LoginProvider';
const firebaseConfig = {
    apiKey: "AIzaSyDK7W_BY5MD9gw1KJ7sdcNfbZtD5cE-rIU",
    authDomain: "mydb-10cd6.firebaseapp.com",
    projectId: "mydb-10cd6",
    storageBucket: "mydb-10cd6.appspot.com",
    messagingSenderId: "4721019883",
    appId: "1:4721019883:web:fa84587bb5b74af985e7ae",
    measurementId: "G-TDR0CNY9VQ",
    // databaseURL: "https://myDb.firebaseio.com",
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const getUser = (email, password, setUserL, setMessage) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in   
            const user = userCredential.user;
            setUserL(user);
            //  user ?  setUserState({email:"111",password:"2222"}) : setUserState({email:"yok",password:"yok"})
        })
        .catch((error) => {
            setMessage(error.code.replaceAll("firebase:", ""))
        });
}

export const createUser = (email, password, setUserL) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setUserL(user);
        })
        .catch((error) => {
            console.log(error);
        });
}
console.log(auth)
export const signOutUser = (setUserL) => {
    signOut(auth)
        .then((userCredential) => {
            setUserL({});

        })
        .catch((error) => {
            console.log(error);
        });
}
export const signPopup = (setUserL) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            setUserL(user);

        })
        .catch((error) => {
            // Handle Errors here.
            console.log(error);
        });
}

export const authControl = (setUserL, setLoading) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const { email, displayName, photoURL } = user;
            setUserL({ email, displayName, photoURL });

            setLoading(false)
        } else {
            setUserL(false)
            console.log("auth control")
            setLoading(false)
        }
    });
}

export const updateUserProfile = (photo) => {
    updateProfile(auth.currentUser, {
        displayName: "Jane Q. User",
        photoURL: photo
    }).then(() => {
        console.log("ok")
    }).catch((error) => {
        // An error occurred
        // ...
    });
}


export const addFavorite = async(fId, setFavori,search) => {
    
    let api = process.env.REACT_APP_API;
    if (auth.currentUser) {
        let foavoriList = JSON.parse(localStorage.getItem(auth.currentUser.email)) || []
      const res =   foavoriList.find(item => item.id == fId)

        
        if (!res) {
            const {data} = await axios(`https://api.themoviedb.org/3/movie/${fId}?api_key=${api}`)
            const { poster_path, original_title, vote_average, overview,genres, id } = data
            const sumItem = { poster_path, original_title, vote_average, overview,genres, id }
            foavoriList = [...foavoriList,sumItem]
            localStorage.setItem(auth.currentUser.email, JSON.stringify(foavoriList));
        } else {
            foavoriList =   foavoriList.filter(item => item.id != fId);
            localStorage.setItem(auth.currentUser.email, JSON.stringify(foavoriList));
        }
        setFavori(JSON.parse(localStorage.getItem(auth.currentUser.email)))
    } else {
        alert("giriş yapınız")
    }

}