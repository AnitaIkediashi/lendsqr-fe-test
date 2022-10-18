import React from 'react'
import './hamburger.css'

interface props {
  sideBar : boolean;
  menu: React.Dispatch<React.SetStateAction<boolean>>
}

const Hamburger = ({sideBar, menu} : props) => {
  return (
    <div className="menu" onClick={() => menu(!sideBar)}>
      <i className="fa-solid fa-bars"></i>
    </div>
  )
}

export default Hamburger