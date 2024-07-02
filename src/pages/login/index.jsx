import { useContext, useEffect, useState } from "react";
import login from "./style.scss";
import { UserContext } from "../../contexts/User";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setLoggedIn }) => {
  let [name, setName] = useState("");
  const navigate = useNavigate();

  let updateName = (x) => {
    setName(x.target.value);
  };

  let [password, setPassword] = useState("");
  let updatePassword = (x) => {
    setPassword(x.target.value);
  };

  let submit = async (x) => {
    x.preventDefault();
    const payload = { name, password };
    try {
      const { data } = await axios.post(`http://localhost:8080/login`, payload);
      if (data.token) {
        localStorage.setItem("token", data.token);
        setLoggedIn(true);
        navigate("/offers", { replace: true });
      }
    } catch (error) {
      console.log(error, "Login failed");
    }
    console.log(name, password);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/offers"); // Redirect to offers page if already logged in
    }
  }, [navigate]);

  return (
    <div className="login-container">
      <div className="login-background-circle">
        <div className="login-shape"></div>
        <div className="login-shape"></div>
      </div>
      <form className="login-form" action="">
        <h4 className="login-h4">Login Here</h4>
        <label className="login-label" htmlFor="">
          UserName
        </label>
        <input
          type="text"
          placeholder="UserName"
          value={name}
          onChange={updateName}
          id={login.username}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
          id={login.password}
        />
        <button className="login-social" onClick={submit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
