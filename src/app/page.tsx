import Description from "@/components/body/Description";
import Features from "@/components/body/Features";
import Partnerships from "@/components/body/Partnerships";
import Subscribe from "@/components/body/Subscribe";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Description />
      <Features />
      <Partnerships />
    </main>
  );
}
