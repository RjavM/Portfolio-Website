import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Close the menu if clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <div className='p-4 z-20'>
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <div className="w-8 h-1 bg-white mb-1"></div>
                    <div className="w-8 h-1 bg-white mb-1"></div>
                    <div className="w-8 h-1 bg-white"></div>
                </button>
            </div>
            {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={closeMenu}></div>}

            {isOpen && (
                <div ref={menuRef} className="fixed top-0 right-0 h-full w-2/3 max-w-xs bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-20">
                    <nav className="bg-gray-800 text-white p-4">
                        <div className="container mx-auto flex items-center">
                            <div className="text-2xl font-bold">
                                <Link onClick={() => {
                                    {closeMenu()}
                                }} to="/" className='flex flex-row justify-center'>{<img src="Student.jpg" alt="My Image" className="w-10 h-10 object-cover rounded-full" />}RJAV</Link>
                            </div>
                        </div>
                    </nav>
                    <Link to="https://github.com/RjavM" target="_blank" className="block px-4 py-2 text-white hover:bg-gray-700">
                        GITHUB
                    </Link>
                    <Link to="https://www.linkedin.com/in/aarjav-mitkari/" target="_blank" className="block px-4 py-2 text-white hover:bg-gray-700">
                        LINKED-IN
                    </Link>
                    <Link to="/contact" className="block px-4 py-2 text-white hover:bg-gray-700">
                        CONTACT-ME
                    </Link>
                    <a href="/Aarjav_Mitkari_Resume_5.pdf" download className="block px-4 py-2 text-white hover:bg-gray-700">DOWNLOAD-RESUME</a>
                </div>
            )}
        </div>
    );
};