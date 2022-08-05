
import React from 'react'
import { Link } from 'react-router-dom';

import { BiCameraMovie } from "react-icons/bi";
import Button from './Button';

const NavBar = () => {
    return (
        <>
            <nav id="navbar">
                <h2>
                    <Link to="/">
                        <BiCameraMovie />
                        Rating Movies
                    </Link>
                </h2>
                <Link to="/Movie/1"> Movie </Link>
                <form action="">
                    <input type="text" placeholder="Search a movie" />
                    <Button />
                </form>
            </nav>
        </>
    )
}

export default NavBar