import React from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import BackNav from "../components/BackNav";
import BodyStatus from "../components/BodyStatus";

function Page9() {
  return (
    <div>
      <BackNav />
      <div className="min-h-screen overflow-x-hidden">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl md:py-4 font-bold my-6 text-center">
          {/* Check How Fit You Are */}
          Body Mass Index
        </h1>

        {/* Main content */}
        <div className="px-4 px-sm-0">
          {/* Status Bar and Notes Section */}
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 lg:gap-50">
            {/* left side  */}

            <BodyStatus weight={130} />

            {/* Notes */}
            <div className="mt-8 md:mt-0 w-full max-w-md bg-white shadow-lg rounded-lg p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold mb-4">Notes:</h2>
              <ul className="space-y-4 text-sm md:text-base">
                <li>
                  1. Intake of water must be
                  <span
                    className="inline-block mx-2  px-2 py-1 rounded"
                    style={{ backgroundColor: "var(--custom-green)" }}
                  >
                    ___
                  </span>
                  liter.
                </li>
                <li>
                  2. Proteins maintenance
                  <span
                    className="inline-block mx-2  px-2 py-1 rounded"
                    style={{ backgroundColor: "var(--custom-green)" }}
                  >
                    ___
                  </span>
                  gram.
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="https://i.pinimg.com/736x/c6/ee/2c/c6ee2c729a1a345bdc1a8a1f9a067b79.jpg"
                    alt="Water Bottle"
                    className="w-7 h-7"
                  />
                  Reminder
                  <ToggleSwitch />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page9;
