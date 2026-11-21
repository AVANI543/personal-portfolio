
import InnerPage from "../../components/InnerPage";
import { Award, Trophy, Users, Lightbulb } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Hack Harbour",
    category: "Certificate",
    description: "Received a certificate of participation through the college SOSC community.",
  },
  {
    icon: Trophy,
    title: "Versathon 2.0",
    category: "Hackathon",
    description: "Participated in a 24-hour hackathon, collaborating on the E3 Campus Skill Exchange project.",
  },
  {
    icon: Lightbulb,
    title: "SDG-11 Smart Bin Project",
    category: "Academic Project",
    description: "Worked on a technology-based concept focused on smart waste segregation and sustainable communities.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    category: "Activities",
    description: "Participated in team-based technical projects and activities to develop communication and collaboration skills.",
  },
];

export default function Achievements() {
  return (
    <InnerPage
      eyebrow="MILESTONES"
      title={<>Achievements & <span className="gradient-text">activities.</span></>}
      description="Experiences, milestones and learning opportunities along my journey."
    >
      <div className="achievement-grid">
        {achievements.map((item) => {
          const Icon = item.icon;
          return (
            <div className="achievement-card card" key={item.title}>
              <div className="large-icon"><Icon size={30} /></div>
              <span className="project-category">{item.category}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </InnerPage>
  );
}
