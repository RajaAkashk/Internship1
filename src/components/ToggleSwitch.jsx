import { useState } from "react";

export default function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <label className="flex items-center relative w-max cursor-pointer select-none">
      {/* <span className="text-lg font-bold mr-3">Toggle</span> */}
      <input
        type="checkbox"
        className={`appearance-none transition-colors cursor-pointer w-13 h-5 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 ${
          enabled ? "bg-green-500" : "bg-gray-400"
        }`}
        checked={enabled}
        onChange={() => setEnabled(!enabled)}
      />
      <span className="absolute font-medium text-xs uppercase right-2 text-white">
        {enabled ? "" : "OFF"}
      </span>
      <span className="absolute font-medium text-xs uppercase right-8 text-white">
        {enabled ? "ON" : ""}
      </span>
      <span
        className={`w-5 h-5 right-8 absolute rounded-full transform transition-transform bg-gray-200 ${
          enabled ? "translate-x-7" : ""
        }`}
      />
    </label>
  );
}
