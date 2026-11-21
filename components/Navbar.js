
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);

  function toggleTheme() {
    document.documentElement.classList.toggle("light");
    setLight(!light);
  }

  return (
    <nav className="navbar">
      <Link href="/" className="logo" onClick={() => setMenuOpen(false)}>
        <Sparkles size={21} />
        <span>MyPortfolio<span className="accent">.</span></span>
      </Link>

      <div className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            onClick={() => setMenuOpen(false)}
            className={pathname === link.path ? "nav-active" : ""}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="nav-actions">
        <button className="theme-button" onClick={toggleTheme} aria-label="Toggle theme">
          {light ? <Moon size={19} /> : <Sun size={19} />}
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </nav>
  );
}
