import Image from "next/image";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Cloud,
  Code2,
  Database,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Monitor,
  PanelsTopLeft,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import {
  CONTACT_EMAIL,
  CV_DOWNLOAD_URL,
  CV_PREVIEW_URL,
  EMAIL_SUBJECT,
  GITHUB_URL,
  LINKEDIN_URL,
  LOCATION,
  PHONE_NUMBER,
  PROFILE_IMAGE_SRC,
  SITE_NAME,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from "@/lib/config";

const emailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const socialLinks = [
  { label: "LinkedIn", href: LINKEDIN_URL, Icon: BriefcaseBusiness },
  { label: "GitHub", href: GITHUB_URL, Icon: Code2 },
  { label: "WhatsApp", href: whatsappHref, Icon: MessageCircle },
  { label: "Email", href: emailHref, Icon: Mail },
];

const skillGroups = [
  {
    title: "Backend",
    Icon: Code2,
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "REST APIs",
      "Python",
      "jQuery",
      "Microservices",
    ],
  },
  {
    title: "Frontend",
    Icon: PanelsTopLeft,
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    Icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    title: "DevOps & Cloud",
    Icon: Cloud,
    skills: ["Docker", "AWS", "Vercel", "Netlify"],
  },
  {
    title: "Integrations",
    Icon: Layers3,
    skills: ["Claude AI", "OpenAI (ChatGPT)", "Paystack", "Flutterwave"],
  },
];

const experience = [
  {
    company: "Freelance · Upwork, Jobberman & Fiverr",
    role: "Web App Development Engineer, Frontend",
    period: "Jul 2024 — Present",
    details: [
      "Built lively, user-friendly client systems with React Three Fiber and drei.",
      "Delivered production web apps and REST APIs for church organizations, using Vercel Image Optimization.",
      "Collaborated with distributed teams to ship reliable client work.",
    ],
  },
  {
    company: "DO-DEELS",
    role: "Lead Full-Stack Developer",
    period: "Jun 2023 — Jul 2024",
    details: [
      "Architected secure UI systems and Node.js APIs, and designed a microservices architecture.",
      "Sole architect of the dashboard, including automated member login.",
    ],
  },
  {
    company: "Summergold Montessori Schools",
    role: "Frontend Web Developer · Contract",
    period: "Apr 2022 — May 2023",
    details: [
      "Refactored legacy code into maintainable modules and built responsive layouts.",
      "Rewrote critical modules to reduce page load times by 75%.",
    ],
  },
];

const projects = [
  {
    stack: "Next.js / Minimal backend",
    title: "Qavah",
    description:
      "An EasyWorship-style web app for finding Bible passages and projecting them live as a service unfolds.",
    liveUrl: "https://qavah-six.vercel.app/",
    githubUrl: "https://github.com/Shadow-sama1/qavah.git",
  },
  {
    stack: "Next.js / Vercel",
    title: "AdeTech",
    description:
      "An e-commerce platform for a solar services company, complete with a cart, checkout, payments, and user accounts.",
    liveUrl: "https://adetech-omega.vercel.app/",
    githubUrl: "https://github.com/Shadow-sama1/adetech.git",
  },
  {
    stack: "Next.js / Minimal backend",
    title: "Praise Feast 2.0",
    description:
      "An event registration experience that helps guests sign up and receive confirmation automatically on WhatsApp.",
    liveUrl: "https://praisefeastv2.vercel.app",
    githubUrl: "https://github.com/Shadow-sama1/praisefeastv2.git",
  },
  {
    stack: "Next.js / Vercel",
    title: "HOAJ / Tiana Collections",
    description:
      "Fashion brand websites featuring optimized product imagery and a direct WhatsApp path for customer orders.",
    liveUrl: "https://hoajapparels.vercel.app",
    githubUrl: "https://github.com/Shadow-sama1/hoajapparels.git",
  },
  {
    stack: "Next.js / Vercel",
    title: "Dave Pharmaceuticals",
    description:
      "A business web app with a polished preloader and a simple WhatsApp redirect for purchase enquiries.",
    liveUrl: "https://davepharma.vercel.app",
    githubUrl: "https://github.com/Shadow-sama1/davepharma.git",
  },
];

