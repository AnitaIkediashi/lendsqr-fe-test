import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import "./sideBar.css";

const SideBar = () => {

  const [sideBarShowing, setSideBarShowing] = useState(false);

  return (
    <>
      <Hamburger sideBar={sideBarShowing} menu={setSideBarShowing}/>
      <div className={sideBarShowing ? "side-bar active" : "side-bar"}>
        <div className="center">
          <ul>
            <li>
              <i className="fa-solid fa-briefcase"></i>
              <span>Switch Organization</span>
              <i className="fa-solid fa-chevron-down"></i>
            </li>
            <li>
              <i className="fa-solid fa-house-chimney"></i>
              <span>Dashboard</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <ul>
            <p className="heading">CUSTOMERS</p>
            <li>
              <i className="fa-solid fa-user-group"></i>
              <Link to="/user">Users</Link>
            </li>
            <li>
              <i className="fa-solid fa-users"></i>
              <span>Guarantors</span>
            </li>
            <li>
              <i className="fa-solid fa-sack-dollar"></i>
              <span>Loans</span>
            </li>
            <li>
              <i className="fa-regular fa-handshake"></i>
              <span>Decision Models</span>
            </li>
            <li>
              <i className="fa-solid fa-piggy-bank"></i>
              <span>Savings</span>
            </li>
            <li>
              <i className="fa-solid fa-hand-holding-dollar"></i>
              <span>Loan Requests</span>
            </li>
            <li>
              <i className="fa-solid fa-user-check"></i>
              <span>Whitelist</span>
            </li>
            <li>
              <i className="fa-solid fa-user-xmark"></i>
              <span>Karma</span>
            </li>
            <p className="heading">BUSINESSES</p>
            <li>
              <i className="fa-solid fa-briefcase"></i>
              <span>Organization</span>
            </li>
            <li>
              <i className="fa-solid fa-hand-holding-dollar"></i>
              <span>Loan Products</span>
            </li>
            <li>
              <i className="fa-solid fa-building-columns"></i>
              <span>Savings Products</span>
            </li>
            <li>
              <i className="fa-solid fa-coins"></i>
              <span>Fees and Charges</span>
            </li>
            <li>
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span>Transactions</span>
            </li>
            <li>
              <i className="fa-solid fa-fan"></i>
              <span>Services</span>
            </li>
            <li>
              <i className="fa-solid fa-user-gear"></i>
              <span>Service Account</span>
            </li>
            <li>
              <i className="fa-solid fa-scroll"></i>
              <span>Settlements</span>
            </li>
            <li>
              <i className="fa-solid fa-chart-column"></i>
              <span>Reports</span>
            </li>
            <p className="heading">SETTINGS</p>
            <li>
              <i className="fa-solid fa-sliders"></i>
              <span>Preferences</span>
            </li>
            <li>
              <i className="fa-solid fa-certificate"></i>
              <span>Fees and Pricing</span>
            </li>
            <li>
              <i className="fa-solid fa-clipboard-list"></i>
              <span>Audit Logs</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
