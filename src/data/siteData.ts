export type NavItem = {
    label: string;
    href: string;
};

export type SocialLink = {
    label: string;
    href: string;
    iconClass: string;
    target?: "_self" | "_blank";
    rel?: string;
};

export type ContactDetail = {
    iconClass: string;
    label: string;
    value: string;
    href?: string;
};

export type PhotoItem = {
    src: string;
    alt: string;
    caption?: string;
};

export type WorkItem = {
    label: string;
    href: string;
    iconClass?: string;
};

export type SiteData = {
    title: string;
    logo: string;
    hero: {
        intro: string;
        ctaLabel: string;
        ctaHref: string;
        imageSrc: string;
        imageAlt: string;
    };
    work: {
        title: string;
        items: WorkItem[];
    };
    bio: {
        title: string;
        paragraphs: string[];
    };
    photography: {
        title: string;
        items: PhotoItem[];
    };
    contact: {
        title: string;
        details: ContactDetail[];
    };
};

export const navigation: NavItem[] = [
    { label: "work", href: "#work" },
    { label: "about", href: "#bio" },
    { label: "photography", href: "#photography" },
    { label: "contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=100009137278706",
        iconClass: "fab fa-facebook",
        target: "_blank",
        rel: "noreferrer",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ethan-shi-007b85162/",
        iconClass: "fab fa-linkedin",
        target: "_blank",
        rel: "noreferrer",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/ethan.yws/",
        iconClass: "fab fa-instagram",
        target: "_blank",
        rel: "noreferrer",
    },
    {
        label: "GitHub",
        href: "https://github.com/ethan-yws",
        iconClass: "fab fa-github",
        target: "_blank",
        rel: "noreferrer",
    },
];

export const contactDetails: ContactDetail[] = [
    {
        iconClass: "fas fa-phone",
        label: "Phone",
        value: "+61 410072577",
        href: "tel:+61410072577",
    },
    {
        iconClass: "fas fa-at",
        label: "Email",
        value: "y.ethan.shi@gmail.com",
        href: "mailto:y.ethan.shi@gmail.com",
    },
    {
        iconClass: "fas fa-fax",
        label: "Fax",
        value: "+61 410072577",
    },
    {
        iconClass: "fas fa-map-marker-alt",
        label: "Location",
        value: "Chippendale, Sydney, Australia",
    },
];

export const photography: PhotoItem[] = [
    {
        src: "https://images.unsplash.com/photo-1527922448044-9cef1eaf30bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
        alt: "Landscape photography sample",
        caption: "Will share more photos...",
    },
];

export const siteData: SiteData = {
    title: "Ethan Shi",
    logo: "Ethan Shi.",
    hero: {
        intro:
            "B. Computer Science at the University of Sydney; Looking for opportunities in software engineering or full stack development.",
        ctaLabel: "Contact",
        ctaHref: "mailto:y.ethan.shi@gmail.com",
        imageSrc: "imgs/rightCover.jpg",
        imageAlt: "Portrait cover image",
    },
    work: {
        title: "work",
        items: [
            {
                label: "Check my GitHub",
                href: "https://github.com/ethan-yws",
                iconClass: "fab fa-github",
            },
        ],
    },
    bio: {
        title: "about",
        paragraphs: [
            "Recent computer science graduate at the University of Sydney, looking for opportunities in software engineering or full stack development.",
            "Frontend: React, JavaScript, TypeScript, HTML5, CSS, SASS/SCSS, styled components",
            "Backend: Node.js, Java, Python, Express.js, REST API",
            "Database: MongoDB, SQL - Cloud: Firebase, AWS Amplify, Heroku",
            "A hooman in the earth, a friend of a kitten.",
        ],
    },
    photography: {
        title: "photography",
        items: photography,
    },
    contact: {
        title: "contact",
        details: contactDetails,
    },
};
