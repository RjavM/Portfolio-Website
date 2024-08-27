import React from 'react';

export const Footer = () => {
    return <div className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4 md:flex md:justify-between">

            <div className="mb-8 md:mb-0">
                <h3 className="text-4xl font-semibold mb-4">About</h3>
                <p className='text-lg'>
                    I'm Aarjav Mitkari, a Software Engineering student at Carleton University with a focus on web development <br />and AI/ML. I've worked on projects like digital wallets and stock prediction models, and I'm passionate about<br /> creating innovative solutions. Explore my portfolio and feel free to reach out!
                </p>
            </div>


            <div className="mb-8 md:mb-0">
                <h3 className="text-xl font-semibold mb-4">Links</h3>
                <ul>
                    <li className="mb-2">
                        <a href="https://github.com/RjavM" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
                    </li>
                    <li className="mb-2">
                        <a href="https://www.linkedin.com/in/aarjav-mitkari/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Linked-In</a>
                    </li>
                    <li className="mb-2">
                        <a href="/#Home" className="text-blue-400 hover:underline">Home</a>
                    </li>
                    <li className="mb-2">
                        <a href="/Projects" className="text-blue-400 hover:underline">Projects</a>
                    </li>
                    <li className="mb-2">
                        <a href="/Contact" className="text-blue-400 hover:underline">Send me a message</a>
                    </li>
                </ul>
            </div>

            {/* Contact Section */}
            <div>
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <ul>
                    <li className="mb-2">School: aarjavmitkari@cmail.carleton.ca</li>
                    <li className="mb-2">Personal: ahmit0419@gmail.com</li>
                    <li className="mb-2">Ottawa, Canada</li>
                    <li className="mb-2">+1 (343)-542-0904</li>
                </ul>
            </div>
        </div>
    </div>
};

