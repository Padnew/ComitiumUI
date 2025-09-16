import React, { ReactNode } from "react";
import { useTheme } from "../../theme/ThemeProvider";
import { colorName } from "../../theme";
import {
  BaseComponentProps,
  BaseStyleResolver,
} from "../../types/BaseComponentProps";

type ButtonVariant = "default" | "outline" | "cancel";

type ButtonProps = BaseComponentProps & {
  variant?: ButtonVariant;
  color?: colorName;
  children?: ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  color = "blue",
  children,
  ...props
}) => {
  const { colors } = useTheme();
  const baseStyles = BaseStyleResolver(props);

  const buttonStyles: React.CSSProperties = {
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    fontWeight: 500,
    border: "1px solid transparent",
    transition: "background-color 0.2s, border-color 0.2s",
    cursor: "pointer",
    fontFamily: "inherit",
    ...baseStyles,
  };

  const variantStyles = (): React.CSSProperties => {
    const themedColor = colors[color];

    switch (variant) {
      case "outline":
        return {
          color: themedColor,
          backgroundColor: "transparent",
          borderColor: themedColor,
        };
      case "cancel":
        return {
          color: "#fff",
          backgroundColor: "#e3342f",
          borderColor: "#cc1f1a",
        };
      case "default":
      default:
        return {
          color: "#fff",
          backgroundColor: themedColor,
        };
    }
  };

  return (
    <button style={{ ...buttonStyles, ...variantStyles() }} {...props}>
      {children}
    </button>
  );
};
