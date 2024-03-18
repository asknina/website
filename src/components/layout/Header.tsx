import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuComp from "./Menu";

const Header = () => {
  return (
    <div className="flex items-center max-w-screen-2xl">
      <div className="w-full text-center flex flex-row h-[10vH] justify-between">
        <Link href="/">
          <Image
            src="/ask-nina-logo-400x400.png"
            alt="AskNinaLogo"
            width={80}
            height={80}
          />
        </Link>
        <div className="p-1 mr-4 flex justify-center items-center space-x-4 text-primaryPurple">
          <Link href="/">Home</Link>
          <MenuComp />
          <Link href="/fund" target="_blank" rel="noopener noreferrer">
            Fund
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
