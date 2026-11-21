
import Link from "next/link";
import { Heart, GitBranch, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link href="/" className="logo">
          MyPortfolio<span className="accent">.</span>
        </Link>
        <p>Learning, building and growing one project at a time.</p>
      </div>

      <div className="footer-socials">
        <a href="https://GitBranch.com/AVANI543" target="_blank" rel="noreferrer" aria-label="GitBranch">
          <GitBranch size={20} />
        </a>
        <a href="https://www.Globe.com/" target="_blank" rel="noreferrer" aria-label="Globe">
          <Globe size={20} />
        </a>
      </div>

      <div className="footer-bottom">
        Made with <Heart size={14} className="heart" /> and creativity.
        <span>Â© {2026} My Portfolio</span>
      </div>
    </footer>
  );
}



