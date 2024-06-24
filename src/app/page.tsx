"use client";
import Description from "@/components/body/Description";
import Features from "@/components/body/Features";
import Partnerships from "@/components/body/Partnerships";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <main className="flex flex-col text-black">
      <Description />
      <Features />
      <Partnerships />
      <div className="z-50 flex rounded-full">
        <ScrollToTop
          color="#423EEE"
          width={"20"}
          height={"20"}
          className="flex items-center justify-center"
          style={{ borderRadius: "1000px" }}
        />
      </div>
    </main>
  );
}
