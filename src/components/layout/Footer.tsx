import Link from "next/link";
import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok, FaLinkedin, FaInstagram } from "react-icons/fa";

import largeNinaLogo from "../../../public/with-ask-nina-inverted-813x300.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="z-0 shadow-inner bg-primaryPurple text-center p-4 text-primaryPink flex justify-center items-center flex-col">
      <div className="flex flex-col md:flex-row justify-around w-full items-center p-4 max-w-screen-lg">
        <div className="w-full md:w-1/3 ">
          <Image
            src={largeNinaLogo}
            alt="Ask Nina AI logo"
            height={300}
            width={813}
          />
        </div>

        <div className="flex flex-col w-full mb-6 md:mb-0 md:w-1/3">
          <div>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </div>
          <div>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>

        <div className="flex flex-row space-x-6 justify-center w-full md:w-1/3 mb-8 md:mb-0">
          {/* Social Links */}
          <Link href="https://www.instagram.com/askninaai/">
            <FaInstagram size={30} />
          </Link>
          <Link href="https://www.tiktok.com/askninaai">
            <FaTiktok size={30} />
          </Link>
          <Link href="https://www.linkedin.com/company/ask-nina-ai/">
            <FaLinkedin size={30} />
          </Link>
        </div>
      </div>
      <div className="text-sm">&#169; 2024 Ask Nina AI</div>
    </div>
  );
};

export default Footer;
