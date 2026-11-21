
import InnerPage from "../../components/InnerPage";
import { User, Target, Lightbulb, Heart } from "lucide-react";

export default function About() {
  return (
    <InnerPage
      eyebrow="GET TO KNOW ME"
      title={<>A little about <span className="gradient-text">myself.</span></>}
      description="My journey, interests and aspirations."
    >
      <div className="about-layout">
        <div className="about-main card">
          <div className="large-icon"><User size={32} /></div>
          <h2>Hello! I'm an engineering student.</h2>
          <p>
            I'm currently pursuing my second year of Information Science
            and Engineering at Sahyadri College. I'm interested in software
            development and enjoy exploring how technology can solve
            everyday problems.
          </p>
          <p>
            I believe in learning by doing. Through academic projects,
            programming practice and hackathon experiences, I'm continuously
            working on improving my technical and problem-solving skills.
          </p>
        </div>

        <div className="about-side">
          <div className="card">
            <Target size={27} />
            <h3>Career Goal</h3>
            <p>To grow as a software developer and build useful, efficient applications.</p>
          </div>
          <div className="card">
            <Lightbulb size={27} />
            <h3>Interests</h3>
            <p>Web development, programming, technology and creative problem-solving.</p>
          </div>
          <div className="card">
            <Heart size={27} />
            <h3>My Approach</h3>
            <p>Stay curious, keep learning and turn knowledge into practical experience.</p>
          </div>
        </div>
      </div>

      <div className="card info-strip">
        <span>Currently learning</span>
        <div className="tag-list">
          <span className="tag">JavaScript</span>
          <span className="tag">React</span>
          <span className="tag">Next.js</span>
          <span className="tag">Data Structures</span>
        </div>
      </div>
    </InnerPage>
  );
}
