import Description from "@/components/body/Description";
import Features from "@/components/body/Features";
import Partnerships from "@/components/body/Partnerships";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask Nina AI | AI copilot for teen girls exploring STEM careers",
  description:
    "Ask Nina AI is empowering teen girls to explore STEM (Science, Technology, Engineering, and Mathematics) careers in a supportive and engaging environment through AI",
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <Description />
      <Features />
      <Partnerships />
    </main>
  );
}
