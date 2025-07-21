import React, { CSSProperties } from "react";
import clsx from "clsx";

type TextSize = "sm" | "md" | "lg" | "xl";

type HeaderProps = {
  heading: string;
  subHeading?: string;
  size?: TextSize | string;
  order?: 1 | 2;
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({
  heading,
  subHeading,
  size = "md",
  order = 1,
  className,
}) => {
  const resolveSize = (input: TextSize | string): string => {
    if (input === "sm") return "0.875rem";
    if (input === "md") return "1rem";
    if (input === "lg") return "1.125rem";
    if (input === "xl") return "1.25rem";
    return input;
  };

  const headingFontSize = resolveSize(size);

  const headingStyle: CSSProperties = {
    fontSize: headingFontSize,
    color: "black",
    margin: 0,
  };

  const subHeadingStyle: CSSProperties = {
    fontSize: `calc(${headingFontSize} / 1.6)`,
    color: "gray",
    margin: 0,
  };
  return (
    <div className={clsx("flex flex-col", className)}>
      {order === 1 ? (
        <>
          <p style={headingStyle}>{heading}</p>
          {subHeading && <p style={subHeadingStyle}>{subHeading}</p>}
        </>
      ) : (
        <>
          {subHeading && <p style={subHeadingStyle}>{subHeading}</p>}
          <p style={headingStyle}>{heading}</p>
        </>
      )}
    </div>
  );
};
