import { useState } from "react";
import initializeFirebase from "../components/Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider, deleteUser, getIdToken } from "firebase/auth";
import { useEffect } from "react";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')

    const uid = user.uid;
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setAuthError('');
                const newUser = { email, displayName: name }
                const photoURL = user.photoURL;
                setUser(newUser);

                // save user to the Database 
                saveUser(email, name, photoURL, uid, 'POST');

                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                navigate(-2);
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    const logInUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                // Signed in 
                setAuthError('');
                // const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const photoURL = user.photoURL;
                // save user to the Database 
                saveUser(user.email, user.displayName, photoURL, uid, 'PUT');
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // const uid = user.uid;
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
    const logOut = (navigate) => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.

            navigate('/');
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
    const handleDeleteUser = () => {

        // const uid = user.uid;
        // auth.deleteUser(uid)
        //     .then(() => {
        //         console.log('Successfully deleted user');
        //     })
        //     .catch((error) => {
        //         console.log('Error deleting user:', error);
        //     });
        const user = auth.currentUser;

        deleteUser(user).then(() => {
            console.log('Successfully deleted user');
        }).catch((error) => {
            console.log('Error deleting user:', error);
        });


    }


    const saveUser = (email, displayName, photoURL, uid, method) => {
        const user = { email, displayName, photoURL, uid };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        admin,
        token,
        registerUser,
        logOut,
        logInUser,
        isLoading,
        authError,
        signInWithGoogle,
        handleDeleteUser
    }

}

export default useFirebase;