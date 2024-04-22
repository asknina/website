import Container from "@/components/body/Container";
import Subscribe from "@/components/body/Subscribe";
import Link from "next/link";
import React from "react";

import type { Metadata } from "next";
import FundPageContent from "./components/FundPageContent";

export const metadata: Metadata = {
  title: "Ask Nina AI | Fund",
};

const Fund = () => {

  return (
     <FundPageContent/>
  );
};

export default Fund;
