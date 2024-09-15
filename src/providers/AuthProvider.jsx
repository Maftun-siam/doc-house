
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebaseConfig';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("Current User", currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe;
        }
    }, [])

    /* Creating new user  */
    const createUser = async (email, password) => {
        setLoading(true);
        const result = await createUserWithEmailAndPassword(auth, email, password)
        const user = result.user

        // Send verification email
        await sendEmailVerification(user);
        console.log("Verification email sent!");
        return result;
    }
    
    /* Sign in  user  */
    const SignInUSer = (email, password) => {
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password)
    }

    /* Logout User */
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const authInfo = {
        user,
        loading,
        createUser,
        SignInUSer,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;