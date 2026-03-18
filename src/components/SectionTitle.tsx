import type { ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type SectionTitleProps = {
    title: ReactNode;
    level?: HeadingLevel;
    eyebrow?: ReactNode;
    description?: ReactNode;
    className?: string;
    id?: string;
};

export function SectionTitle({
    title,
    level = 1,
    eyebrow,
    description,
    className,
    id,
}: SectionTitleProps) {
    const headingMap = {
        1: "h1",
        2: "h2",
        3: "h3",
        4: "h4",
        5: "h5",
        6: "h6",
    } as const;
    const HeadingTag = headingMap[level];

    return (
        <header className={className} id={id}>
            {eyebrow ? <p>{eyebrow}</p> : null}
            <HeadingTag>{title}</HeadingTag>
            {description ? <p>{description}</p> : null}
        </header>
    );
}
