import React from "react";
import Container from "./Container";

import AnamitaImage from "../../../public/WorkingFieldPhoto1.jpeg";
import Image from "next/image";

import {
  HiOutlineRocketLaunch,
  HiComputerDesktop,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
const Features = () => {
  return (
    <Container
      containerStyles="p-16 md:p-24 pt-16 bg-gray-100 z-0 items-center flex flex-col"
      id="features"
    >
      <div className="text-4xl mb-10 text-center max-w-screen-md font-semibold">
        Ask Nina AI is on a mission to empower teen girls to discover STEM
        careers
      </div>

      <div className="flex flex-col md:flex-row max-w-screen-lg justify-between md:space-x-4 space-y-4 md:space-y-0">
        <div className="rounded-md border p-4 bg-yellowGreen shadow-md md:w-1/3 w-full space-y-2">
          <h2 className="text-2xl text-center font-normal font-display">
            <p>Empowering</p> <p>Exploration</p>
          </h2>
          <div className="w-full flex items-center justify-center">
            <HiOutlineRocketLaunch size={60} />
          </div>
          <p>
            Ask Nina AI encourages teen girls to explore STEM (Science,
            Technology, Engineering, and Mathematics) careers in a supportive
            and engaging environment.
          </p>
        </div>
        <div className="rounded-md border p-4 bg-cerulean shadow-md md:w-1/3 w-full space-y-2">
          <h2 className="text-2xl text-center font-normal font-display">
            <p>Inclusive</p> <p>Design</p>
          </h2>
          <div className="w-full flex items-center justify-center">
            <HiComputerDesktop size={60} />
          </div>
          <p>
            Ask Nina AI is meticulously crafted with an understanding of how
            women interact with the internet, thus contributing to closing the{" "}
            <a
              href="https://time.com/collection/davos-2020/5764698/gender-data-gap/"
              className="underline text-bgPurple"
            >
              gender bias gap
            </a>{" "}
            in data and AI.
          </p>
        </div>
        <div className="rounded-md border p-4 bg-orange-300 shadow-md md:w-1/3 w-full space-y-2">
          <h2 className="text-2xl text-center font-normal font-display">
            <p>Curated</p> <p>Responses</p>
          </h2>
          <div className="w-full flex items-center justify-center">
            <HiOutlineChatBubbleLeftRight size={60} />
          </div>
          <p>
            Each response from Ask Nina AI undergoes careful scrutiny by real
            women in STEM, guaranteeing accuracy, relevance, and inclusivity in
            the information shared.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-screen-lg mt-8 items-center h-full">
        <div className="flex items-center justify-center w-full md:w-1/2 m-2 h-full relative rounded-md overflow-hidden">
          <Image
            src={AnamitaImage}
            alt="WorkingField"
            height={400}
            width={600}
            className="object-cover object-right-bottom"
          />
        </div>

        <div className=" w-full md:w-2/3 md:p-6">
          <h3 className="text-center text-lg mb-2 font-display">
            What we offer
          </h3>
          <ul className="space-y-2">
            <li>
              <b>Inspiring Role Models</b>: Meet real inspiring and diverse
              female role models in STEM fields through Nina AI&apos;s curated
              content and personalized recommendations.
            </li>
            <li>
              <b>Career Guidance</b>: Get personalized career guidance and
              insights tailored to individual interests and aspirations, helping
              teen girls navigate their path in STEM.
            </li>
            <li>
              <b>Safe and Supportive Community</b>: Join a vibrant community of
              like-minded teen girls, parents, and educators, where they can
              share experiences, ask questions, and support each other in
              pursuing STEM passions.
            </li>
            <li>
              <b>Future Opportunities</b>: Discover internship, scholarship, and
              educational opportunities in STEM fields to help teen girls pursue
              their passions and achieve their goals.
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Features;
