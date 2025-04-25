import React from "react";
import BackNav from "../components/BackNav";

function Page8() {
  const mealData = {
    Breakfast: {
      img: "Oats & Berries",
      food: "Oats & Berries",
      grams: 200,
      cal: 350,
      pro: 15,
    },
    "Snack 1": {
      img: "Mixed Nuts",
      food: "Mixed Nuts",
      grams: 50,
      cal: 280,
      pro: 6,
    },
    Lunch: {
      img: "Grilled Chicken Salad",
      food: "Grilled Chicken Salad",
      grams: 300,
      cal: 420,
      pro: 35,
    },
    "Snack 2": {
      img: "Fruit Bowl",
      food: "Fruit Bowl",
      grams: 150,
      cal: 120,
      pro: 2,
    },
    Dinner: {
      img: "Paneer Rice Bowl",
      food: "Paneer Rice Bowl",
      grams: 350,
      cal: 500,
      pro: 25,
    },
    "Snack 3": {
      img: "Protein Shake",
      food: "Protein Shake",
      grams: 250,
      cal: 200,
      pro: 20,
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BackNav />

      <div className="flex flex-wrap justify-center items-start py-9 px-4">
        <div className="w-full bg-white p-6 rounded-2xl shadow-md space-y-6">
          <h1
            className="text-center text-3xl py-1 font-bold"
            style={{ color: "var(--custom-green)" }}
          >
            Meals Info
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.keys(mealData).map((meal, index) => {
              const data = mealData[meal];
              return (
                <div
                  key={index}
                  className="border rounded-xl shadow p-4 bg-white"
                >
                  <h3 className="text-lg font-semibold mb-2">{meal}</h3>

                  <img
                    src={`https://placehold.co/600x400?text=${data.img}&font=roboto&size=20`}
                    alt={data.food}
                    className="h-32 w-full object-cover rounded"
                  />

                  <p className="mt-2 font-medium">{data.food}</p>

                  <div className="flex flex-wrap gap-3 mt-4">
                    {[
                      { label: "grm", value: data.grams },
                      { label: "cal", value: data.cal },
                      { label: "pro", value: data.pro },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <input
                          type="text"
                          defaultValue={item.value}
                          className="w-16 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                        />
                        <span
                          className="px-2 py-1 text-xs rounded text-white"
                          style={{ backgroundColor: "var(--custom-green)" }}
                        >
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

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
