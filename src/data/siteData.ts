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
    "I'm a front-end developer who wants to help make the internet a more creative, accessible, and better place.",
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
        title: "Project Placeholder 01",
        href: "#",
        tone: "paper",
        badge: "Replace with project",
        note: "Add title, thumbnail, and case-study link later.",
      },
      {
        title: "Project Placeholder 02",
        href: "#",
        tone: "ink",
        badge: "Replace with project",
        note: "Use this card for another featured portfolio piece.",
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
