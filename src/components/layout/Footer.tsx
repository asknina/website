import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-content z-40 bg-pink-100 text-center p-4">
      <div className="flex flex-row justify-around items-center p-4">
        <div className="text-sm">Copyright AskNina &#169; 2024</div>
        {/* TODO: links to socials */}
      </div>
      <div className="text-xs p-1 pb-3">
        <p>
          Ask Nina AI respects the privacy of its website users. We do not
          collect, use, and disclose information that pertains to your privacy.
          When you access or use the website, you signify your agreement to this
          Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Footer;
