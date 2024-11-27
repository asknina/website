import React from "react";
import leakyPipelineInfo from "../../../../public/LeakyPipeline.png";
import Image from "next/image";

const Stats = () => {
  return (
    <div className="h-[90vH] z-0">
      <div className="flex flex-col w-full justify-center items-center  ">
        <div className="bg-pink-50 border-primaryPink border-4 rounded-xl p-8 mb-10">
          <p className="text-2xl text-primaryPurple text-left">
            Ask Nina AI addresses the challenges of the leaky pipeline for women
            in STEM by:
          </p>
          <ol className="list-decimal mx-16 text-lg space-y-4 flex-1 max-w-screen-md my-8 text-primaryPurple">
            {/* <hr className="border-pink-100 my-4 border-4 rounded-md" /> */}

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
        <div className="h-[30vH] flex w-full justify-center items-center font-display">
          <div className="flex flex-row max-w-screen-lg w-full">
            <div className="flex w-1/3 flex-col p-4">
              <p className="text-5xl">150+</p>
              <hr className="border-pink-100 my-4 border-4 rounded-md" />
              <div>Girls uplifted</div>
            </div>

            <div className="flex w-1/3 flex-col p-4">
              <p className="text-5xl">3000+ </p>
              <hr className="border-pink-100 my-4 border-4 rounded-md" />
              <div>Hours on platform</div>
            </div>

            <div className="flex w-1/3 flex-col p-4">
              <p className="text-5xl">44+</p>
              <hr className="border-pink-100 my-4 border-4 rounded-md" />
              <div>Countries reached</div>
            </div>
          </div>
        </div>
        <div className="h-[60vH] flex flex-row w-full items-center justify-center max-w-screen-lg">
          <div className="w-1/2">
            {" "}
            {/* <Image src={leakyPipelineInfo} alt="Leaky Pipeline Infographic" /> */}
          </div>

          {/* <div className="flex w-1/2 flex-col p-4">
            <p className="text-2xl mb-4 text-primaryPurple">
              Nearly 50% of women in STEM drop out within 10 years
            </p>
            <div>
              This is known as{" "}
              <span className="text-primaryPurple">
                The leaky pipeline: the decline in the percentage of women as
                you move up the ranks in STEM fields. The number of women
                pursuing STEM decreases at each stage from education to the
                workforce, starting as early as middle school.
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Stats;
