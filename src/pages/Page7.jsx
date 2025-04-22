import React from "react";
import Cooker from "../assets/image 4.png";
import Spoon from "../assets/spoon.png";

function Page7() {
  const meals = ["Break fast", "Snacks", "Lunch", "Snacks", "Dinner"];
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
      <div className="min-h-screen flex flex-col items-center justify-start pt-8 space-y-6">
        {/* Title Bar */}
        <div
          className="flex items-center justify-center gap-3 px-6 py-2 rounded"
          style={{ backgroundColor: "var(--custom-green)" }}
        >
          <h1 className="text-lg font-semibold">Customize Your Diet</h1>
          {/* <img src={sandwichIcon} alt="sandwich" className="w-6 h-6" /> */}
        </div>

        {/* Meals List */}
        <div className="space-y-4">
          {meals.map((meal, index) => (
            <div key={index} className="text-lg flex items-center gap-2">
              <span>{meal}</span>
              <span className="font-semibold">:</span>
            </div>
          ))}
        </div>
        {/* Cooking Image */}
        <img src={Cooker} alt="Cooking Pot" className="w-24 h-auto mt-4" />
        {/* Cook Button */}
        <button
          className="flex items-center gap-2 px-4 py-2 rounded text-lg"
          style={{ backgroundColor: "var(--custom-green)" }}
        >
          Cook
          <img src={Spoon} alt="cook" className="w-9 h-9" />
        </button>
      </div>
    </div>
  );
}

export default Page7;
