import React from "react"
import { useNavigate } from "react-router-dom"
import { Projects } from "./Projects";
import { Navbar } from "./Navbar";
import { About } from "./About";
import { Resume } from "./Resume";
import { Image } from "./Image";
import { Footer } from "./Footer";

export const Home = () => {
  const nav = useNavigate();

  return <div className="bg-gray-900 text-white min-h-screen flex flex-col">
    <Navbar />
    <div className="flex-grow py-12 flex flex-col justify-center items-center"><h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-2xl mt-4">
        <div className="flex flex-row justify-center italic">
          Where Creativity Meets Code <br />
        </div>
        Explore the journey of a passionate Web Developer & Designer dedicated to crafting innovative digital solutions.</p>
      <Image />
      <div className="flex flex-row space-x-40">
        <button onClick={() => {
          nav("/Work");
        }} className="mt-8 bg-blue-500 text-white py-2 px-4 rounded-lg">View My Work Experience</button>
        <button onClick={() => {
          nav("/Projects");
        }} className="mt-8 bg-blue-500 text-white py-2 px-4 rounded-lg">View My Projects</button>
        <button onClick={() => {
          nav("/Resume");
        }} className="mt-8 bg-blue-500 text-white py-2 px-4 rounded-lg">View My Resume</button>
      </div>
    </div>
    {/* <About /> */}
    <Footer />
  </div>

} 