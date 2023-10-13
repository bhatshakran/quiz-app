import { useState } from "react";
import { Progress } from "./Progress";

export const Header = () => {
  const [timeLeft] = useState("08");
  return (
    <div className="relative">
      <div className="flex justify-between items-center font-poppins py-2 px-6 shadow-md">
        <div>
          <p className="font-semibold text-lg">Awesome Quiz Application</p>
        </div>
        <div className="rounded-sm text-sm">
          <button className="bg-[#cbe1f8] flex items-center text-[#3b7abd] px-2 py-1.5 gap-x-2 rounded-sm">
            <p className="font-medium">Time Left</p>
            <span className="bg-[#353B40] py-1 px-4 text-white rounded-[4px] text-[15px]">
              {timeLeft}
            </span>
          </button>
        </div>
      </div>
        <Progress />
    </div>
  );
};
