import React from "react";
import Container from "./Container";
import Subscribe from "./Subscribe";
import EmailSubscribe from "../subscription/EmailRoleUI";
import Image from "next/image";
import AnamitaImage from "../../../public/WorkingFieldPhoto1.jpeg";

const Description = () => {
  return (
    <Container containerStyles="p-0 min-h-[90vH] shadow-xl z-30 flex flex-col">
      <Container containerStyles="justify-center flex-1 flex h-full">
        <div className="relative max-w-screen-2xl w-full h-[75vH] md:h-[68vH] z-20">
          <div className="text-center md:text-left flex flex-col space-y-8 md:w-3/5 md:py-12 md:pl-12 h-full md:absolute left-0 md:top-0 z-30 items-center md:items-start justify-center">
            <div className="text-5xl font-display font-semibold">
              Explore <span className="text-yellowGreen">S</span>
              <span className="text-cerulean">T</span>
              <span className="text-bgPurple">E</span>
              <span className="text-primaryPink">M</span>
              <span> with Confidence </span>
              <br />
              with Ask Nina AI
            </div>
            <div className="text-xl md:pr-10">
              From robots to rockets, explore your passions, connect with
              mentors, and make your mark on the world with your STEM bestie,
              Nina.
            </div>

            <div className="mb-4 italic">Currently in Private Beta</div>
            <div className="hidden">
              <a
                className="bg-bgPurple text-white rounded-md p-3"
                href={"http://app.asknina.ai"}
                target="_blank"
              >
                Chat with Nina
              </a>
            </div>
          </div>
          <div className="absolute right-0 top-0 overflow-hidden w-3/5 h-full z-10 hidden md:block">
            <div className="flex items-center justify-center relative scale-[1.75] h-full mask-image-fade-right">
              <Image
                src={AnamitaImage}
                alt="WorkingField"
                height={400}
                width={600}
                className="object-cover object-right-top scale-x-[-1] ml-24 mt-16"
              />
            </div>
          </div>
        </div>
      </Container>
      {/* <Subscribe
        headline="Want to be a part of something extraordinary? 
          Sign up now to stay informed and get exclusive updates for all things Nina"
      /> */}
      <Subscribe
        headline="Want to be a part of something extraordinary? Sign up now to stay
               informed and get exclusive access when Ask Nina AI launches!"
      />
    </Container>
  );
};

export default Description;
