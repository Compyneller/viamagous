import React, { useState } from "react";
import { Card } from "react-bootstrap";
import headerImage from "../../assets/Rectangle 1.png";
import amazon from "../../assets/amazon_PNG24.png";
import tree from "../../assets/Rectangle 4@2x.png";
import google from "../../assets/Group 9@2x.png";
import fb from "../../assets/Rectangle 17@2x.png";
import errorImage from "../../assets/Group 2.svg";

import "./Login.scss";
import { Link } from "react-router-dom";
import SocialsButtons from "../../components/LoginComponents/SocialsButtons/SocialsButtons";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@" && ".com")) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <div className="login__container">
      <div className="login__header__image">
        <img src={headerImage} alt="" />
      </div>
      <Card className="login__card">
        <Card.Header className="login__card__header">
          <img src={amazon} width={99} height={32} alt="" />
        </Card.Header>
        <Card.Body className="w-100">
          <div className="login__tree__container">
            <p className="login__text">Login</p>
            <img src={tree} alt="" />
          </div>
          <form className="login__form" onSubmit={handleSubmit}>
            <div className="email__input">
              <input
                className="login__inputs"
                // type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && (
                <div className="login__error">
                  <img src={errorImage} alt="" />
                  <p>The email field is Required</p>
                </div>
              )}
            </div>

            <input
              className="login__inputs"
              required
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="signin__button">
              Sign In
            </button>
            <div className="login__links">
              <div className="login__forgot__signUp">
                <Link to="/login">Forgot Password?</Link>
                <Link to="/login">New User? Sign Up</Link>
              </div>
              <p className="or">or</p>
              <div className="login__socials w-100">
                <SocialsButtons
                  image={google}
                  text="GOOGLE"
                  background="#4285F4"
                />
                <SocialsButtons
                  image={fb}
                  text="FACEBOOK"
                  background="#1877F2"
                />
              </div>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
