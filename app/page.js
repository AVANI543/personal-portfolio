
import Link from "next/link";
import {
  ArrowRight, GitBranch, Code2, BriefcaseBusiness,
  GraduationCap, Sparkles, ExternalLink
} from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div className="hero-content">
          <div className="availability">
            <span className="status-dot"></span>
            Welcome to my creative space
          </div>

          <p className="hero-intro">HELLO, WORLD! I'M</p>

          <h1>
            An Aspiring
            <span className="gradient-text"> Software Developer.</span>
          </h1>

          <p className="hero-description">
            I'm an Information Science and Engineering student passionate
            about technology, programming and building meaningful digital
            experiences. I love turning ideas into reality through code.
          </p>

          <div className="hero-buttons">
            <Link href="/projects" className="primary-button">
              Explore My Work <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="secondary-button">
              Get In Touch
            </Link>
          </div>

          <div className="hero-socials">
            <a href="https://GitBranch.com/AVANI543" target="_blank" rel="noreferrer">
              <GitBranch size={20} /> GitBranch
            </a>
            <span>â€¢</span>
            <span>Student Developer</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-orbit orbit-one"></div>
          <div className="profile-orbit orbit-two"></div>
          <div className="profile-card">
            <div className="profile-symbol"><Code2 size={75} /></div>
            <span className="profile-tag">{"< developer />"}</span>
            <h2>Think. Build. Create.</h2>
            <p>Curiosity meets creativity.</p>
          </div>
          <div className="floating-icon float-one"><Code2 /></div>
          <div className="floating-icon float-two"><Sparkles /></div>
          <div className="floating-icon float-three"><GraduationCap /></div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat">
          <Code2 size={25} />
          <h3>5+</h3>
          <p>Programming & Web Technologies</p>
        </div>
        <div className="stat">
          <BriefcaseBusiness size={25} />
          <h3>Projects</h3>
          <p>Learning through building</p>
        </div>
        <div className="stat">
          <GraduationCap size={25} />
          <h3>ISE</h3>
          <p>Engineering Student</p>
        </div>
      </section>

      <section className="home-about section-container">
        <div className="section-heading">
          <span className="eyebrow">A LITTLE ABOUT ME</span>
          <h2>Building my journey, <span className="gradient-text">one line at a time.</span></h2>
        </div>
        <p className="section-description">
          Currently exploring software development, strengthening my
          programming fundamentals and working on projects that combine
          creativity with problem-solving.
        </p>
        <Link href="/about" className="text-link">
          More About Me <ArrowRight size={17} />
        </Link>
      </section>

      <section className="featured-section section-container">
        <div className="section-heading">
          <span className="eyebrow">WHAT I DO</span>
          <h2>Turning ideas into <span className="gradient-text">reality.</span></h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <Code2 size={30} />
            <h3>Development</h3>
            <p>Exploring programming and creating responsive web applications.</p>
          </div>
          <div className="feature-card">
            <Sparkles size={30} />
            <h3>Problem Solving</h3>
            <p>Learning to approach challenges with logic and creativity.</p>
          </div>
          <div className="feature-card">
            <GraduationCap size={30} />
            <h3>Continuous Learning</h3>
            <p>Growing through academics, projects, teamwork and hackathons.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <span className="eyebrow">LET'S CONNECT</span>
        <h2>Have an idea? Let's make it happen.</h2>
        <Link href="/contact" className="primary-button">
          Contact Me <ExternalLink size={17} />
        </Link>
      </section>
    </main>
  );
}

