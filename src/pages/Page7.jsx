import React from "react";
import Spoon from "../assets/spoon.png";
import BackNav from "../components/BackNav";

function Page7() {
  const meals = [
    "Breakfast",
    "Morning Snack",
    "Lunch",
    "Evening Snack",
    "Dinner",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <BackNav />

      {/* Main Content */}
      <div className="flex flex-col items-center px-4 py-6 sm:py-10">
        <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md space-y-6">
          {/* Title */}
          <div
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl  text-xl font-semibold"
            style={{ backgroundColor: "var(--custom-green)" }}
          >
            Customize Your Diet
          </div>

          {/* Meals List */}
          <div className="space-y-4">
            {meals.map((meal, index) => (
              <div key={index} className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-700">
                  {meal}:
                </label>
                <input
                  type="text"
                  className="ml-2 flex-1 border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
                  placeholder={`Enter ${meal}`}
                />
              </div>
            ))}
          </div>

          {/* Cooking Pot Animation */}
          <div className="flex justify-center">
            <img
              src="https://media.giphy.com/media/3ohhwerD13QMADpFlu/giphy.gif"
              alt="Cooking Pot Animation"
              className="w-40 h-auto rounded"
            />
          </div>

          {/* Cook Button */}
          <div className="flex justify-center">
            <button
              className="flex items-center gap-2 px-5 py-2 mt-0  text-lg font-medium rounded-full hover:opacity-90 transition"
              style={{ backgroundColor: "var(--custom-green)" }}
            >
              Cook
              <img src={Spoon} alt="cook" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page7;
