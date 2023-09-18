import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { setLogout } from "../redux/reducer/auth";
import { AuthContext } from "../../contexts/authContext";
import { useDispatch ,useSelector} from "react-redux";
//===============================================================

const NavBar = () => {
  // const { isLoggedIn } = useContext(AuthContext);
  const dispatch = useDispatch();

  const {isLoggedIn} = useSelector((state) => {
    return {
      isLoggedIn:state.auth.isLoggedIn
    };
  });

  //===============================================================

  return (
    <>
    
      <div className="NavBar">
        {isLoggedIn ? (
          <>
            <Link className="Link" to="/dashboard">
              Dashboard
            </Link>
            <Link className="Link" to="/newArticle">
              Add New Article
            </Link>
            <button className="logout" onClick={((e)=>{dispatch(setLogout())})}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="Link" to="/">
              Register
            </Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </>
  );
};

export default NavBar;
