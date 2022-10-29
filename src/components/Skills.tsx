import styles from "./Skills.module.css";
import { FC, useState } from "react";

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

  return (
    <div className={styles.content}>
      <div>
        {skills.map((skill, i) => (
          <div>
            <span x-icon="true">{skill.icon}</span>
          </div>
        ))}
      </div>
      <div id="skills-information"></div>
    </div>
  );
};

export default Skills;
