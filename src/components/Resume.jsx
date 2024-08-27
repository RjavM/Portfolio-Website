import React from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export const Resume = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow bg-gray-900 text-white py-8">
                <div className="container mx-auto">
                    <h1 className="text-5xl text-center font-bold mb-8">Resume</h1>
                    <div className="border border-gray-300 shadow-lg overflow-auto">
                        <iframe
                            src="/Aarjav_Mitkari_Resume_5.pdf"
                            width="100%"
                            height="650px"
                            title="Resume"
                            className="w-full"
                        ></iframe>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};