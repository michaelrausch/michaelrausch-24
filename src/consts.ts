import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Michael Rausch",
  EMAIL: "michael@rausch.nz",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Software engineer at the University of Canterbury, specializing in full-stack development, cloud infrastructure, and DevOps.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Software engineer at the University of Canterbury, specializing in full-stack development, cloud infrastructure, and DevOps.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Software engineer at the University of Canterbury, specializing in full-stack development, cloud infrastructure, and DevOps.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/michaelrausch"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/michael-rausch-13445b8a/",
  }
];
