import React from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export const Resume = () => {
    return <div>
        <Navbar />
        <div className="bg-gray-900 flex flex-col h-screen">
        <div className="container mx-auto mt-0">
            <h1 className="text-white text-5xl flex flex-row justify-center font-bold py-8">Resume</h1>
            <div className="border border-gray-300 shadow-lg">
                <iframe
                    src="/Aarjav_Mitkari_Resume_5.pdf"
                    width="100%"
                    height="650px"
                    title="Resume"
                ></iframe>
            </div>
        </div>
        <Footer />
    </div>
    </div>
}