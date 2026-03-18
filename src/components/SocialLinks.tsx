import type { HTMLAttributes } from "react";
import type { SocialLink } from "../data/siteData";

type SocialLinksProps = HTMLAttributes<HTMLElement> & {
    items: readonly SocialLink[];
    label?: string;
    listClassName?: string;
    linkClassName?: string;
    itemClassName?: string;
};

export function SocialLinks({
    items,
    label = "Social links",
    className,
    listClassName,
    linkClassName,
    itemClassName,
    ...rest
}: SocialLinksProps) {
    return (
        <nav aria-label={label} className={className} {...rest}>
            <ul className={listClassName}>
                {items.map((item) => (
                    <li key={item.label} className={itemClassName}>
                        <a
                            href={item.href}
                            className={linkClassName}
                            target={item.target}
                            rel={item.rel}
                            aria-label={item.label}
                            title={item.label}
                        >
                            <i className={item.iconClass} aria-hidden="true" />
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
