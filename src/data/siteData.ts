export type SocialLink = {
  label: string;
  href: string;
  iconClass: string;
  target?: "_self" | "_blank";
  rel?: string;
};

export type WorkPlaceholder = {
  title: string;
  href: string;
  tone: "paper" | "ink" | "mint" | "butter";
  badge: string;
  note: string;
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
    items: WorkPlaceholder[];
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
        title: "Software Engineer",
        href: "#",
        tone: "paper",
        badge: "Tyro Payments / 2022 - Present",
        note:
          "Improved Tyro's merchant portal with React MFEs and REST APIs for faster, more modular delivery. Lifted security and release efficiency through Auth0 upgrades and CI/CD automation.",
      },
      {
        title: "Full Stack Developer",
        href: "#",
        tone: "ink",
        badge: "Insurance Australia Group (IAG) / 2021 - 2022",
        note:
          "Built APIs and token migration services for IAG's customer loyalty platform. Delivered CI/CD tooling and React micro-frontends in a collaborative agile team.",
      },
      {
        title: "Project Placeholder 03",
        href: "#",
        tone: "mint",
        badge: "Replace with project",
        note: "Swap in artwork or product visuals when ready.",
      },
      {
        title: "Project Placeholder 04",
        href: "#",
        tone: "butter",
        badge: "Replace with project",
        note: "Keep one slot open for the newest work sample.",
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
