import React from "react";
import TeamSection from "../TeamSection/TeamSection";
import "../Landing/Landing.css";
import { useState } from "react";
import {
  founders,
  topPlayers,
  managers,
  projectManagers,
  developers,
  implementationSupport,
} from "../Data/TeamData";

const Landing = () => {
  const [data, setData] = useState("all");

  const filterTeamMembers = () => {
    switch (data) {
      case "all":
        return [
          { title: "Founders", members: founders },
          { title: "Top Players", members: topPlayers },
          { title: "Managers", members: managers },
          { title: "Project Managers", members: projectManagers },
          { title: "Developers", members: developers },
          { title: "Implementation & Support", members: implementationSupport },
        ];
      case "founders":
        return [{ title: "Founders", members: founders }];
      case "topPlayers":
        return [{ title: "Top Players", members: topPlayers }];
      case "projectManagers":
        return [{ title: "Project Managers", members: projectManagers }];
      case "managers":
        return [{ title: "Managers", members: managers }];
      case "developers":
        return [{ title: "Developers", members: developers }];
      case "implementationSupport":
        return [{ title: "Implementation & Support team", members: implementationSupport }];
      default:
        return [];
    }
  };

  return (
    <div className="landing">
      <div className="landing_links">
        <button onClick={() => setData("all")}>All</button>
        <button onClick={() => setData("founders")}>Founders</button>
        <button onClick={() => setData("topPlayers")}>Top Players</button>
        <button onClick={() => setData("managers")}>Managers</button>
        <button onClick={() => setData("projectManagers")}>
          Project Managers
        </button>
        <button onClick={() => setData("developers")}>Developers</button>
        <button onClick={() => setData("implementationSupport")}>
          Implementation & Support
        </button>
      </div>
      {filterTeamMembers().map((section, i) => (
        <TeamSection key={i} members={section.members} heading={`Meet Our ${section.title}`} />
      ))}
    </div>
  );
};

export default Landing;
