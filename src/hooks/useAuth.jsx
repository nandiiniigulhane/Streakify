import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../services/firebaseConfig";

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => subscribe();
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error("Error during signing in:", error);
      });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return { user, handleLogin, handleLogout };
};

export default useAuth;
