import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ReactNode,
} from "react";

type BaseProps = {
    children: ReactNode;
    className?: string;
};

type ButtonVariantProps = BaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: undefined;
    };

type LinkVariantProps = BaseProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
    };

export type PrimaryButtonProps = ButtonVariantProps | LinkVariantProps;

function joinClassName(...parts: Array<string | undefined>) {
    return parts.filter(Boolean).join(" ");
}

function isLinkProps(props: PrimaryButtonProps): props is LinkVariantProps {
    return "href" in props && typeof props.href === "string";
}

export function PrimaryButton(props: PrimaryButtonProps) {
    if (isLinkProps(props)) {
        const {
            href,
            children,
            className,
            target,
            rel,
            ...anchorProps
        } = props;
        const resolvedRel =
            rel ?? (target === "_blank" ? "noreferrer" : undefined);

        return (
            <a
                href={href}
                className={joinClassName("btn_one", className)}
                target={target}
                rel={resolvedRel}
                {...anchorProps}
            >
                {children}
            </a>
        );
    }

    const { children, className, type, ...buttonProps } =
        props as ButtonVariantProps;
    const resolvedType: ButtonHTMLAttributes<HTMLButtonElement>["type"] =
        type ?? "button";

    return (
        <button
            type={resolvedType}
            className={joinClassName("btn_one", className)}
            {...buttonProps}
        >
            {children}
        </button>
    );
}
