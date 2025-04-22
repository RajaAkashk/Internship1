import React from "react";
import Spoon from "../assets/spoon.png";

function Page3() {
  return (
    <div>
      {/* Header */}
      <div
        className="w-full py-4 px-5"
        style={{ backgroundColor: "var(--custom-green)" }}
      >
        <button className="text-xl">Back</button>
      </div>

      {/* Body */}
      <div className="px-4 py-6">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex justify-center">
            <img
              className="h-28 md:h-36 object-contain"
              src="https://static.vecteezy.com/system/resources/previews/054/049/479/non_2x/cooking-rice-with-a-electric-cooker-illustration-in-cartoon-style-vector.jpg"
              alt="diet"
            />
          </div>

          <p
            className="py-2 px-4 rounded-2xl text-xl font-bold text-center w-full"
            style={{ backgroundColor: "var(--custom-green)" }}
          >
            Your diet is being prepared
          </p>

          <div className="flex justify-center">
            <img
              className="h-28 md:h-36 object-contain"
              src="https://img.freepik.com/premium-vector/cute-tomato-chef-cartoon-mascot-logo-tomato-sauce-logo_513640-3244.jpg"
              alt="diet"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-3  p-2 md:gap-6 md:p-6 bg-white shadow rounded-lg border border-green-300">
            {/* Goal Titles */}
            <div className="space-y-5 text-center">
              <p className="font-semibold text-lg">Weight Loss</p>
              <p className="font-semibold text-lg">Gain Weight</p>
              <p className="font-semibold text-lg">Maintain Weight</p>
            </div>

            {/* Calories */}
            <div className="space-y-3 mt-2 text-center">
              <p className="flex justify-between">
                <span className="text-gray-500">-</span>{" "}
                <span className="rounded p-1 bg-green-300 font-medium">
                  x Calories
                </span>{" "}
                <span className="text-gray-500">-</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-500">-</span>{" "}
                <span className="rounded p-1 bg-green-300 font-medium">
                  x Calories
                </span>{" "}
                <span className="text-gray-500">-</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-500">-</span>{" "}
                <span className="rounded p-1 bg-green-300 font-medium">
                  x Calories
                </span>{" "}
                <span className="text-gray-500">-</span>
              </p>
            </div>

            <div className="space-y-1 mt-1 text-center">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-center gap-2">
                  <span className="rounded p-1 bg-green-300 font-medium">
                    Diet
                  </span>
                  <img
                    className="h-10 w-10 object-contain"
                    src={Spoon}
                    alt="diet"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button
            className="py-2 px-6 rounded-2xl text-xl font-bold w-full md:w-1/2 text-center"
            style={{ backgroundColor: "var(--custom-green)" }}
          >
            Customize your diet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page3;
