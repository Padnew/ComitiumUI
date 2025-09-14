import React, { CSSProperties } from "react";
import {
  BaseComponentProps,
  BaseStyleResolver,
} from "../../types/BaseComponentProps";
type HeaderProps = BaseComponentProps & {
  heading: string;
  subHeading?: string;
  order?: 1 | 2;
  size?: "sm" | "md" | "lg" | "xl" | number;
};

export const Header: React.FC<HeaderProps> = ({
  heading,
  subHeading,
  order = 1,
  size = "md",
  ...props
}) => {
  const headerSizeMap = { sm: 12, md: 24, lg: 36, xl: 48 };
  const headerSize: number =
    typeof size === "number" ? size : headerSizeMap[size];

  const headingStyle: CSSProperties = BaseStyleResolver({
    ...props,
    margin: 0,
    fs: headerSize,
  });
  const subHeadingStyle: CSSProperties = BaseStyleResolver({
    color: "gray",
    margin: 0,
    fs: headerSize / 1.6,
  });
  return (
    <div
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
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
