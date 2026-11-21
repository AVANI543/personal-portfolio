
import InnerPage from "../../components/InnerPage";
import { ExternalLink, GitBranch, Code2 } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "OpportunityHub",
    category: "Web Development",
    description: "A student opportunity discovery and application tracker that helps students organize internships, hackathons, scholarships and workshops.",
    tech: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    link: "https://GitBranch.com/AVANI543/OpportunityHub",
  },
  {
    number: "02",
    title: "Smart Waste Segregation Bin",
    category: "IoT / SDG 11",
    description: "An Arduino-based smart bin concept designed to support waste segregation using moisture and ultrasonic sensors with a servo mechanism.",
    tech: ["Arduino", "Sensors", "Servo Motor", "Embedded Systems"],
  },
  {
    number: "03",
    title: "Mangalore Tourism App Prototype",
    category: "UI / Application Prototype",
    description: "A tourism application prototype developed to present and explore tourist destinations around Mangalore, inspired by a visit to Panambur Beach.",
    tech: ["UI Design", "Prototyping", "Antigravity"],
  },
  {
    number: "04",
    title: "E3 Campus Skill Exchange",
    category: "Hackathon Project",
    description: "A campus skill-sharing platform concept where students can connect, exchange skills, schedule learning sessions and track feedback.",
    tech: ["React", "JavaScript", "Web Development"],
  },
];

export default function Projects() {
  return (
    <InnerPage
      eyebrow="MY WORK"
      title={<>Projects I've <span className="gradient-text">worked on.</span></>}
      description="A collection of academic projects, prototypes and ideas built through learning and collaboration."
    >
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <Code2 size={25} />
            </div>
            <span className="project-category">{project.category}</span>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tag-list">
              {project.tech.map((tech) => <span className="tag" key={tech}>{tech}</span>)}
            </div>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                <GitBranch size={17} /> View on GitBranch <ExternalLink size={15} />
              </a>
            ) : (
              <span className="project-link project-note">Academic / Prototype Project</span>
            )}
          </article>
        ))}
      </div>
    </InnerPage>
  );
}

