import React, { CSSProperties } from "react";
import clsx from "clsx";
import { BaseComponentProps } from "../../types/BaseComponentProps";
import { resolveSize } from "../../utils/SizeResolver";

type HeaderProps = BaseComponentProps & {
  heading: string;
  subHeading?: string;
  order?: 1 | 2;
};

export const Header: React.FC<HeaderProps> = ({
  heading,
  subHeading,
  size = "md",
  order = 1,
  color = "black",
  style,
}) => {
  const headingFontSize = resolveSize(size);

  const headingStyle: CSSProperties = {
    fontSize: headingFontSize,
    color,
    margin: 0,
    ...style,
  };

  const subHeadingStyle: CSSProperties = {
    fontSize: `calc(${headingFontSize} / 1.6)`,
    color: "gray",
    margin: 0,
  };

  return (
    <div style={{ flex: 1, flexDirection: "column" }}>
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
