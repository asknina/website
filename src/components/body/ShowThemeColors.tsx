"use client";
import React, { useState } from "react";

const ShowThemeColors = () => {
  const [showColors, setShowColors] = useState(false);
  return (
    <div
      className="hover:cursor-pointer min-h-10 "
      onClick={() => setShowColors(!showColors)}
    >
      {showColors && (
        <div>
          <div className="flex flex-row flex-wrap space-x-4 m-4">
            <div className="bg-pink-100 w-20 h-20">1</div>
            <div className="bg-pink-200 w-20 h-20">2</div>
            <div className="bg-orange-100 w-20 h-20">3</div>
            <div className="bg-orange-200 w-20 h-20">4</div>
            <div className="bg-orange-300 w-20 h-20">5</div>
            <div className="bg-orange-400 w-20 h-20">6</div>
            <div className="bg-midGreen w-20 h-20">7</div>
            <div className="bg-cerulean w-20 h-20">8</div>
            <div className="bg-bgPurple w-20 h-20">9</div>
            <div className="bg-yellowGreen w-20 h-20">10</div>
            <div className="bg-paleGreen w-20 h-20">11</div>
            <div className="bg-brightLightBlue w-20 h-20">12</div>
            <div className="bg-brightYellow w-20 h-20">13</div>
            <div className="bg-peach w-20 h-20">14</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowThemeColors;
