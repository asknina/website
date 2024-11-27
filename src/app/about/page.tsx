import React from "react";
import LeakyPipeline from "./components/LeakyPipeline";
import Stats from "./components/Stats";
import FancyPR from "./components/FancyPR";
import MeetTheTeam from "./components/MeetTheTeam";
import Video from "./components/Video";

const AboutPage = () => {
  return (
    <div>
      <LeakyPipeline />
      <Stats />
      <Video />
      <FancyPR />
      <MeetTheTeam />
    </div>
  );
};

export default AboutPage;
