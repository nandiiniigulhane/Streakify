import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../services/firebaseConfig";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      currentUser ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });

    return () => subscribe();
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error("Error during signing in:", error);
      });
  };

  return [isLoggedIn, handleLogin];
};

export default useAuth;
