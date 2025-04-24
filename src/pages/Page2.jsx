import React from "react";
import Spoon from "../assets/spoon.png";
import { useState } from "react";
import {
  FaCalculator,
  FaHeartbeat,
  FaDumbbell,
  FaBoxOpen,
} from "react-icons/fa";

function Page2() {
  const [showOverlay, setShowOverlay] = useState(false);

  const buttons = [
    { label: "Calculate Calories", icon: <FaCalculator className="mr-2" /> },
    { label: "Check how fit you are", icon: <FaHeartbeat className="mr-2" /> },
    { label: "Daily Workout", icon: <FaDumbbell className="mr-2" /> },
    { label: "Our products", icon: <FaBoxOpen className="mr-2" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <div
        className="flex items-center justify-end  py-3 px-4"
        style={{ backgroundColor: "var(--custom-green)" }}
      >
        {/* <img
          className="h-7 w-7 mr-2"
          src="https://static.vecteezy.com/system/resources/thumbnails/030/692/151/small/salad-2d-cartoon-vector-illustration-on-white-background-h-free-photo.jpg"
          alt="salad"
        /> */}
        <button className="flex" onClick={() => setShowOverlay(true)}>
          <img src={Spoon} alt="Spoon icon" className="inline w-7 h-7" />
          <p className="font-semibold">Settings</p>
        </button>
      </div>

      {showOverlay && (
        <div className="fixed top-0 right-0 w-64 h-full bg-gray-50 shadow-lg z-50 p-4 transition-all">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Settings</h2>
            <button onClick={() => setShowOverlay(false)}>✖</button>
          </div>
          {/* Your settings content goes here */}
          <p>Settings content here...</p>
        </div>
      )}

      {/* Body */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 px-2">
        <div className="border-2 border-green-300 rounded-md p-6 w-full max-w-md bg-white shadow">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name:</label>
              <input
                type="text"
                className="mt-1 block w-full border border-green-300 rounded px-2 py-1"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Age:</label>
              <input
                type="number"
                className="mt-1 block w-full border border-green-300 rounded px-2 py-1"
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
                className="mt-1 block w-full border border-green-300 rounded px-2 py-1"
                placeholder="Enter your height"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Weight (kg):</label>
              <input
                type="number"
                className="mt-1 block w-full border border-green-300 rounded px-2 py-1"
                placeholder="Enter your weight"
              />
            </div>

            {/* Buttons */}
            <div className="mt-6">
              <div className="flex flex-wrap justify-center gap-2">
                {buttons.map((btn, index) => (
                  <button
                    key={index}
                    className="px-4 py-1 w-full flex items-center justify-center font-medium rounded hover:text-xl"
                    style={{ backgroundColor: "var(--custom-green)" }}
                  >
                    {btn.icon}
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page2;
