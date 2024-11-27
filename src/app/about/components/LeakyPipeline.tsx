import React from "react";
import leakyPipelineInfo from "../../../../public/LeakyPipelineInfo.png";
import Image from "next/image";
import AnamitaImage from "../../../../public/WorkingFieldPhoto1.jpeg";

const LeakyPipeline = () => {
  return (
    <div className=" flex flex-col  z-10">
      <div className="h-[32vH] font-display flex items-center justify-center text-5xl bg-gradient-to-r from-primaryPurple to-primaryPink ">
        <div className="max-w-screen-lg text-white">
          We&apos;re on a mission to inspire teen girls to explore STEM careers
        </div>
      </div>
      <div className="flex justify-center items-center flex-1">
        <div className="flex flex-col  bg-white flex-1 max-w-screen-lg ">
          <p className="text-3xl text-primaryPurple pt-8 pb-2">
            Nearly 50% of women in STEM drop out within 10 years
          </p>
          <hr className="border-pink-100 border-2 rounded-md w-4/5" />
          <div className="flex flex-row w-full items-center justify-center">
            <div className="flex w-1/2 flex-col py-4 mt-4">
              <div className="text-lg space-y-4">
                The number of women pursuing STEM decreases at each stage from
                education to the workforce, starting as{" "}
                <span className="text-primaryPink font-semibold">
                  early as middle school
                </span>{" "}
                STEM fields while encouraging boys to choose STEM.{" "}
                <p className="py-2">
                  This is called the{" "}
                  <span className="text-primaryPink font-semibold">
                    leaky pipeline
                  </span>
                  .{" "}
                </p>
                <p>
                  Leaky pipeline is the phenomenon in which{" "}
                  <span className="text-primaryPink font-semibold">
                    our beliefs about gender difference in academic subject
                    performance pushes girls out of the STEM fields
                  </span>{" "}
                  while encouraging boys to choose STEM.{" "}
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="w-full ml-10">
                <Image
                  src={leakyPipelineInfo}
                  alt="Leaky Pipeline Infographic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-1 mt-8">
        <div className="flex flex-row w-full items-center justify-center bg-white flex-1 max-w-screen-lg ">
          {/* <ol className="list-decimal list-outside mx-16">
            Ask Nina AI addresses the challenges for women in STEM by:
            <li>
              Providing information: brain-expanding insights to STEM careers
              and success stories of real women in STEM to keep you inspired.{" "}
            </li>
            <li>
              Offering guidance: Ask Nina AI can answer your questions, provide
              advice on career paths, and suggest opportunities for further
              learning.{" "}
            </li>
            <li>
              Build a community: Ask Nina AI can connect you with like-minded
              individuals, mentors, and STEM professionals to create a
              supportive network.
            </li>
          </ol> */}
        </div>
      </div>
    </div>
  );
};

export default LeakyPipeline;
