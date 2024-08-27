import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Contact = () => {
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_xthwpuj', 'template_ftb2wkh', e.target, 'Oaz0moQj7_K31Dl28')
            .then((result) => {
                console.log(result.text);
                setStatus("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                setStatus("Failed to send message.");
            });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow bg-gray-900 text-white py-20">
                <h2 className="flex flex-row justify-center text-3xl font-bold">Contact Me</h2>
                <div className="flex flex-row justify-center">
                    <form onSubmit={sendEmail} className="mt-10 w-full max-w-md">
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg mb-4 bg-gray-800 border-none"
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-lg mb-4 bg-gray-800 border-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className="w-full p-3 rounded-lg mb-4 bg-gray-800 border-none"
                        />
                        <div className="flex flex-row justify-center">
                            <button type="submit" className="bg-blue-500 py-2 px-4 rounded-lg">Send Message</button>
                        </div>
                    </form>
                </div>
                {status && <p className="text-center mt-4">{status}</p>}
            </main>
            <Footer />
        </div>
    );
};
