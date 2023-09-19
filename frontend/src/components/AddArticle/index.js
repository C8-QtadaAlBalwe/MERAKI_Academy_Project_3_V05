import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import {addArticle} from "../redux/reducer/articles";
import axios from "axios";

// import { AuthContext } from "../../contexts/authContext";
import { useDispatch,useSelector} from "react-redux";
//===============================================================

const AddArticle = () => {
  // const { token, isLoggedIn } = useContext(AuthContext);
  const history = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  
  const {token,isLoggedIn} = useSelector((state) => {
    return {
      token:state.auth.token,
      isLoggedIn:state.auth.isLoggedIn
    };
  });
  //===============================================================
  const createNewArticle = async (e) => {
    e.preventDefault();
    try {
      const article = {
        title,
        description,
      };
      const result = await axios.post(
        "http://localhost:5000/articles",
         article,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result.data.success) {
        setStatus(true);
        setMessage(result.data.message);
        dispatch(addArticle(result.data))

      }
    } catch (error) {
      if (!error.response.data.success) {
        setStatus(false);
        setMessage(error.response.data.message);
        
      }
    }
  };

  //===============================================================

  useEffect(() => {
    if (!isLoggedIn) {
      history("/dashboard");
    }
  });

  //===============================================================
  return (
    <>
      <form onSubmit={createNewArticle}>
        <br />
        <input
          type="text"
          placeholder="article title here"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="article description here"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <button>Create New Article</button>
      </form>
      <br />
      {status
        ? message && <div className="SuccessMessage">{message}</div>
        : message && <div className="ErrorMessage">{message}</div>}
    </>
  );
};

export default AddArticle;
