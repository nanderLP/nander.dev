import styles from "./Skills.module.css";
import { FC, useRef, useState } from "react";
import { animate } from "motion";

type Skill = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

const skills: Skill[] = [
  {
    id: "info",
    name: "Information",
    icon: "info",
    description: "I know a lot of stuff.",
  },
  {
    id: "htmlcss",
    name: "HTML and CSS",
    icon: "code",
    description: "HTML and CSS",
  },
];

const Skills: FC = () => {
  const [project, setProject] = useState<Skill["name"]>("info");

  let weight = 200

  const animateWeight = () => {
    console.log("hi");
    
    animate((p) => {
      weight = p * 1000;
    }, {duration: 1});
  };

  return (
    <div className={styles.content}>
      <div>
        {skills.map((skill, i) => (
          <div>
            <span x-icon="true">{skill.icon}</span>
          </div>
        ))}
      </div>
      <h1 onClick={animateWeight} style={{ fontWeight: weight.current }}>
        Hallooo
      </h1>
      <div id="skills-information"></div>
    </div>
  );
};

export default Skills;
