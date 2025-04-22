import React from "react";

function Page2() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <div
        className="flex flex-col items-end gap-1 py-3 px-4"
        style={{ backgroundColor: "var(--custom-green)" }}
      >
        <img
          className="h-7 w-7 mr-2"
          src="https://static.vecteezy.com/system/resources/thumbnails/030/692/151/small/salad-2d-cartoon-vector-illustration-on-white-background-h-free-photo.jpg"
          alt="salad"
        />
        <p className="text-sm">Settings</p>
      </div>

      {/* Body */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 px-2">
        <div className="border-2 border-green-300 rounded-md p-6 w-full max-w-md bg-white shadow">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name:</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded px-2 py-1"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Age:</label>
              <input
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded px-2 py-1"
                placeholder="Enter your age"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Gender:</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" value="male" />
                  Male
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" value="female" />
                  Female
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" value="other" />
                  Other
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Height (cm):</label>
              <input
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded px-2 py-1"
                placeholder="Enter your height"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Weight (kg):</label>
              <input
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded px-2 py-1"
                placeholder="Enter your weight"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap mt-6 gap-2">
              <button className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                Calculate Calories
              </button>
              <button className="px-4 py-1 bg-gray-200 rounded hover:bg-gray-300">
                Check how fit you are
              </button>
              <button className="px-4 py-1 bg-amber-500 text-white rounded hover:bg-amber-600">
                Daily Workout
              </button>
              <button className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                Our products
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page2;
