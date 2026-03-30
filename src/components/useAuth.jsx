import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error("Error during signing in:", error);
      });
  };

  return [isLoggedIn, handleLogin];
};

export default useAuth;
