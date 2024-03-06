import React from "react";
import Container from "./Container";

const Subscribe = () => {
  return (
    <Container containerStyles="text-center justify-around p-10 z-20 shadow-[0px_0px_8px_4px_#00000024] bg-pink-200">
      <div className="mb-8 italic">Currently in Private Beta</div>
      <div className="flex flex-col">
        <div className="mb-4">Sign up for first access at launch</div>
        <div className="flex flex-row justify-center items-center space-x-4">
          <div>
            <input
              placeholder="your@email.com"
              className="border rounded-md p-1"
            />
          </div>
          {/* TODO: SENDGRID integration */}
          <div>
            <button className="bg-primaryPink text-white border-2 border-black rounded-md w-24 p-1">
              Go STEM
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Subscribe;
