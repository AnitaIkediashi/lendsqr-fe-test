import { link } from "fs";
import { useState } from "react";
import "./navbar.css";

const Avatar = require("../assets/image 4.png");
const Logo = require("../assets/Group.png");

const Navbar = () => {
  const [linkShowing, setLinkShowing] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="top">
          <img src={Logo} alt="" />
        </div>
        <div
          className={
            linkShowing
              ? "navbar__wrapper-links active"
              : "navbar__wrapper-links"
          }
        >
          <div className="search">
            <input type="text" placeholder="Search for anything" />
            <button className="search__btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <ul className="links">
            <li>
              <span className="link">Docs</span>
            </li>
            <li>
              <i className="fa-regular fa-bell"></i>
            </li>
            <li>
              <img src={Avatar} alt="avatar" />
              <span className="user">
                Adedeji <i className="fa-solid fa-sort-down"></i>
              </span>
            </li>
          </ul>
        </div>
        <div
          className="fa-solid fa-bars-staggered"
          onClick={() => setLinkShowing(!linkShowing)}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
