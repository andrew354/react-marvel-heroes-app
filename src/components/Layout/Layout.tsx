import './layout.scss';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

export default function Layout() {
	return (
		<>
			<main>
				<Header />
				<Outlet />
			</main>
		</>
	);
}
