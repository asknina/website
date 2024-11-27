import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuComp from "./Menu";

const Header = () => {
  return (
    <div className="w-full bg-white h-content sticky top-0 z-50 flex items-center justify-center">
      <div className="flex items-center w-full max-w-screen-2xl font-semibold">
        <div className="flex-1 text-center flex flex-row h-[10vH] items-center">
          <Link href="/">
            <Image
              src="/ask-nina-logo-400x400.png"
              alt="AskNinaLogo"
              width={65}
              height={65}
            />
          </Link>
          <div className="text-lg p-1 mr-4 flex justify-center items-center space-x-4 text-primaryPurple">
            <Link href="/">Home</Link>
            {/* <MenuComp /> */}
            <Link href="/fund">Fund</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
        <div className="flex-row space-x-4 items-center justify-center flex">
          <a
            className="text-primaryPurple hidden md:block"
            href={"http://app.asknina.ai"}
            target="_blank"
          >
            Login
          </a>
          <a
            className="rounded-full w-36 py-1 bg-yellowGreen text-white text-center"
            href={"http://app.asknina.ai/register"}
            target="_blank"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
