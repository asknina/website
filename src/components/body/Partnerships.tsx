import Image from "next/image";
import Container from "./Container";

import ifThenLogo from "../../../public/otherLogos/If-Then-Logo-One-Color-white-1200x395.png";
import LHLogo from "../../../public/otherLogos/lydiahillcapitallogo.svg";
import ShowThemeColors from "./ShowThemeColors";
// import ifThenLogo from "public/otherLogos/If-Then-Logo-One-Color-white-1200x395.png";

const Partnerships = () => {
  return (
    <>
      <ShowThemeColors />
      <Container
        containerStyles="bg-primaryPurple text-white p-16 md:p-24 shadow-[0px_0px_8px_4px_#00000024] z-20 flex justify-center"
        id="partnerships"
      >
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row max-w-screen-xl">
          <div className="md:w-2/3 space-y-8">
            <h2 className="font-normal font-display text-2xl">
              Become an Ask Nina AI Partner!
            </h2>

            <div>
              Our work would not be possible without our corporate and
              foundation partners and individuals like you. Partners can host
              interactive events and provide mentorship offering a truly
              immersive experience for teen girls exploring STEM careers.
            </div>

            <div>
              <div className="my-4">
                Contact us and let&apos;s work together!
              </div>
              <div>
                <div className="flex flex-row items-center space-x-4">
                  <div>
                    <input
                      placeholder="your@email.com"
                      className="border rounded-md p-1"
                    />
                  </div>
                  {/* TODO: SENDGRID integration */}
                  <div>
                    <button className="bg-primaryPink text-white border-2 border-black rounded-md w-24 p-1 shadow-xl">
                      Go STEM
                    </button>
                  </div>
                </div>
                {/* <div className="flex justify-center text-center">
          <div className="text-xs text-center max-w-[240px] pt-2 md:mt-0">
            By entering your email address, you are confirming that you are 13+.{" "}
          </div>
        </div> */}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center">
            <div className="w-full md:w-5/6 p-2 m-2">
              <Image
                src={LHLogo}
                alt={"Lydia Hill Capital Logo"}
                height={800}
                width={1500}
              />
            </div>

            <div className="w-1/2  p-2 m-2 bg-[#07143c] md:ml-20">
              <Image
                src={ifThenLogo}
                alt={"If Then Nonprofit Logo"}
                height={395}
                width={1200}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Partnerships;
