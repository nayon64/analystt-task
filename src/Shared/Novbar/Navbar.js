import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

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
      <div className='navbar'>
		
				<h2 className='logo'>ANALAYSTT.OI</h2>
				<ul className='menus'>
					{menus}
			</ul>
      </div>
    </nav>
  );
};

export default Navbar;