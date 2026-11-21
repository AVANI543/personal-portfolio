
import InnerPage from "../../components/InnerPage";
import { Code2, Globe, Wrench, Brain } from "lucide-react";

const groups = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C", "C++", "Python", "Java", "JavaScript"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitBranch", "VS Code", "Arduino"],
  },
  {
    title: "Core Skills",
    icon: Brain,
    skills: ["Problem Solving", "Logical Thinking", "Analytical Skills", "Teamwork"],
  },
];

export default function Skills() {
  return (
    <InnerPage
      eyebrow="MY TOOLKIT"
      title={<>Skills & <span className="gradient-text">technologies.</span></>}
      description="Technologies I'm familiar with and skills I'm continuously developing."
    >
      <div className="skills-grid">
        {groups.map((group) => {
          const Icon = group.icon;
          return (
            <div className="skill-card card" key={group.title}>
              <div className="large-icon"><Icon size={30} /></div>
              <h2>{group.title}</h2>
              <div className="tag-list">
                {group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
              </div>
            </div>
          );
        })}
      </div>
      <p className="section-description skills-note">
        My skill set is a work in progress. I'm always open to learning new
        tools and exploring better ways to build software.
      </p>
    </InnerPage>
  );
}

