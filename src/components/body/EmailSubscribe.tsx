import React from "react";
import ChooseHumanType from "./ChooseHumanType";
const EmailSubscribe = () => {
  return (
    <div className="flex md:flex-col p-4 md:p-2 space-x-4 md:space-x-0 md:space-y-2 items-center md:items-start">
      <div className="flex flex-row">
        <div className="mr-4">I&apos;m a/n:</div>
        <ChooseHumanType />
      </div>
      <div>
        <div className="flex flex-row justify-center items-center space-x-4">
          <div>
            <input
              placeholder="your@email.com"
              className="border rounded-md p-1"
            />
          </div>
          {/* TODO: SENDGRID integration */}
          <div>
            <button className="bg-primaryPurple text-white border-2 border-black rounded-md w-24 p-1 shadow-xl">
              Go STEM
            </button>
          </div>
        </div>
        <div className="flex justify-center text-center">
          <div className="text-xs text-center max-w-[240px] pt-2 md:mt-0">
            By entering your email address, you are confirming that you are 13+.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscribe;
