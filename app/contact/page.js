
"use client";

import { useState } from "react";
import InnerPage from "../../components/InnerPage";
import { Mail, Send } from "lucide-react";

function GitHubIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.78 2.1 3.3 1.5.1-.73.4-1.22.7-1.5-2.48-.28-5.1-1.24-5.1-5.53 0-1.22.43-2.22 1.15-3-.12-.28-.5-1.42.1-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.63 5.24-5.13 5.52.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.96V9h2.97v9.5ZM6.44 7.7a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.06 10.8h-2.97v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7H9.24V9h2.85v1.3h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.98 3.58 4.55v5.19Z" />
    </svg>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <InnerPage
      eyebrow="SAY HELLO"
      title={
        <>
          Let's <span className="gradient-text">connect.</span>
        </>
      }
      description="Have a question, an opportunity or an interesting idea? I'd love to hear from you."
    >
      <div className="contact-layout">
        <div className="contact-info">
          <div className="card">
            <Mail size={29} />
            <h2>Let's talk!</h2>
            <p>
              I'm interested in connecting with fellow learners,
              developers and people who enjoy building meaningful things.
            </p>
          </div>

          <a
            className="contact-social card"
            href="https://github.com/AVANI543"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
            <span>GitHub</span>
            <span className="contact-arrow">↗</span>
          </a>

          <a
            className="contact-social card"
            href="https://www.linkedin.com/in/avani-adiga-177074384"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
            <span className="contact-arrow">↗</span>
          </a>
        </div>

        <form className="contact-form card" onSubmit={handleSubmit}>
          <h2>Send a message</h2>

          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="What's this about?"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message..."
            required
          />

          <button type="submit" className="primary-button">
            Send Message <Send size={17} />
          </button>

          {submitted && (
            <p className="success-message">
              Thank you! Your form has been validated successfully.
              This demo form does not send messages to a server.
            </p>
          )}
        </form>
      </div>
    </InnerPage>
  );
}
