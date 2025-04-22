import React from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdVibration } from "react-icons/md";
import { IoAlarmOutline, IoNotificationsOutline } from "react-icons/io5";

function Page12() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div
        className="w-full py-4 px-5"
        style={{ backgroundColor: "var(--custom-green)" }}
      >
        <button className="text-xl ">Back</button>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md p-4 sm:p-6 rounded-lg shadow-md bg-white">
          <div className="flex flex-col md:flex-row md:justify-between items-start gap-6">
            {/* Left Section */}
            <div className="flex flex-col gap-4 items-start w-full md:w-1/2">
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">Schedule</p>
                <AiOutlineSchedule className="text-xl text-gray-700" />
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: "var(--custom-green)" }}
                ></div>
                <span className="text-sm font-medium">Time</span>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-5 items-start w-full md:w-1/2">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pinimg.com/736x/c6/ee/2c/c6ee2c729a1a345bdc1a8a1f9a067b79.jpg"
                  alt="Water Bottle"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <ToggleSwitch />
              </div>

              <div className="flex flex-col gap-3 w-full">
                <label className="flex items-center gap-2">
                  <input type="radio" id="Vibrate" name="notification" />
                  <MdVibration className="text-lg" />
                  Vibrate
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" id="Alarm" name="notification" />
                  <IoAlarmOutline className="text-lg" />
                  Alarm
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" id="Notification" name="notification" />
                  <IoNotificationsOutline className="text-lg" />
                  Notification
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page12;
