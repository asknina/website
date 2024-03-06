import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 z-40 bg-white text-center p-4">
      <div className="flex flex-row justify-around items-center p-4">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-use">Terms of Use</Link>
        <div>Copyright AskNina &#169; 2024</div>
      </div>
    </div>
  );
};

export default Footer;
