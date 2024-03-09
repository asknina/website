import React from "react";
import Container from "./Container";

const Features = () => {
  return (
    <Container
      containerStyles="p-16 md:p-24 pt-16 bg-white z-0 items-center flex flex-col"
      id="features"
    >
      <div className="text-4xl mb-10 text-center max-w-screen-md font-semibold">
        Ask Nina AI is on a mission to empower teen girls to discover STEM
        careers
      </div>

      <div className="flex flex-col md:flex-row max-w-screen-lg justify-between md:space-x-4 space-y-4 md:space-y-0">
        <div className="rounded-md border p-4 bg-yellowGreen shadow-md md:w-1/3 w-full space-y-2">
          <h2 className="text-2xl text-center font-normal font-display">
            Empowering Exploration
          </h2>
          <p>
            Ask Nina AI encourages teen girls to explore STEM (Science,
            Technology, Engineering, and Mathematics) careers in a supportive
            and engaging environment.
          </p>
        </div>
        <div className="rounded-md border p-4 bg-cerulean shadow-md md:w-1/3 w-full space-y-2">
          <h2 className="text-2xl text-center font-normal font-display">
            Inclusive Design
          </h2>
          <p>
            Ask Nina AI is meticulously crafted with an understanding of how
            women interact with the internet, ensuring that its features and
            responses resonate with the needs and preferences of teen girls,
            thus contributing to closing the{" "}
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
            Curated Responses
          </h2>
          <p>
            Each response from Ask Nina AI undergoes careful scrutiny by real
            women in STEM, guaranteeing accuracy, relevance, and inclusivity in
            the information shared. This thorough process ensures safe and
            targeted responses tailored to the specific needs and interests of
            teen girls exploring STEM careers.
          </p>
        </div>
      </div>

      <div className="pt-6 md:p-12 pb-0">
        {/* <div className="text-center font-semibold mb-2">What we offer</div> */}
        <ul className="space-y-2">
          <li>
            <b>Inspiring Role Models</b>: Meet real inspiring and diverse female
            role models in STEM fields through Nina AI&apos;s curated content
            and personalized recommendations.
          </li>
          <li>
            <b>Career Guidance</b>: Get personalized career guidance and
            insights tailored to individual interests and aspirations, helping
            teen girls navigate their path in STEM.
          </li>
          <li>
            <b>Interactive Learning</b>: Engage in interactive learning
            experiences designed to foster curiosity and deepen understanding of
            STEM concepts.
          </li>
          <li>
            <b>Safe and Supportive Community</b>: Join a vibrant community of
            like-minded teen girls, parents, and educators, where they can share
            experiences, ask questions, and support each other in pursuing STEM
            passions.
          </li>
          <li>
            <b>Future Opportunities</b>: Discover internship, scholarship, and
            educational opportunities in STEM fields to help teen girls pursue
            their passions and achieve their goals.
          </li>
        </ul>
      </div>
      {/* <div className="flex flex-row flex-wrap space-x-4 space-y-2">
        <div className="bg-pink-100 w-20 h-20" />
        <div className="bg-pink-200 w-20 h-20" />
        <div className="bg-orange-100 w-20 h-20" />
        <div className="bg-orange-200 w-20 h-20" />
        <div className="bg-orange-300 w-20 h-20" />
        <div className="bg-orange-400 w-20 h-20" />
        <div className="bg-midGreen w-20 h-20" />
        <div className="bg-cerulean w-20 h-20" />
        <div className="bg-bgPurple w-20 h-20" />
        <div className="bg-yellowGreen w-20 h-20" />
        <div className="bg-paleGreen w-20 h-20" />
        <div className="bg-brightLightBlue w-20 h-20" />
        <div className="bg-brightYellow w-20 h-20" />
        <div className="bg-peach w-20 h-20" />
      </div> */}
    </Container>
  );
};

export default Features;
