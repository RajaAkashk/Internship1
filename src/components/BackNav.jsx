import React from "react";
import Spoon from "../assets/spoon.png";

function BackNav() {
  return (
    <div
      className="w-full py-4 px-5"
      style={{ backgroundColor: "var(--custom-green)" }}
    >
      <button className="text-xl">
        <img src={Spoon} alt="Spoon icon" className="inline w-8 h-8 mb-1" />
        Back
      </button>
    </div>
  );
}

export default BackNav;
