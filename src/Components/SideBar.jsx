import { ArchiveIcon, ClipboardIcon, EnvelopeClosedIcon, HandIcon, IdCardIcon, LapTimerIcon, TransformIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import React from "react";
import Aseda from '../img/Aseda_Micro.png'
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function SideBar() {

  const [menu, setMenu] = useState(false);
  return (
    <div className="sidebar">
        <div className="navbar">
            <HamburgerMenuIcon className="bar" onClick={() => setMenu(!menu)}/>
        </div>
      <div className="sidebar_logo">
          <img src={Aseda} alt="Aseda logo" />
      </div>

      <nav className={`${menu} ? 'open' :'close'`}>
        <ul>
          
          <NavLink to="/" className="color" activeclassname='active'>
            <li><TransformIcon /> Account</li>
          </NavLink>
          <NavLink to="/account-preview" className="color">
            <li><IdCardIcon /> Account-Preview</li>
          </NavLink>
          <NavLink to="/create-account" className="color">
            <li><ArchiveIcon /> CreateAccount</li>
          </NavLink>
          <NavLink to="/deposit" className="color">
            <li><HandIcon /> Deposit</li>
          </NavLink>
          <NavLink to="/loan" className="color">
            <li><ClipboardIcon /> Loan</li>
          </NavLink>
          <NavLink to="/transaction" className="color">
            <li><LapTimerIcon /> Transaction</li>
          </NavLink>
          <NavLink to="/withdrawal" className="color">
            <li><EnvelopeClosedIcon /> Withdrawal</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
