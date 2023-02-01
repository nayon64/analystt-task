import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaStream } from "react-icons/fa";

const Navbar = () => {
	const [isOpen,setIsOpen]=useState(false)

	const routes = [
		{
			path: "/",
			name:"Home"
		},
		{
			path: "/about",
			name:"About"
		},
		{
			path: "/blog",
			name:"Blog"
		}
	]

	const menus = (
    <>
      {routes.map((menu, i) => (
        <NavLink
          key={i}
          to={menu.path}
          className={`${({ isActive }) =>
            isActive ? "active" : "text-black"}`}
        >
          {menu.name}{" "}
        </NavLink>
      ))}
    </>
  );

	return (
    <nav>
      <div className="navbar">
        <h2 className="logo">ANALAYSTT.OI</h2>
        <div className="humburgurs">
          {isOpen ? (
            <FaStream onClick={() => setIsOpen(false)} />
          ) : (
            <FaBars onClick={() => setIsOpen(true)} />
          )}
        </div>
        <ul className="menus">{menus}</ul>
        {isOpen && <ul className="humbuger-menus">{menus}</ul>}
      </div>
    </nav>
  );
};

export default Navbar;