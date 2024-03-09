import React, { ReactNode } from "react";
import Container from "./Container";
import EmailSubscribe from "./EmailSubscribe";

const Subscribe = ({
  headline,
  otherStyles = "",
}: {
  headline: string;
  otherStyles?: string;
}) => {
  return (
    <Container
      containerStyles={
        "text-center p-8 justify-around z-20 shadow-[0px_0px_8px_4px_#00000024] bg-pink-200 flex flex-row " +
        otherStyles
      }
    >
      <div className="flex flex-col md:flex-row w-full max-w-screen-lg">
        <div className="flex justify-center items-center font-display text-primaryPurple text-2xl md:pr-6 md:w-2/3">
          {headline}
        </div>
        <EmailSubscribe />
      </div>
    </Container>
  );
};

export default Subscribe;
