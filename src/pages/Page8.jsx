import React from "react";
import Image from "../assets/image 5.png";
import BackNav from "../components/BackNav";

function Page8() {
  const meals = ["Breakfast", "Snacks", "Lunch", "Snacks", "Dinner"];

  return (
    <div>
      {/* Header */}
      <BackNav />

      {/* Body */}
      <div className="flex justify-center items-center mt-12">
        <div className="p-4 w-full max-w-md">
          {/* Table */}
          <div className="space-y-4">
            {meals.map((meal, index) => (
              <div key={index} className="flex items-center gap-4">
                {/* Meal Name */}
                <div className="w-24 text-right">
                  <span>{meal.split(" ")[0]}</span>
                  {meal.includes(" ") && (
                    <span className="ml-1">{meal.split(" ")[1]}</span>
                  )}
                </div>

                {/* Colon */}
                <span className="font-semibold">:</span>

                {/* Nutrient Blocks */}
                <div className="flex items-center gap-2">
                  {["grm", "cal", "pro"].map((unit, i) => (
                    <span
                      key={i}
                      style={{ backgroundColor: "var(--custom-green)" }}
                      className="px-3 py-1 rounded"
                    >
                      {unit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Image + Button */}
          <div className="flex flex-col items-center mt-8 space-y-4">
            <img src={Image} alt="Nutrition Chart" className="w-32 h-auto" />
            <button
              className="px-4 py-2 rounded"
              style={{ backgroundColor: "var(--custom-green)" }}
            >
              Ready
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page8;
