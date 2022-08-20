import React from "react";
import { Card } from "react-bootstrap";
import headerImage from "../../assets/Rectangle 1.png";
import amazon from "../../assets/amazon_PNG24.png";
import tree from "../../assets/Rectangle 4@2x.png";
import google from "../../assets/Group 9@2x.png";
import fb from "../../assets/Rectangle 17@2x.png";

import "./Login.scss";
import { Link } from "react-router-dom";
import SocialsButtons from "../../components/LoginComponents/SocialsButtons/SocialsButtons";
const Login = () => {
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
          <form className="login__form">
            <input
              className="login__inputs"
              type="email"
              required
              placeholder="Email"
            />

            <input
              className="login__inputs"
              required
              type="password"
              placeholder="Password"
            />
            <button className="signin__button">Sign In</button>
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
