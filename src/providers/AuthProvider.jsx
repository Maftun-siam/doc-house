import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendEmailVerification } from 'firebase/auth'; // Added sendEmailVerification import
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
        return () => unsubscribe();
    }, [auth]);

    /* Creating new user  */
    const createUser = async (email, password) => {
        setLoading(true);
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const user = result.user;

            // Send verification email
            await sendEmailVerification(user);
            console.log("Verification email sent!");

            return result;
        } catch (error) {
            console.error("Error creating user:", error);
            throw error; // Rethrow the error to be handled by the caller
        } finally {
            setLoading(false); // Ensure loading is set to false even if there's an error
        }
    }

    /* Sign in user  */
    const SignInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .catch(error => {
                console.error("Error signing in:", error);
                throw error; // Rethrow the error to be handled by the caller
            })
            .finally(() => {
                setLoading(false); // Ensure loading is set to false after sign-in attempt
            });
    }

    /* Logout User */
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .catch(error => {
                console.error("Error signing out:", error);
                throw error; // Rethrow the error to be handled by the caller
            })
            .finally(() => {
                setLoading(false); // Ensure loading is set to false after logout attempt
            });
    }

    const authInfo = {
        user,
        loading,
        createUser,
        SignInUser,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
