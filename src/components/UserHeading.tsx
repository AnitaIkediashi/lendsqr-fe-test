import { Link } from "react-router-dom";
import "./userHeading.css";

interface userData {
  data: any[] | users[];
}

interface users {
  accountNumber: string;
  accountBalance: number;
  profile : {
    firstName: string;
    lastName: string;
    avatar: string;
  }
}


const UserHeading = ({data}: userData) => {
  return (
    <div className="user">
      <Link to="/" className="user__link">
        Back to Users
      </Link>
      <div className="user__details">
        <h2>User Details</h2>
        <div className="user__details-btn">
          <button style={{ color: "#E4033B", border: "1px solid #E4033B" }}>
            Blacklist User
          </button>
          <button style={{ color: "#39CDCC", border: "1px solid #39CDCC" }}>
            Activate User
          </button>
        </div>
      </div>
      <div className="user__container">
        <div className="user__container-top">
          <article className="top__card-one">
            <img src={data[0]?.profile?.avatar} alt="user avatar" />
            <div className="user-name">
              <div>
                <span>{data[0]?.profile?.firstName} &nbsp;</span>
                <span>{data[0]?.profile?.lastName}</span>
              </div>
              <p>{data[0]?.accountNumber}</p>
            </div>
          </article>
          <article className="top__card-two">
            <h4>User's Tier</h4>
            <div className="card__stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
          </article>
          <article className="top__card-three">
            <h3>₦{data[0]?.accountBalance}</h3>
            <div className="bank__details">9912345678/Providus Bank</div>
          </article>
        </div>
        <div className="user__container-bottom">
          <p className="active">General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>
    </div>
  );
};

export default UserHeading;
