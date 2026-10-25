import Image from "next/image";
import { ArrowUpRight, ArrowDown, Github, Linkedin } from "lucide-react";
import { Navigation, WorkLens, RevealMotion } from "@/components/interactions";
const projects = [
  {
    name: "Harmoniq Player",
    category: "Music, with room to focus.",
    description:
      "A music web player that brings playlists and audio controls into a focused dark interface.",
    image: "/images/harmoniq.png",
    alt: "Harmoniq Player music interface from Oliver’s original portfolio",
    url: "https://harmoniqplayer.vercel.app/player",
    repo: "https://github.com/Mathhiass/Music-Player",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "NovaTop Up",
    category: "Play starts here.",
    description:
      "A Philippine game-currency storefront for browsing top-ups for Valorant, Mobile Legends, Roblox, and more.",
    image: "/images/nova.png",
    alt: "NovaTop Up game storefront from Oliver’s original portfolio",
    url: "https://novatopupph.vercel.app/",
    repo: null,
    tags: ["Storefront", "Game top-ups", "Web project"],
  },
];
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <section id="home" className="hero">
          <div className="hero-intro">
            <p>
              Oliver Bartolata
              <br />
              Frontend / Web Developer
            </p>
            <p>
              I turn ideas into responsive, intuitive
              <br className="desktop-break" /> experiences for the web.
            </p>
          </div>
          <h1 className="monument">Oliver Bartolata</h1>
          <div className="hero-bottom">
            <p>
              Thoughtful interfaces.
              <br />
              Care beyond launch.
            </p>
            <div className="hero-actions">
              <a className="button" href="#projects">
                View projects <ArrowDown size={18} />
              </a>
              <a className="text-link" href="#contact">
                Contact me <ArrowUpRight size={18} />
              </a>
            </div>
            <a
              className="hero-preview"
              href="#projects"
              aria-label="Explore Harmoniq Player"
            >
              <Image
                src="/images/harmoniq.png"
                alt="A preview of Oliver’s Harmoniq Player project"
                width={240}
                height={126}
                sizes="180px"
              />
            </a>
          </div>
        </section>
        <section id="projects" className="section work">
          <div className="section-heading" data-reveal>
            <h2>Selected work</h2>
            <p>
              Two different worlds.
              <br />
              The same attention to detail.
            </p>
          </div>
          {projects.map((project, index) => (
            <article className={`project project-${index}`} key={project.name}>
              <a
                href={project.url}
                className="project-image"
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name} (new tab)`}
                data-reveal
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={1440}
                  height={900}
                  sizes="(max-width: 700px) 100vw, 88vw"
                />
              </a>
              <div className="project-caption" data-reveal>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.category}</p>
                </div>
                <div>
                  <p>{project.description}</p>
                  <ul className="tags" aria-label="Project categories">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a
                      className="text-link"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live project <ArrowUpRight size={17} />
                    </a>
                    {project.repo && (
                      <a
                        className="text-link"
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github size={17} /> Source code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
        <section id="about" className="section about">
          <div className="about-photo" data-reveal>
            <Image
              src="/images/oliver.jpg"
              alt="Oliver Bartolata"
              width={700}
              height={800}
              sizes="(max-width: 700px) 100vw, 42vw"
            />
          </div>
          <div className="about-copy">
            <h2 data-reveal>A little about me</h2>
            <p className="statement" data-reveal>
              I’m Oliver. I enjoy making the web feel a little more intuitive.
            </p>
            <p data-reveal>
              I’m a frontend and web developer based in Manila. I like the point
              where a good idea becomes something you can use: a responsive
              layout, a clear interaction, a detail that feels right.
            </p>
            <p data-reveal>
              My experience supporting client websites taught me to look beyond
              the first impression. Clear content, reliable updates, and
              practical troubleshooting are part of a good web experience, too.
            </p>
            <WorkLens />
            <a
              className="text-link resume"
              href="/Oliver_Bartolata_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Read my résumé <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <section id="experience" className="section experience">
          <h2 data-reveal>Beyond the build</h2>
          <div className="experience-row" data-reveal>
            <h3>Luxury Presence</h3>
            <div>
              <p className="role">Former Client Support Specialist</p>
              <p>
                Supported client websites through content updates, website
                management, troubleshooting, and quality checks. Helped keep
                information accurate and worked through issues with a client’s
                needs in mind.
              </p>
            </div>
          </div>
          <div className="experience-row education" data-reveal>
            <h3>Education</h3>
            <div>
              <p className="role">BS Information Technology</p>
              <p>Pamantasan ng Lungsod ng Maynila</p>
            </div>
          </div>
        </section>
        <section id="skills" className="section skills">
          <div className="section-heading" data-reveal>
            <h2>My toolkit</h2>
            <p>
              The tools change.
              <br />
              Curiosity stays.
            </p>
          </div>
          <div className="skill-row" data-reveal>
            <h3>Frontend</h3>
            <p>JavaScript, TypeScript, React, Next.js, HTML, CSS</p>
          </div>
          <div className="skill-row" data-reveal>
            <h3>Tooling</h3>
            <p>Git, GitHub</p>
          </div>
          <div className="skill-row" data-reveal>
            <h3>Also working with</h3>
            <p>Node.js, Python, C#</p>
          </div>
          <p className="learning" data-reveal>
            This portfolio is built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </section>
        <section id="contact" className="section contact">
          <div className="section-heading" data-reveal>
            <h2>Let’s make it work.</h2>
            <p>
              Have a project in mind, a role to discuss,
              <br />
              or just want to say hello?
            </p>
          </div>
          <a
            className="contact-email"
            href="mailto:bartolata.oliver@gmail.com"
            data-reveal
          >
            Say hello <ArrowUpRight />
          </a>
          <a className="email-address" href="mailto:bartolata.oliver@gmail.com">
            bartolata.oliver@gmail.com
          </a>
          <div className="socials">
            <a
              href="https://github.com/Mathhiass"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/oliver-bartolata"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-top">
          <a className="brand" href="#home">
            Kali.Dev
          </a>
          <p>© {new Date().getFullYear()} Oliver Bartolata</p>
          <a href="#home" className="text-link">
            Back to top <ArrowUpRight size={18} />
          </a>
        </div>
        <nav aria-label="Footer navigation">
          {["About", "Experience", "Projects", "Skills", "Contact"].map(
            (label) => (
              <a key={label} href={`#${label.toLowerCase()}`}>
                {label}
              </a>
            ),
          )}
        </nav>
      </footer>
      <RevealMotion />
    </>
  );
}
