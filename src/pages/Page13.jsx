import React from "react";
import Carrot from "../assets/carrot.png";
import BackNav from "../components/BackNav";

function Page13() {
  return (
    <div>
      <BackNav />
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Q&A With The Developers
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Have questions? We’ve got answers!
        </p>

        <div className="flex flex-col items-center md:flex-row gap-8">
          <img
            src={Carrot}
            alt="Strong Carrot Mascot"
            className="w-40 md:w-48"
          />
          <button
            className="hover:text-white hover:py-2 text-black font-semibold text-lg px-8 py-3 rounded-lg shadow-md transition"
            style={{ backgroundColor: "var(--custom-green)" }}
          >
            Ask Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page13;
