import { useContext, useState } from "react";
import login from "./style.scss";
import { UserContext } from "../../contexts/User";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn }) => {
  let [name, setName] = useState();
  const navigate = useNavigate();

  let updateName = (x) => {
    setName(x.target.value);
  };
  let [password, setPassword] = useState();
  let updatePassword = (x) => {
    setPassword(x.target.value);
  };
  let submit = (x) => {
    x.preventDefault();
    navigate("/offers");
    setLoggedIn((prev) => !prev);
    console.log(name, password);
  };
  return (
    <div className="login-container">
      <div class="login-background-circle">
        <div class="login-shape"></div>
        <div class="login-shape"></div>
      </div>
      <form className="login-form" action="">
        <h4 className="login-h4">Login Here</h4>
        <label className="login-lable" htmlFor="">
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
