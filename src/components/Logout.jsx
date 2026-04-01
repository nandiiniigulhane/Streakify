import useAuth from "../hooks/useAuth";

function Logout() {
  const { handleLogout } = useAuth();
  return (
    <div className="logout">
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
