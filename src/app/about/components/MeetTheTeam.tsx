import React from "react";
import anamitaProfile from "../../../../public/profiles/anamita-profile.jpeg";
import srishtiProfile from "../../../../public/profiles/srishti-profile.jpeg";
import maddieProfile from "../../../../public/profiles/maddie-profile.png";
import Image from "next/image";

const contributors = [
  {
    name: "Anamita Guha",
    title: "Founder",
    favoriteSTEMSubject: "Cognitive Science",
    image: anamitaProfile,
  },
  {
    name: "Srishti Nath",
    title: "Founding Engineer",
    favoriteSTEMSubject: "Math",
    image: srishtiProfile,
  },
  {
    name: "Maddie Sellergen",
    title: "Digital Strategist",
    favoriteSTEMSubject: "Geology",
    image: maddieProfile,
  },
];
const formerContributors = [
  {
    name: "Ying",
    title: "Cornell University, Class of 2024",
    favoriteSTEMSubject: "Artificial Intelligence",
    image: "",
  },
];

const borderColors = [
  "primaryPurple",
  "pink-100",
  "cerulean",
  "yellowGreen",
  "primaryPurple",
];
const MeetTheTeam = () => {
  return (
    <div className="flex flex-col items-center py-12">
      <div className="font-display flex items-center justify-center text-5xl p-8">
        <div className="max-w-screen-lg">Meet the Team</div>
      </div>
      <div className="flex justify-center items-start flex-1 max-w-screen-lg w-full">
        {contributors.map((team, index) => {
          return (
            <div
              key={team.name}
              className={`w-1/${contributors.length} flex flex-col items-center space-y-4`}
            >
              <div
                className={`w-24 h-24 rounded-full border-4 flex shadow-lg border-${borderColors[index]} overflow-hidden`}
              >
                <Image src={team.image} alt={team.name} />
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">{team.name}</div>
                <div className="italic">{team.title}</div>
                <div>Favorite STEM subject: {team.favoriteSTEMSubject}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="font-display flex items-center justify-center p-8">
        <div className="max-w-screen-lg text-lg font-semibold text-left">
          Former Student Contributors
        </div>
      </div>
      <div className="flex justify-left items-start flex-1 max-w-screen-lg w-full">
        {formerContributors.map((team, index) => {
          return (
            <div
              key={team.name}
              className={`w-1/${formerContributors.length} flex flex-col items-center space-y-4`}
            >
              <div className="text-center">
                <div className="font-bold text-lg">{team.name}</div>
                <div className="italic">{team.title}</div>
                <div>Favorite STEM subject: {team.favoriteSTEMSubject}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MeetTheTeam;
