import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import BodyNormal from "../assets/body.jpg";

function BodyStatus({ weight }) {
  let arrowTop;
  let image;

  if (weight >= 80) {
    arrowTop = "top-6"; // Overweight
    image =
      //   "https://thumbs.dreamstime.com/b/overweight-man-anatomy-18583289.jpg";
      "https://media.istockphoto.com/id/543836300/photo/overweight-human-anatomy-diabetes-heart-disease-3d-illustration.jpg?s=612x612&w=0&k=20&c=P-tYGVJYkKt49JVEHe06z6w_I7sTM8rIvJ-uhvLNP8E=";
  } else if (weight <= 40) {
    arrowTop = "top-[12rem]"; // Underweight
    image =
      "https://thumbs.dreamstime.com/b/human-anatomy-d-illustration-male-muscular-system-full-body-frontal-view-white-background-human-body-full-figure-male-muscular-158320955.jpg";
  } else {
    arrowTop = "top-[6.5rem]"; // Normal
    image = BodyNormal;
  }

  return (
    <div className="flex justify-center sm:flex-row items-center gap-6 md:gap-12 lg:gap-20 relative">
      {/* Status Bar */}
      <div className="flex items-center space-y-2 relative">
        {/* Labels */}
        <div className="flex flex-col items-end space-y-8 text-xs md:text-base font-medium text-gray-700">
          <span>Over Weight</span>
          <span>Good</span>
          <span>Good</span>
          <span>Under Weight</span>
        </div>

        {/* Gradient bar */}
        <div className="ml-2 w-2 h-59 bg-gradient-to-b from-red-500 via-green-400 to-yellow-400 rounded relative"></div>

        {/* Arrow */}
        <div className={`absolute -right-6 ${arrowTop}`}>
          <FaArrowLeft className="text-green-700 text-xl" />
        </div>
      </div>

      {/* Body Image */}
      <img
        src={image}
        alt="Body Type"
        className="h-72 md:h-96 object-contain"
      />
    </div>
  );
}

export default BodyStatus;
