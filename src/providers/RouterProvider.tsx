import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import Layout from '../components/Layout/Layout';
import HeroDetail from '../pages/heroDetail/HeroDetail';
import Favourites from '../pages/favourites/Favourites';

const RoutesProvider = () => {
	const router = createBrowserRouter([
		{
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Landing />,
				},
				{
					path: '/favourites',
					element: <Favourites />,
				},
				{
					path: '/favourite/:id',
					element: <HeroDetail />,
				},
				{
					path: 'heroes/:id',
					element: <HeroDetail />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default RoutesProvider;
