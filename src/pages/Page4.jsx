import { useState } from "react";

const meals = ["Breakfast", "Snacks", "Lunch", "Dinner"];

const mealData = {
  Breakfast: {
    diet: {
      food: "Oats & Banana",
      img: "https://placehold.co/600x400?text=Oats+%26+Banana",
      grams: 150,
      cal: 300,
      pro: 12,
      cost: 40,
    },
  },
  Snacks: {
    diet: {
      food: "Greek Yogurt",
      img: "https://placehold.co/600x400?text=Greek+Yogurt",
      grams: 100,
      cal: 90,
      pro: 10,
      cost: 20,
    },
  },
  Lunch: {
    diet: {
      food: "Grilled Chicken & Brown Rice",
      img: "https://placehold.co/600x400?text=Grilled+Chicken",
      grams: 250,
      cal: 500,
      pro: 35,
      cost: 40,
    },
  },
  Dinner: {
    diet: {
      food: "Salad & Soup",
      img: "https://placehold.co/600x400?text=Salad+%26+Soup",
      grams: 200,
      cal: 220,
      pro: 15,
      cost: 30,
    },
  },
};

export default function Page4() {
  const [planType, setPlanType] = useState("diet");

  const [selectedDay, setSelectedDay] = useState("");

  const handleChange = (event) => {
    setSelectedDay(event.target.value);
  };
  return (
    <>
      {/* Header */}
      <div
        className="w-full py-4 px-5 mb-10"
        style={{ backgroundColor: "var(--custom-green)" }}
      >
        <button className="text-xl">Back</button>
      </div>

      {/* Body */}
      <div className="p-4 max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-6">
          <p className="text-2xl font-bold">
            Maintain weight{" "}
            <small className="block text-sm font-normal text-gray-500">
              (Note: This is for a week)
            </small>
          </p>

          <div className="flex flex-row gap-4  items-center mt-1">
            <label htmlFor="Veg" className="flex items-center gap-2">
              <input type="radio" id="Veg" name="mealType" />
              Veg
            </label>

            <label htmlFor="nonVeg" className="flex items-center gap-2">
              <input type="radio" id="nonVeg" name="mealType" />
              Non-Veg
            </label>
          </div>
        </div>

        {/* Plan Type Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
          <div className="mb-6">
            <button
              onClick={() => setPlanType("diet")}
              className={`px-4 py-2 rounded-l ${
                planType === "diet" ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              Diet Plan
            </button>
            <button
              onClick={() => setPlanType("budget")}
              className={`px-4 py-2 rounded-r ${
                planType === "budget"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Budget Plan (₹)
            </button>
          </div>

          <div>
            <label htmlFor="day-select">Select a Day: </label>
            <select
              className="border-1 rounded text-center"
              id="day-select"
              value={selectedDay}
              onChange={handleChange}
            >
              <option value="">Day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>

            {/* <p>Selected Day: {selectedDay}</p> */}
          </div>
        </div>
        {/* Meals */}
        <div className="grid gap-6 sm:grid-cols-2">
          {meals.map((meal) => {
            const data = mealData[meal].diet;

            return (
              <div key={meal} className="border rounded-xl shadow p-4 bg-white">
                <h3 className="text-lg font-semibold mb-2">{meal}</h3>
                <img
                  src={data.img}
                  alt={data.food}
                  className="h-32 w-full object-cover rounded"
                />
                <p className="mt-2 font-medium">{data.food}</p>

                {/* Show different info based on planType */}
                {planType === "diet" ? (
                  <div className="text-sm mt-2 text-gray-600 space-y-1">
                    <p>
                      <span className="font-semibold">Weight:</span>{" "}
                      {data.grams} g
                    </p>
                    <p>
                      <span className="font-semibold">Calories:</span>{" "}
                      {data.cal} cal
                    </p>
                    <p>
                      <span className="font-semibold">Protein:</span> {data.pro}{" "}
                      g
                    </p>
                  </div>
                ) : (
                  <p className="mt-2 text-sm text-gray-700">
                    <span className="font-semibold">Cost:</span> ₹{data.cost}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
