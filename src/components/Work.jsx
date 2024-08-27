import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const works = [
    {
        title: "AI/ML Research Assistant",
        description: [
            "-> Collaborating with a professor on advanced AI/ML research, specializing in object tracking and computer vision.",
            "-> Developing algorithms with CNNs, transfer learning, data augmentation, and GANs for enhanced object detection and tracking.",
            "-> Conducting data analysis to improve system accuracy and capabilities."
        ]
    }
];

export const Work = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            <Navbar />
            <main className="flex-grow text-white py-20 px-10">
                <h2 className="text-3xl font-bold">Work Experience...</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    {works.map((work, index) => (
                        <div key={index} className="text-black bg-gray-300 p-5 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold">{work.title}</h3>
                            <div className="mt-2">
                                {work.description.map((line, i) => (
                                    <p key={i} className="mt-1">{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};
