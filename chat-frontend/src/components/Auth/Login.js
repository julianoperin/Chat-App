import React, { useState } from "react";
import loginImage from "../../assets/images/login.svg";
import "./Auth.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/auth";

const Login = ({ history }) => {
  const authReducer = useSelector((state) => state.authReducer);
  const { isLoggedIn } = authReducer;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitForm = async (e) => {
    e.preventDefault();

    dispatch(login({ email, password }));
    history.push("/");

    // AuthService.login({ email, password }).then((res) => console.log(res));

    // axios
    //   .post("http://localhost:3000/login", { email, password })
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });

    // console.log(email, password);
    console.log(isLoggedIn);
  };

  return (
    <div id="auth-container">
      <div id="auth-card">
        <div>
          <div id="image-section">
            <img src={loginImage} alt="login" />
          </div>
          <div id="form-section">
            <h2>Welcome back</h2>
            <form onSubmit={submitForm}>
              <div className="input-field">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Enter Email"
                  required="required"
                  value={email}
                />
              </div>
              <div className="input-field">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter Password"
                  required="required"
                  value={password}
                />
              </div>
              <button>Login</button>
            </form>
            <p>
              Don't have an account? <Link to="register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
