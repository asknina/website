import React from "react";
import leakyPipelineInfo from "../../../../public/WordCloud.png";
import Image from "next/image";

const WordCloud = () => {
  return (
    <div className="">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="text-5xl pt-8 text-primaryPurple font-display">
          What are girls asking?
        </div>
        <Image src={leakyPipelineInfo} alt="Word Cloud Infographic" />
      </div>
    </div>
  );
};

export default WordCloud;
