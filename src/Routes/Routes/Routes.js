import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main/Main';
import About from '../../Pages/About/About';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';

const routers = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/about",
				element: <About />
			},
			{
				path: "/blog",
				element: <Blog />
			}
		]
	}
])

export default routers;