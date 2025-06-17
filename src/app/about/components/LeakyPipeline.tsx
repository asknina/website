import React from "react";
import leakyPipelineInfo from "../../../../public/LeakyPipelineInfo.png";
import Image from "next/image";

const LeakyPipeline = () => {
  return (
    <div className=" flex flex-col  z-10">
      <div className="min-h-fit py-12 md:h-[32vH] font-display flex items-center justify-center text-5xl bg-gradient-to-r from-primaryPurple to-primaryPink ">
        <div className="max-w-screen-lg text-white px-4 md:px-0">
          We&apos;re on a mission to inspire teen girls to explore STEM careers
        </div>
      </div>
      <div className="flex justify-center items-center flex-1 px-4 md:px-0">
        <div className="flex flex-col  bg-white flex-1 max-w-screen-lg pb-10 ">
          <p className="text-3xl text-primaryPurple pt-8 pb-2 leading-10 md:w-4/5">
            Nearly 50% of women in STEM drop out within 10 years of joining the
            workforce
          </p>
          <hr className="border-pink-100 border-2 rounded-md md:w-4/5" />
          <div className="flex flex-col md:flex-row w-full items-center justify-center">
            <div className="flex md:w-1/2 flex-col py-4 mt-4 order-2 md:order-1">
              <div className="text-lg space-y-4">
                The number of women pursuing STEM decreases at each stage from education to the workforce, starting as {" "}
                <span className="text-primaryPink font-semibold">
                  early as middle school
                </span>.{" "}
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
                    performance pushes girls out of STEM fields
                  </span>{" "}
                  while encouraging boys to choose STEM.{" "}
                </p>
              </div>
            </div>
            <div className="order-1 mt-10 md:mt-0 md:order-2 md:w-1/2">
              <div className="w-full md:ml-10">
                <Image
                  src={leakyPipelineInfo}
                  alt="Leaky Pipeline Infographic"
                />
              </div>
              {/* <p className="text-center text-xs">Source: </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeakyPipeline;
