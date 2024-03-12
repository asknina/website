import Container from "@/components/body/Container";
import Subscribe from "@/components/body/Subscribe";
import React from "react";
// import Subscribe from "./Subscribe";

const About = () => {
  return (
    <Container containerStyles="p-0 min-h-[90vH] shadow-xl z-30 flex flex-col">
      <Container containerStyles="items-center justify-center flex flex-1 p-12">
        <div className="text-center flex flex-col space-y-8 max-w-screen-lg">
          <div className="text-6xl font-display">
            Introducing Ask Nina AI&apos;s Fund for girls and young women of
            color
          </div>
          <div className="text-2xl">
            Only 2% of funding in the U.S. is targeted to women and girls of
            color
          </div>

          <div className="mb-4">
            The Fund envisions a world where all girls and young women of color,
            inclusive of two-spirit, transgender and gender non-binary youth, to
            succeed in entrepreneurship, STEM careers, and become confident
            contributors in their communities. Our support goes beyond
            investment – learn more and apply for funding by emailing [xxx].
          </div>
        </div>
      </Container>

      <Subscribe
        headline="Use Nina to brainstorm your next big idea! Sign up for first access at launch"
        roles={["institution"]}
      />
    </Container>
  );
};

export default About;
