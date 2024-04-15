import Container from "@/components/body/Container";
import Subscribe from "@/components/body/Subscribe";
import Link from "next/link";
import React from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask Nina AI | Fund",
};

const Fund = () => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Container containerStyles="p-0 min-h-[90vH] shadow-xl z-30 flex flex-col">
        <Container containerStyles="items-center justify-center flex flex-1 p-2 md:p-12 w-full">
          <div className="text-center flex flex-col space-y-8 w-full max-w-screen-lg p-6">
            <div className="text-5xl md:text-6xl font-display w-full">
              Introducing Ask Nina AI&apos;s Fund for girls and young women of
              color
            </div>
            <div className="text-2xl w-full">
              Only 2% of funding in the U.S. is targeted to women and girls of
              color
            </div>

            <div className="mb-4">
              The Fund envisions a world where all girls and young women of
              color, inclusive of two-spirit, transgender and gender non-binary
              youth, to succeed in entrepreneurship, STEM careers, and become
              confident contributors in their communities. Our support goes
              beyond investment – learn more and apply for funding by emailing{" "}
              <Link
                href="mailto:askninaai+fund@gmail.com"
                className="underline text-primaryPurple hover:cursor-pointer"
              >
                us
              </Link>
              .
            </div>
          </div>
        </Container>

        <Subscribe
          headline="Use Nina to brainstorm your next big idea! Sign up for first access at launch"
          roles={["institution"]}
          showRoles={false}
        />
      </Container>
    </>
  );
};

export default Fund;
