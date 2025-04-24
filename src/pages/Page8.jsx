import React from "react";
import BackNav from "../components/BackNav";

function Page8() {
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

      {/* Body */}
      <div className="flex justify-center items-start py-9 px-4">
        <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-md space-y-6">
        <h1 className="text-center text-3xl py-1 font-bold"  style={{ color: "var(--custom-green)" }}>Meals Info</h1>
          {/* Table */}
          <div className="space-y-5">
            {meals.map((meal, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                {/* Meal Name */}
                <div className="min-w-[100px] text-gray-700 font-medium text-base">
                  {meal}
                </div>

                {/* Nutrient Inputs */}
                <div className="flex flex-wrap gap-3">
                  {["grm", "cal", "pro"].map((unit, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <input
                        type="text"
                        placeholder="0"
                        className="w-16 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                      />
                      <span
                        className="px-2 py-1 text-xs rounded text-white"
                        style={{ backgroundColor: "var(--custom-green)" }}
                      >
                        {unit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Nutrition Image + Button */}
          <div className="flex flex-col items-center pt-6 space-y-4">
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWdscGg0aWRvZGxtMHdpZzZvb2pwbzN0cmNxeGZncnZydGZnMzV1biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jRt66GCICGDCvqBnE6/giphy.gif"
              alt="Nutrition Chart"
              className="w-36 h-auto rounded"
            />
            <button
              className="px-6 py-2 text-base font-medium rounded-full hover:opacity-90 transition"
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
