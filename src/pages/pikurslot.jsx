import React from "react";
import Layout from "../components/Layout"; // ✅ default import
import mockup from "../assets/pikurslot-mockup.png";
import screen1 from "../assets/pikurslot1.png";
import screen2 from "../assets/pikurslot2.png";
import screen3 from "../assets/pikurslot3.png";
import screen4 from "../assets/pikurslot4.png";

const Pikurslot = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white text-black px-8 py-16 lg:px-20 font-sans">
        {/* Mockup Image */}
        <div className="flex justify-center mb-12">
          <img
            src={mockup}
            alt="Pikurslot Project Mockup"
            className="max-w-full w-[800px] rounded-xl shadow-lg"
          />
        </div>

        {/* Project Description */}
        <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-800 text-center mb-16">
          <p>
            Pikurslot is a web app designed to simplify and streamline the process of booking conference rooms in an office environment.
            I focused on creating an intuitive user experience for both employees and admins — making slot visibility, availability checks,
            and scheduling actions clean and efficient across all screen sizes.
          </p>
        </div>

        {/* Screens Section */}
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold text-center mb-8">UI Screens</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {[screen1, screen2, screen3, screen4].map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={img}
                  alt={`Pikurslot Screenshot ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pikurslot;
