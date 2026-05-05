export type SocialLink = {
  label: string;
  href: string;
  iconClass: string;
  target?: "_self" | "_blank";
  rel?: string;
};

export type WorkItem = {
  title: string;
  tone: "paper" | "ink" | "mint" | "butter";
  badge: string;
  note: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
  techStack: string[];
};

export type ExperimentPlaceholder = {
  title: string;
  year: string;
  summary: string;
  iconClass: string;
};

export type SiteData = {
  name: string;
  intro: string;
  socialLinks: SocialLink[];
  work: {
    title: string;
    items: WorkItem[];
  };
  experiments: {
    title: string;
    items: ExperimentPlaceholder[];
  };
};

export const siteData: SiteData = {
  name: "Ethan Shi",
  intro:
    "A full stack programming enthusiast known for being a proactive, collaborative team player who consistently exceeds expectations and embraces new challenges.",
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ethan-shi-007b85162/",
      iconClass: "fab fa-linkedin-in",
      target: "_blank",
      rel: "noreferrer",
    },
    {
      label: "Email",
      href: "mailto:y.ethan.shi@gmail.com",
      iconClass: "far fa-envelope",
    },
    {
      label: "Resume",
      href: "#",
      iconClass: "far fa-square",
    },
    {
      label: "GitHub",
      href: "https://github.com/ethan-yws",
      iconClass: "fab fa-github",
      target: "_blank",
      rel: "noreferrer",
    },
  ],
  work: {
    title: "Work",
    items: [
      {
        title: "Software Engineer II",
        tone: "mint",
        badge: "Microsoft / 2026 - Present",
        note:
          "Building reliable, scalable software for Azure Core, with a focus on cloud infrastructure, production-quality engineering, and service reliability.",
        company: "Microsoft",
        period: "2026 - Present",
        summary:
          "Working as a Software Engineer II in Azure Core, contributing to foundational cloud platform systems that support reliable, scalable Azure services.",
        highlights: [
          "Designing and implementing maintainable features for large-scale cloud infrastructure systems.",
          "Collaborating across engineering teams to deliver dependable Azure platform capabilities.",
          "Improving service reliability, observability, and release confidence through pragmatic engineering practices.",
        ],
        techStack: [
          "TypeScript",
          "React.js",
          "Node.js",
          "C#",
          ".NET",
          "Azure",
          "Azure Core",
          "Cloud Infrastructure",
          "REST APIs",
          "CI/CD",
        ],
      },
      {
        title: "Software Engineer",
        tone: "paper",
        badge: "Tyro Payments / 2022 - 2026",
        note:
          "Improved Tyro's merchant portal with React MFEs and REST APIs for faster, more modular delivery. Lifted security and release efficiency through Auth0 upgrades and CI/CD automation.",
        company: "Tyro Payments",
        period: "2022 - 2026",
        summary:
          "Overseeing and extending Tyro's merchant portal while delivering new services across frontend, backend, security, and platform tooling.",
        highlights: [
          "Architected and developed REST APIs to expand portal capability and integrations.",
          "Built scalable React micro-frontends to speed up deployment and team modularisation.",
          "Integrated Auth0 MFA and password reset flows for more than 10,000 customers.",
          "Led Buildkite and GitHub Actions automation that reduced deployment time by 60%.",
        ],
        techStack: [
          "Node.js",
          "React.js",
          "TypeScript",
          "Koa.js",
          "Express.js",
          "Java",
          "Kotlin",
          "Spring Boot",
          "PostgreSQL",
          "Docker",
          "AWS",
          "Auth0",
          "Buildkite",
          "Grafana",
          "GitHub Actions",
        ],
      },
      {
        title: "Full Stack Developer",
        tone: "ink",
        badge: "IAG / 2021 - 2022",
        note:
          "Built APIs and token migration services for IAG's customer loyalty platform. Delivered CI/CD tooling and React micro-frontends in a collaborative agile team.",
        company: "Insurance Australia Group (IAG)",
        period: "2021 - 2022",
        summary:
          "Worked across the customer loyalty platform to deliver backend services, migration tooling, frontend modules, and release automation in an agile environment.",
        highlights: [
          "Built robust REST APIs to manage diverse request flows across the loyalty platform.",
          "Partnered with the payments team to deliver a token migration system spanning ETL, database operations, Splunk logging, and reporting.",
          "Implemented CI/CD pipelines with Docker, Helm, Kubernetes configuration, and Bamboo plans.",
          "Developed React micro-frontends to support a more dynamic and user-friendly customer experience.",
        ],
        techStack: [
          "Node.js",
          "JavaScript",
          "TypeScript",
          "NestJS",
          "Express.js",
          "TypeORM",
          "PostgreSQL",
          "React.js",
          "Micro-Frontend",
          "GraphQL",
          "Docker",
        ],
      },
      {
        title: "Project Placeholder 03",
        tone: "mint",
        badge: "Replace with project",
        note: "Swap in artwork or product visuals when ready.",
        company: "Placeholder project",
        period: "Add dates",
        summary:
          "Use this card for a future project or role once you have visuals and a fuller story ready.",
        highlights: [
          "Add the high-level context for the work here.",
          "Summarise the strongest outcome or responsibility.",
          "List one or two technical or product highlights.",
        ],
        techStack: ["Add stack"],
      },
      {
        title: "Project Placeholder 04",
        tone: "butter",
        badge: "Replace with project",
        note: "Keep one slot open for the newest work sample.",
        company: "Placeholder project",
        period: "Add dates",
        summary:
          "Reserve this card for your next featured project, role, or polished case study.",
        highlights: [
          "Add a concise project overview.",
          "Call out one meaningful contribution or outcome.",
          "Finish with the tools, stack, or collaboration context.",
        ],
        techStack: ["Add stack"],
      },
    ],
  },
  experiments: {
    title: "Experiments",
    items: [
      {
        title: "Experiment Placeholder",
        year: "Add year",
        summary:
          "Write a short note about the concept, tools, or visual idea behind this experiment.",
        iconClass: "fas fa-dharmachakra",
      },
      {
        title: "Experiment Placeholder",
        year: "Add year",
        summary:
          "Describe what you explored here and what made the result worth sharing.",
        iconClass: "fas fa-drafting-compass",
      },
      {
        title: "Experiment Placeholder",
        year: "Add year",
        summary:
          "Use this slot for older side projects, prototypes, or browser-based tests.",
        iconClass: "fas fa-bicycle",
      },
    ],
  },
};
