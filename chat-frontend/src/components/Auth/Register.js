import React from "react";
import loginImage from "../../assets/images/register.svg";
import "./Auth.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id="auth-container">
      <div id="auth-card">
        <div>
          <div id="image-section">
            <img src={loginImage} alt="login" />
          </div>
          <div id="form-section">
            <h2>Welcome back</h2>
            <form>
              <div className="input-field">
                <input type="text" placeholder="Enter First Name" />
              </div>
              <div className="input-field">
                <input type="text" placeholder="Enter Last Name" />
              </div>
              <div className="input-field">
                <input type="text" placeholder="Enter Email" />
              </div>
              <div className="input-field">
                <select>
                  <option value="male">Male</option>
                  <option value="male">Female</option>
                </select>
              </div>
              <div className="input-field">
                <input type="text" placeholder="Enter Password" />
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
