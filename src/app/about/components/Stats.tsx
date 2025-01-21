import React from "react";
import leakyPipelineInfo from "../../../../public/LeakyPipeline.png";
import Image from "next/image";

const Stats = () => {
  return (
    <div className="z-0">
      <div className="flex flex-col w-full justify-center items-center  ">
        <div className="bg-pink-50 border-primaryPink border-4 rounded-xl mx-4 md:mx-0 p-8 md:mb-10">
          <p className="text-2xl text-primaryPurple text-left">
            Ask Nina AI addresses the challenges of the leaky pipeline for women
            in STEM by:
          </p>
          <ol className="list-decimal mx-6 md:mx-16 text-lg space-y-4 flex-1 max-w-screen-md my-8 text-primaryPurple">
            <li>
              <span className="text-primaryPurple font-semibold">
                Providing information:
              </span>{" "}
              <span className="text-primaryPink">
                brain-expanding insights to STEM careers and success stories of
                real women in STEM to keep you inspired.{" "}
              </span>
            </li>
            <li>
              <span className="text-primaryPurple font-semibold">
                Offering guidance:{" "}
              </span>
              <span className="text-primaryPink">
                Ask Nina AI can answer your questions, provide advice on career
                paths, and suggest opportunities for further learning.{" "}
              </span>
            </li>
            <li>
              <span className="text-primaryPurple font-semibold">
                Build a community:{" "}
              </span>
              <span className="text-primaryPink">
                Ask Nina AI can connect you with like-minded individuals,
                mentors, and STEM professionals to create a supportive network.
              </span>
            </li>
          </ol>
        </div>
        <div className="mb-10 w-full max-w-screen-lg">
          <div className="text-left w-full md:mb-10 p-4 md:p-0">
            <div className="text-3xl text-primaryPurple pt-8 px-4 leading-10">
              Ask Nina AI by the numbers
            </div>
            <hr className="border-pink-100 my-4 border-2 rounded-md md:w-2/5" />
          </div>
          <div className="flex w-full justify-center items-center font-display p-4 md:p-0">
            <div className="flex flex-col md:flex-row w-full space-y-8 md:space-y-0">
              <div className="flex md:w-1/3 flex-col p-4">
                <p className="text-6xl">150+</p>
                <hr className="border-primaryPurple my-4 border-1 rounded-md md:w-4/5" />
                <div>Girls uplifted</div>
              </div>

              <div className="flex md:w-1/3 flex-col p-4">
                <p className="text-6xl">3000+ </p>
                <hr className="border-primaryPurple my-4 border-1 rounded-md md:w-4/5" />
                <div>Hours on platform</div>
              </div>

              <div className="flex md:w-1/3 flex-col p-4">
                <p className="text-6xl">44+</p>
                <hr className="border-primaryPurple my-4 border-1 rounded-md md:w-4/5" />
                <div>Countries reached</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
