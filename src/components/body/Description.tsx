import React from "react";
import Container from "./Container";
import Subscribe from "./Subscribe";
const Description = () => {
  return (
    <Container containerStyles="p-0 min-h-[90vH] shadow-xl z-30 flex flex-col">
      <Container containerStyles="p-16 justify-center flex flex-1">
        <div className="text-center flex flex-col space-y-8 max-w-screen-lg">
          <div className="text-6xl font-display">
            Explore STEM with Confidence with Ask Nina AI
          </div>
          <div className="text-2xl">
            From robots to rockets, explore your passions, connect with mentors,
            and make your mark on the world with your STEM bestie, Nina.
          </div>
        </div>
      </Container>
      <Subscribe />
    </Container>
  );
};

export default Description;
