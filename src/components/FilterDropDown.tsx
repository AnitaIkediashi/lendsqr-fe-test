
const FilterDropDown = () => {
  return (
    <div className="filter__wrapper">
      <form>
        <div className="form__inputs">
          <label>Organization</label>
          <div className="select">
            <span className="option">Select</span>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div className="form__inputs">
          <label>Username</label>
          <div className="select">
            <input type="text" placeholder="User" />
          </div>
        </div>
        <div className="form__inputs">
          <label>Email</label>
          <div className="select">
            <input type="email" placeholder="Email" />
          </div>
        </div>
        <div className="form__inputs">
          <label>Date</label>
          <div className="select">
            <input type="date" placeholder="Date" />
          </div>
        </div>
        <div className="form__inputs">
          <label>Phone Number</label>
          <div className="select">
            <input type="tel" placeholder="Phone Number" />
          </div>
        </div>
        <div className="form__inputs">
          <label>Status</label>
          <div className="select">
            <span className="option">Select</span>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </form>
      <div className="buttons">
        <button style={{color:'#545F7D', border: '1px solid #545F7D', backgroundColor: 'transparent'}}>Reset</button>
        <button style={{color:'#fff', border: '1px solid #39CDCC', backgroundColor: '#39CDCC'}}>Filter</button>
      </div>
    </div>
  )
}

export default FilterDropDown