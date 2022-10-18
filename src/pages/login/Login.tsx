import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const Logo = require("../../assets/Group.png");
const LoginImage = require("../../assets/pablo-sign-in 1.png");

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  let navigate = useNavigate()

  const handleLoginSubmit = () => {
    
    navigate('/')
  };

  

  return (
    <div className="login__wrapper">
      <div className="container">
        <div className="login__image">
          <img src={Logo} alt="logo" />
        </div>
        <div className="login__container">
          <div className="left">
            <div className="left__image">
              <img src={LoginImage} alt="" />
            </div>
          </div>
          <div className="right">
            <h2>Welcome!</h2>
            <p className="text">Enter details to login.</p>
            <form>
              <div className="form__inputs">
                <input
                  type="email"
                  placeholder="Email"
                  className="input__box"
                  required
                />
              </div>

              <div className="form__inputs">
                <input
                  type={passwordShown ? "text" : "password"}
                  placeholder="Password"
                  className="input__box"
                  required
                />
                <div
                  className="show__btn"
                  onClick={() => setPasswordShown(!passwordShown)}
                >
                  {passwordShown ? "hide" : "show"}
                </div>
              </div>
              <p className="link">forgot password?</p>
              <button className="login__btn" onClick={ handleLoginSubmit}>
                log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
