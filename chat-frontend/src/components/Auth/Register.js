import React, { useState } from "react";
import loginImage from "../../assets/images/register.svg";
import "./Auth.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../store/actions/auth";

const Login = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ firstName, lastName, email, gender, password }));
    history.push("/");
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
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required="required"
                />
              </div>
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required="required"
                />
              </div>
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required="required"
                />
              </div>
              <div className="input-field">
                <select
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                  required="required"
                >
                  <option value="male">Male</option>
                  <option value="male">Female</option>
                </select>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required="required"
                />
              </div>
              <button>Register</button>
            </form>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
