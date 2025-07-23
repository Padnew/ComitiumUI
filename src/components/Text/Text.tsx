import clsx from "clsx";
import { colorName } from "../../theme";

type TextProps = {
  size?: "sm" | "md" | "lg" | "xl";
  weight?: "normal" | "semibold" | "bold";
  font?: "sans" | "serif" | "mono";
  curved?: "none" | "sm" | "md" | "lg";
  color?: colorName;
  linkTo?: string;
  className?: string;
  children?: React.ReactNode;
  newTab?: boolean;
};

export const Text: React.FC<TextProps> = ({
  size = "md",
  weight = "normal",
  font = "sans",
  linkTo,
  className,
  children,
  newTab,
  color,
}) => {
  const textClasses = clsx(
    {
      "text-sm": size === "sm",
      "text-base": size === "md",
      "text-lg": size === "lg",
      "text-xl": size === "xl",

      "font-normal": weight === "normal",
      "font-semibold": weight === "semibold",
      "font-bold": weight === "bold",

      "font-sans": font === "sans",
      "font-serif": font === "serif",
      "font-mono": font === "mono",
    },
    className
  );

  const Component = linkTo ? "a" : "p";

  //This will check for whether the link provided is relative or Absolute
  const isExternal = linkTo
    ? /^(http|https):\/\//.test(linkTo) || /^[\w.-]+\.\w+/.test(linkTo)
    : false;

  //Appends the appropritate prefix based on either relative or absolute
  const normalizedHref = linkTo
    ? isExternal
      ? linkTo.startsWith("http")
        ? linkTo
        : `https://${linkTo}`
      : linkTo.startsWith("/")
      ? linkTo
      : `/${linkTo}`
    : undefined;

  return (
    <Component
      href={normalizedHref}
      className={textClasses}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      style={{ color: color ?? undefined }}
    >
      {children}
    </Component>
  );
};
