 export const resolveInputSize = (size?: string): string => {
    if (size === "sm") return "0.75rem";
    if (size === "md") return "0.875rem";
    if (size === "lg") return "1rem";
    if (size === "xl") return "1.125rem";
    return "0.875rem";
  };

  export const resolveGridSize = (size?: string): string => {
    if (size === "sm") return "0.25rem";
    if (size === "md") return "0.75rem";
    if (size === "lg") return "2rem";
    if (size === "xl") return "3rem";
    if (size === "none") return "0rem";
    return "0.75rem"
  };

  export const headerSizeMap = { sm: 12, md: 24, lg: 36, xl: 48 };
  export const flexGapMap = { none: 0, sm: 12, md: 24, lg: 36, xl: 48 };
  export const spacingMap = { sm: 4, md: 8, lg: 16, xl: 24 };
  export const fontSizeMap = { sm: 8, md: 12, lg: 16, xl: 24 };
