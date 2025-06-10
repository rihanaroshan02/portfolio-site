import React from "react";
import Layout from "../components/Layout";
import aboutImage from "../assets/About.jpg";

const About = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left Column: Background Image aligned with px-8 */}
        <div className="px-8 lg:px-20">
          <div
            className="h-full w-full bg-cover bg-center rounded-md"
            style={{
              backgroundImage: `url(${aboutImage})`,
              aspectRatio: "3/4", // optional for image ratio control
            }}
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center px-8 py-12 bg-white text-black">
          <h1 className="text-6xl font-extrabold mb-6">Hello!</h1>
          <p className="text-lg mb-6 max-w-xl">
            I’m <span className="font-semibold">Rihana Roshan</span>, a UI Designer and Developer
            based in India. I'm passionate about creating clean, engaging, and accessible digital
            experiences that combine design precision with code.
          </p>
          <div className="space-y-2 text-lg">
            <a
              href="https://www.instagram.com/rihanaroshan__/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline block"
            >
              Instagram
            </a>
            <a
              href="https://open.spotify.com/user/iuiedl0jl9qmrqdcrne2myymj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline block"
            >
              Spotify
            </a>
            <a
              href="https://www.linkedin.com/in/rihana-roshan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline block"
            >
              LinkedIn
            </a>
            <p className="text-lg font-semibold text-black hover:text-gray-500 transition-colors duration-200 w-fit border-b-2 border-transparent hover:border-orange-500 pt-2">
  <a href="mailto:rihana.karoshan@gmail.com">rihana.karoshan@gmail.com</a>
</p>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
