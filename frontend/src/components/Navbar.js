import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <nav>
      <div>
        <h1>App Name</h1>
        <div>
          {user ? (
            <>
              <Link to="/">Home</Link>&nbsp;|&nbsp;
              <Link to="/protected">Protected Page</Link>&nbsp;
              <button onClick={logoutUser}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>&nbsp;|&nbsp;
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;