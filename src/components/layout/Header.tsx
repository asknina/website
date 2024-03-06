import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full text-center flex flex-row">
      <Link href="/">
        <Image
          src="/ask-nina-logo-400x400.png"
          alt="AskNinaLogo"
          width={80}
          height={80}
        />
      </Link>
    </div>
  );
};

export default Header;
