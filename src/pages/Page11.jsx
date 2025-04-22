import React from "react";
import {
  FaRegClock, // Timer
  FaYoutube, // YouTube
  FaInstagram, // Instagram
  FaEnvelope, // Email
  FaHandsHelping, // Help
  FaInfoCircle, // Info
} from "react-icons/fa";

function Page11() {
  const buttons = [
    { label: "Schedule", icon: <FaRegClock /> },
    { label: "Query Section", icon: <FaInfoCircle /> },
    { label: "You Tube Channel", icon: <FaYoutube /> },
    { label: "Insta Page", icon: <FaInstagram /> },
    { label: "Mail Id", icon: <FaEnvelope /> },
    { label: "Help The Need", icon: <FaHandsHelping /> },
    { label: "Join Your hands to feed the poor", icon: <FaHandsHelping /> },
  ];
  return (
    <div>
      {/* Header */}
      <div
        className="w-full py-4 px-5 mb-10"
        style={{ backgroundColor: "var(--custom-green)" }}
      >
        <button className="text-xl">Back</button>
      </div>
      {/* body  */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 mt-6 w-full max-w-xs">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-2  rounded hover:opacity-90"
              style={{ backgroundColor: "var(--custom-green)" }}
            >
              <span className="text-lg">{btn.icon}</span>
              <span>{btn.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page11;
