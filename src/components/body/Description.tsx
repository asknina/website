import React from "react";
import Container from "./Container";
import Subscribe from "./Subscribe";
import EmailSubscribe from "../subscription/EmailRoleUI";
const Description = () => {
  return (
    <Container containerStyles="p-0 min-h-[90vH] shadow-xl z-30 flex flex-col">
      <Container containerStyles="items-center justify-center flex flex-1 p-12">
        <div className="text-center flex flex-col space-y-8 max-w-screen-lg">
          <div className="text-6xl font-display">
            Explore STEM with Confidence with Ask Nina AI
          </div>
          <div className="text-2xl">
            From robots to rockets, explore your passions, connect with mentors,
            and make your mark on the world with your STEM bestie, Nina.
          </div>

          <div className="mb-4 italic">Currently in Private Beta</div>
        </div>
      </Container>
      <Subscribe
        headline="Want to be a part of something extraordinary? Sign up now to stay
          informed and get exclusive access when Ask Nina AI launches!"
      />
    </Container>
  );
};

export default Description;
