import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuComp from "./Menu";

const Header = () => {
  return (
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
        <MenuComp />
        <Link href="/fund">Fund</Link>
      </div>
    </div>
  );
};

export default Header;
