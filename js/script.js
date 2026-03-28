import { auth, provider } from "./firebase.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

const elements = {
  signInButton: document.getElementById("sign-in-button"),
  continueWithGoogleButton: document.getElementById(
    "sign-in-with-google-button",
  ),
};

function googleLogin() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = result.credential;
      const token = credential?.accessToken;

      const user = result.user;

      console.log("Sign-in successful!", user);
      console.log("Token:", token);
    })
    .catch((error) => {
      console.error("Sign-in error:", error.code, error.message);
    });
}

elements.signInButton.addEventListener("click", googleLogin);
elements.continueWithGoogleButton.addEventListener("click", googleLogin);
