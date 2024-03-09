"use client";
import React, { useState } from "react";

const ChooseHumanType = () => {
  const [type, setType] = useState();

  const handleOptionChange = (e: any) => {
    setType(e.target.value);
  };
  return (
    <form>
      <div className="ml-2 flex flex-col items-start">
        <div className="inline-flex">
          <label className="inline-flex items-center space-x-1">
            <input
              type="radio"
              value="adult"
              checked={type == "adult"}
              onClick={handleOptionChange}
            />
            <span
              className={`rounded-full h-4 w-4 border-4 border-primaryPurple hover:cursor-pointer ${
                type == "adult" ? "bg-primaryPink" : "bg-primaryPurple"
              }`}
            />
            <span className="hover:cursor-pointer">Adult</span>
          </label>
        </div>
        <div className="inline-flex">
          <label className="inline-flex items-center space-x-1">
            <input
              type="radio"
              value="student"
              checked={type == "student"}
              onClick={handleOptionChange}
            />
            <span
              className={`rounded-full h-4 w-4 border-4 border-primaryPurple hover:cursor-pointer ${
                type == "student" ? "bg-primaryPink" : "bg-primaryPurple"
              }`}
            />
            <span className="hover:cursor-pointer">Student</span>
          </label>
        </div>
      </div>
    </form>
  );
};

export default ChooseHumanType;
