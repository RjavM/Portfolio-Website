import React from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

const projects = [{
    title: "Digital Wallet Web Application",
    description: ["-> Developed a full-stack digital wallet web application featuring user authentication with Zod and JSON Web Token (JWT) and real-time transaction processing.",
        "-> Implemented a user dashboard enabling search and transaction functionalities, allowing users to transfer money between accounts with real-time balance updates",
        "-> Implemented robust backend logic to ensure secure and accurate financial transactions between user accounts."
    ],
    link: "https://github.com/RjavM/Payment-App"
},
{
    title: "Stock Prediction Using Machine Learning",
    description: ["-> Built a predictive model using historical S&P 500 data from Yahoo Finance, leveraging both Random Forest and XGBoost classifiers to forecast stock movements.",
         "-> Engineered advanced features such as rolling averages and trend indicators to enhance model accuracy and performance.",
         "-> Executed comprehensive backtesting, evaluating model precision and adjusting hyperparameters to optimize prediction results over various time horizons."],
    link: "https://github.com/RjavM/Stock-Prediction"
},
{
    title: "Food Menu Web-App",
    description: ["-> Developed a seamless food menu web app using Python and Django, which enabled efficient handling of various functionalities in a structured manner by implementing class-based views and defining URL patterns.",
         "-> Implemented CRUD operations for menu items integrated with user authentication, which ensured secure user access and efficient data management through profile creation by Django signals and streamlined data input processes.",
         "-> Designed and managed the database schema using Django models, which ensured data integrity and relationship mapping for robust information storage through the use of migrations.",
        "-> Crafted user-friendly, consistent and engaging templates with dynamic content, which optimized site design and interactivity by integrating static files"],
    link: "https://github.com/RjavM/Food-Menu-Web-App"
},
{
    title: "Text Based Social Platform",
    description: ["-> Designed a command-line application in C to enhance the efficiency of user registration and management which optimized the storage and retrieval of user data by implementing ordered linked lists.", 
        "-> Implemented secure profile authentication and a dynamic system for user profiles and posts which contributed to improving user experience by employing dynamic data structures.",
        "-> Prevented duplicate friend entries and established connections between friend data which prevented redundant friend entries and facilitated meaningful connections through a user search feature and linking users to their friends’ posts.",
        "-> Demonstrated attention to detail which ensured consistent data handling by implementing a username conversion process."],
    link: ""
}
]

export const Projects = () => {
    return <div>
        <Navbar />
        <div className="bg-gray-900 flex flex-col h-screen">
            <div id="projects" className="text-black py-20 px-10">
                <h2 className="text-white text-3xl font-bold">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-300 p-5 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <div className="mt-2">{project.description.map((line, i) => (
                                <p key={i} className="mt-1">{line}</p>
                            ))}</div>
                            <a href={project.link} className="text-blue-500 mt-4 inline-block hover:font-bold underline">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />        
        </div>
    </div>
} 