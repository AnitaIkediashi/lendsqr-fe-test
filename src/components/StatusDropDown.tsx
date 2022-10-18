import "./table.css";

const StatusDropDown = () => {
  return (
    <div className="status">
      <div className="status__wrapper">
        <div className="status-content">
          <span className="fa-regular fa-eye left__icon"></span>
          <p>View Details</p>
        </div>
        <div className="status-content">
          <span className="fa-solid fa-user-xmark left__icon"></span>
          <p>Blacklist User</p>
        </div>
        <div className="status-content">
          <span className="fa-solid fa-user-check left__icon"></span>
          <p>Activate User</p>
        </div>
      </div>
    </div>
  );
};

export default StatusDropDown;
