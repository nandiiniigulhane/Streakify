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
        localStorage.setItem("uid", user.uid);
      })
      .catch((error) => {
        console.error("Error during signing in:", error);
      });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("uid");
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return { user, handleLogin, handleLogout };
};

export default useAuth;