const websiteServices = [
  {
    title: "Landing pages / single-page sites",
    description:
      "One clear page built around one goal. A good fit for a promotion, product launch, or bringing in new leads.",
    Icon: PanelsTopLeft,
    number: "01",
  },
  {
    title: "Business websites",
    description:
      "A professional home for your business, with space for your services, team, story, and contact details.",
    Icon: Monitor,
    number: "02",
  },
  {
    title: "Online stores",
    description:
      "A smooth way to showcase products and sell online, with a shop, cart, and secure checkout.",
    Icon: ShoppingBag,
    number: "03",
  },
  {
    title: "Web applications",
    description:
      "Have something more specific in mind? I build custom dashboards, booking systems, and client portals.",
    Icon: Smartphone,
    number: "04",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{"// "}{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-intro">{description}</p> : null}
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-kicker">
          <span className="status-dot" aria-hidden="true" />
          Full-stack developer · Lagos, Nigeria
        </p>
        <h1 id="hero-title">
          <span className="hero-greeting">Hi, I&apos;m</span>
          <span className="hero-name">{SITE_NAME}</span>
        </h1>
        <p className="hero-role">Full-Stack Web Developer (Backend-Light)</p>
        <p className="hero-summary">
          I build useful, well-crafted web experiences and the systems behind
          them — from responsive interfaces to dependable APIs.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View My Work <ArrowRight size={17} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#cv">
            View CV <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="hero-socials" aria-label="Social links">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              className="social-icon-link"
              href={href}
              key={label}
              aria-label={label}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noreferrer"}
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait-frame">
          <Image
            src={PROFILE_IMAGE_SRC}
            alt={`${SITE_NAME} — Full-Stack Web Developer`}
            fill
            priority
            sizes="(max-width: 767px) 78vw, 390px"
            className="portrait-image"
          />
          <div className="portrait-caption">
            <span className="portrait-caption-mark" aria-hidden="true">
              &lt;/&gt;
            </span>
            <span>Building for the web</span>
          </div>
        </div>
        <div className="floating-badge opportunity-badge">
          <span className="badge-check">
            <Check size={14} aria-hidden="true" />
          </span>
          <span>Open to opportunities</span>
        </div>
        <div className="floating-badge experience-badge">
          <span className="experience-number">4+</span>
          <span>
            <strong>Years</strong>
            <small>Exp.</small>
          </span>
        </div>
        <span className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <span className="hero-orbit hero-orbit-two" aria-hidden="true" />
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about">
        <span className="scroll-cue-line" />
        <span>Scroll to explore</span>
      </a>
    </section>
  );
}

export function About() {
  return (
    <section className="content-section" id="about">
      <div className="content-shell about-layout">
        <SectionHeading eyebrow="who I am" title="A little about me" />
        <div className="about-copy">
          <p>
            I&apos;m a full-stack web developer with 4+ years of coding
            experience and 2+ years of professional delivery across businesses
            and fintech organizations. I specialize in building scalable,
            user-friendly systems with React, Next.js, React Three Fiber, and
            Node.js APIs.
          </p>
          <p>
            I design microservices, integrate AI-driven features into
            production systems, and write clean, maintainable code. I also
            improve platform performance by measurable margins.
          </p>
          <a className="text-link" href="#cv">
            View CV <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="content-section" id="skills">
      <div className="content-shell">
        <SectionHeading
          eyebrow="what I work with"
          title="Skills & technologies"
          description="A practical toolkit for taking ideas from first sketch to production."
        />
        <div className="skills-grid">
          {skillGroups.map(({ title, Icon, skills }) => (
            <article className="skill-card" key={title}>
              <div className="card-title-row">
                <span className="card-icon">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
              </div>
              <ul className="chip-list" aria-label={`${title} skills`}>
                {skills.map((skill) => (
                  <li className="tech-chip" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="content-section" id="experience">
      <div className="content-shell">
        <SectionHeading
          eyebrow="where I've worked"
          title="Experience"
          description="A few highlights from the teams and products I’ve helped move forward."
        />
        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item" key={job.company}>
              <span className="timeline-marker" aria-hidden="true">
                <BriefcaseBusiness size={15} />
              </span>
              <div className="timeline-card">
                <div className="timeline-heading">
                  <div>
                    <p className="timeline-company">{job.company}</p>
                    <h3>{job.role}</h3>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <ul className="experience-list">
                  {job.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="content-section" id="projects">
      <div className="content-shell">
        <SectionHeading
          eyebrow="what I've built"
          title="Selected projects"
          description="A selection of web products and client work, built to solve real needs."
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-topline">
                <span className="project-index">0{index + 1}</span>
                <span className="project-stack">{project.stack}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.liveUrl} className="project-link">
                  View Live <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <a href={project.githubUrl} className="project-link muted-link">
                  <Code2 size={15} aria-hidden="true" />
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Websites() {
  return (
    <section className="content-section" id="websites">
      <div className="content-shell">
        <SectionHeading
          eyebrow="websites & web apps"
          title="I build websites for Nigerian businesses"
          description="Fast, professional, and built to last. I keep the process clear and pricing transparent, so you know what you’re getting from day one."
        />
        <div className="services-grid">
          {websiteServices.map(({ title, description, Icon, number }) => (
            <article className="service-card" key={title}>
              <div className="service-topline">
                <span className="card-icon">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="service-number">{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <a className="service-cta" href="#contact">
          Have a project in mind? Let&apos;s talk
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export function CV() {
  return (
    <section className="content-section cv-section" id="cv">
      <div className="content-shell">
        <SectionHeading
          eyebrow="my credentials"
          title="Download My CV"
          description="Want to know more about my experience, projects, and expertise? Preview my CV below or download it directly."
        />
        <div className="cv-frame">
          <iframe
            src={CV_PREVIEW_URL}
            title={`${SITE_NAME} CV`}
            loading="lazy"
            allow="autoplay"
          />
        </div>
        <div className="cv-actions">
          <p>
            Can&apos;t see the preview?{" "}
            <a href={CV_DOWNLOAD_URL}>Download the CV instead.</a>
          </p>
          <a className="button button-primary" href={CV_DOWNLOAD_URL}>
            <ArrowDownToLine size={17} aria-hidden="true" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="content-section contact-section" id="contact">
      <div className="content-shell">
        <SectionHeading eyebrow="get in touch" title="Let’s Talk" />
        <div className="contact-layout">
          <div className="contact-copy">
            <p>
              Have an idea, a project, or a role you think I’d be a good fit
              for? I’d love to hear what you’re working on.
            </p>
            <a className="button button-primary" href={emailHref}>
              <Mail size={17} aria-hidden="true" />
              Send Email
            </a>
          </div>
          <div className="contact-list">
            <a className="contact-row" href={emailHref}>
              <span className="contact-icon">
                <Mail size={18} aria-hidden="true" />
              </span>
              <span>
                <small>Email</small>
                <strong>{CONTACT_EMAIL}</strong>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="contact-row"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">
                <MessageCircle size={18} aria-hidden="true" />
              </span>
              <span>
                <small>Phone / WhatsApp</small>
                <strong>{PHONE_NUMBER}</strong>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="contact-row"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">
                <BriefcaseBusiness size={18} aria-hidden="true" />
              </span>
              <span>
                <small>LinkedIn</small>
                <strong>Connect with me</strong>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="contact-row"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">
                <Code2 size={18} aria-hidden="true" />
              </span>
              <span>
                <small>GitHub</small>
                <strong>See what I’m building</strong>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <div className="contact-row location-row">
              <span className="contact-icon">
                <MapPin size={18} aria-hidden="true" />
              </span>
              <span>
                <small>Location</small>
                <strong>{LOCATION}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-shell footer-inner">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">
            fa
          </span>
          <span>{SITE_NAME}</span>
        </a>
        <p>© 2026 {SITE_NAME}. All rights reserved.</p>
        <a className="back-to-top" href="#home">
          Back to top <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
