import './userInfo.css';


interface userData {
  data: any[] | users[];
}

interface users {
  accountNumber: string;
  accountBalance: number;
  profile : {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    bvn: string;
    gender: string;
  }
  email: string;
  education: {
    level: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: [];
    loanRepayment: string;

  }
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;

  }
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
  }

}

const UserInfo = ({data}: userData) => {
  return (
    <div className="user__data">
      <div className="user__data-wrapper">
        <div className="user__data-details">
          <h3>Personal Information</h3>
          <div className="personal__details">
            <article className="info">
              <h4>full Name</h4>
              <div>
                <span>{data[0]?.profile?.firstName}&nbsp;</span>
                <span>{data[0]?.profile?.lastName}</span>
              </div>
            </article>
            <article className="info">
              <h4>Phone Number</h4>
              <p>{data[0]?.profile?.phoneNumber}</p>
            </article>
            <article className="info">
              <h4>Email Address</h4>
              <p>{data[0]?.email}</p>
            </article>
            <article className="info">
              <h4>Bvn</h4>
              <p>{data[0]?.profile?.bvn}</p>
            </article>
            <article className="info">
              <h4>Gender</h4>
              <p>{data[0]?.profile?.gender}</p>
            </article>
            <article className="info">
              <h4>Marital status</h4>
              <p>Single</p>
            </article>
            <article className="info">
              <h4>Children</h4>
              <p>None</p>
            </article>
            <article className="info">
              <h4>Type of residence</h4>
              <p>Parent's Apartment</p>
            </article>
          </div>
        </div>
        <div className="user__data-details">
          <h3>Education and Employment</h3>
          <div className="personal__details">
            <article className="info">
              <h4>level of education</h4>
              <p>{data[0]?.education?.level}</p>
            </article>
            <article className="info">
              <h4>employment status</h4>
              <p>Employed</p>
            </article>
            <article className="info">
              <h4>sector of employment</h4>
              <p>{data[0]?.education?.sector}</p>
            </article>
            <article className="info">
              <h4>Duration of employment</h4>
              <p>{data[0]?.education?.duration}</p>
            </article>
            <article className="info">
              <h4>office email</h4>
              <p>{data[0]?.education?.officeEmail}</p>
            </article>
            <article className="info">
              <h4>Monthly income</h4>
              <div>
                <span>₦{data[0]?.education?.monthlyIncome[0]} - &nbsp;</span>
                <span>₦{data[0]?.education?.monthlyIncome[1]}</span>
              </div>
            </article>
            <article className="info">
              <h4>loan repayment</h4>
              <p>{data[0]?.education?.loanRepayment}</p>
            </article>
          </div>
        </div>
        <div className="user__data-details">
          <h3>Socials</h3>
          <div className="personal__details">
            <article className="info">
              <h4>Twitter</h4>
              <p>{data[0]?.socials?.twitter}</p>
            </article>
            <article className="info">
              <h4>Facebook</h4>
              <p>{data[0]?.socials?.facebook}</p>
            </article>
            <article className="info">
              <h4>Instagram</h4>
              <p>{data[0]?.socials?.instagram}</p>
            </article>
          </div>
        </div>
        <div className="user__data-details">
          <h3>Guarantor</h3>
          <div className="personal__details">
            <article className="info">
              <h4>full Name</h4>
              <div>
                <span>{data[0]?.guarantor?.firstName}&nbsp;</span>
                <span>{data[0]?.guarantor?.lastName}</span>
              </div>
            </article>
            <article className="info">
              <h4>Phone Number</h4>
              <p>{data[0]?.guarantor?.phoneNumber}</p>
            </article>
            <article className="info">
              <h4>Email Address</h4>
              <p>debby@gmail.com</p>
            </article>
            <article className="info">
              <h4>Relationship</h4>
              <p>Sister</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
