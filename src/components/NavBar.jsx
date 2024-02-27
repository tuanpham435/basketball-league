import { Link } from 'react-router-dom';
import React from 'react';

export default function NavBar() {
	return (
		<div className="container navbar">
			<Link to={'/'}>Home</Link>
			<nav className="nav-links">
				<Link to={'/players'}>Players</Link>
				<Link to={'/teams'}>Teams</Link>
			</nav>
		</div>
	);
}
