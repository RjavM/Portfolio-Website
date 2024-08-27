import React from "react";
import { Link } from 'react-router-dom';
import { Hamburger } from "./Hamburger";

export const Navbar = () => {
    return <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">
                <Link to="/">AARJAV</Link>
            </div>
            <div className="hidden xl:flex">
                <Link to="https://github.com/RjavM" target="_blank" className="mx-2 hover:text-blue-400">
                    GITHUB
                </Link>
                <Link to="https://www.linkedin.com/in/aarjav-mitkari/" target="_blank" className="mx-2 hover:text-blue-400">
                    LINKED-IN
                </Link>
                <Link to="/Contact" className="mx-2 hover:text-blue-400">
                    CONTACT-ME
                </Link>
                <a href="/Aarjav_Mitkari_Resume_5.pdf" download className="mx-2 hover:text-blue-400">DOWNLOAD-RESUME</a>
            </div>
            <div className="xl:hidden">
                <Hamburger />
            </div>
        </div>
    </nav>

}