import React from "react";
import Layout from "../components/Layout"; // ✅ default import
import mockup from "../assets/kapporet-mockup.png";
import screen1 from "../assets/kapporet1.png";
import screen2 from "../assets/kapporet2.png";
import screen3 from "../assets/kapporet3.png";
import screen4 from "../assets/kapporet4.png";
import screen5 from "../assets/kapporet6.png";
import screen6 from "../assets/kapporet5.png";
import screen7 from "../assets/kapporet7.png";

const Kapporet = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white text-black px-8 py-16 lg:px-20 font-sans">
        {/* Mockup Image */}
        <div className="flex justify-center mb-12">
          <img
            src={mockup}
            alt="Kapporet Project Mockup"
            className="max-w-full w-[800px] rounded-xl shadow-lg"
          />
        </div>

        {/* Project Description */}
        <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-800 text-center mb-16">
          <p>
            Kapporet is an e-learning app I designed — and my very first UI/UX design project!
            This opportunity helped me understand the fundamentals of user-centered design,
            wireframing, feedback cycles, and visual consistency. I learned how to break
            down complex features into clean, intuitive flows and deliver a functional,
            scalable learning experience.
          </p>
        </div>

        {/* Screens Section */}
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold text-center mb-8">UI Screens</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[screen1, screen2, screen3, screen4, screen5, screen6, screen7].map(
              (img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={img}
                    alt={`Kapporet Screenshot ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Kapporet;
