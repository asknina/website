import React from "react";
// import leakyPipelineInfo from "../../../../public/LeakyPipelineInfo.png";
import Image from "next/image";
import AnamitaImage from "../../../../public/WorkingFieldPhoto1.jpeg";

const FancyPR = () => {
  return (
    <div className="flex flex-col">
      {/* <div className="h-[45vH] font-display flex items-center justify-center text-5xl bg-anamita-image">
        <div className="max-w-screen-lg text-white ">
          Inspiring girls to explore STEM careers with passion.{" "}
        </div>
      </div> */}
      <div className="flex justify-center items-center flex-1">
        <div className="flex flex-col md:flex-row w-full items-center justify-center bg-white flex-1 max-w-screen-lg ">
          <div className="flex md:w-3/5 flex-col p-4">
            <p className="text-3xl text-primaryPurple">In Fancy PR Speak</p>
            <hr className="border-pink-100 my-4 border-2 rounded-md" />
            <div className="space-y-8">
              <div>
                Ask Nina AI is a disruptive agentic AI designed to empower and
                inspire the next generation of world changers: girls in Science,
                Technology, Engineering, and Mathematics (STEM).
              </div>
              <div className="">
                In its first 30 days, Ask Nina AI has reached girls in more than
                30 countries who have logged nearly 1,500 hours of conversations
                with the tool.
              </div>
              <div>
                Unlike traditional search engines and other increasingly popular
                AI tools, Ask Nina AI is built with a deep understanding of how
                women and girls interact with and use the internet, in other
                words designed by women for women.
              </div>
              <div>
                <a
                  className={` text-white border-2 border-black rounded-md py-1 px-2 shadow-xl ${"bg-primaryPurple"}`}
                  href={"mailto:askninaai@gmail.com"}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-0 md:w-2/5">
            <div className="w-full rounded-md md:rounded-full overflow-hidden">
              <Image src={AnamitaImage} alt="Leaky Pipeline Infographic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyPR;
