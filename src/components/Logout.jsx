import { auth } from "../services/firebaseConfig";
import { signOut } from "firebase/auth";

function Logout() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };
  return (
    <div className="logout">
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
