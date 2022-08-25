
import { useState } from 'react';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./NavBar.css";

const NavBar = () => {
	const [search, setSearch] = useState("")
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return

		navigate(`/search?q=${search}`)
	}

	return (
		<>
			<nav id="navbar">
				<h2>
					<Link to="/">
						<BiCameraMovie />
						Rating Movies
					</Link>
				</h2>
				<form onSubmit={handleSubmit} >
					<input type="text" placeholder="Search a movie" onChange={(e) => setSearch(e.target.value)} value={search} />
					<button type="submit">
						<BiSearchAlt2 />
					</button>
				</form>
			</nav>
		</>
	)
}

export default NavBar