
import InnerPage from "../../components/InnerPage";
import { GraduationCap, Users, Code2 } from "lucide-react";

const experiences = [
  {
    icon: GraduationCap,
    type: "Education",
    title: "B.E. Information Science and Engineering",
    organization: "Sahyadri College",
    period: "2025 – Present",
    description: "Pursuing engineering studies while building a foundation in programming, data structures, computer science and software development.",
  },
  {
    icon: Code2,
    type: "Project Experience",
    title: "Student Developer",
    organization: "Academic & Personal Projects",
    period: "Ongoing",
    description: "Working on web development, application prototypes and technology-based academic projects using programming and development tools.",
  },
  {
    icon: Users,
    type: "Team Experience",
    title: "Hackathon Participant",
    organization: "Versathon – E3 Campus Skill Exchange",
    period: "2026",
    description: "Collaborated on a campus skill exchange platform concept, contributing to feedback and learning-history related features.",
  },
];

export default function Experience() {
  return (
    <InnerPage
      eyebrow="MY JOURNEY"
      title={<>Education & <span className="gradient-text">experience.</span></>}
      description="The experiences that are helping me grow as a developer."
    >
      <div className="timeline">
        {experiences.map((item, index) => {
          const Icon = item.icon;
          return (
            <div className="timeline-item" key={item.title}>
              <div className="timeline-icon"><Icon size={23} /></div>
              <div className="timeline-card card">
                <div className="experience-meta">
                  <span className="project-category">{item.type}</span>
                  <span className="experience-period">{item.period}</span>
                </div>
                <h2>{item.title}</h2>
                <h3>{item.organization}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </InnerPage>
  );
}
