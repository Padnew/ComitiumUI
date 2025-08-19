export const resolveSize = (size?: string): string => {
    if (size === "sm") return "1rem";
    if (size === "md") return "1.5rem";
    if (size === "lg") return "2rem";
    if (size === "xl") return "2.5rem";
    return size ?? "1.5rem";
  };

  export const resolveInputSize = (size?: string): string => {
    if (size === "sm") return "0.75rem";
    if (size === "md") return "0.875rem";
    if (size === "lg") return "1rem";
    if (size === "xl") return "1.125rem";
    return "0.875rem";
  };

  export const resolvePadding = (size?: string): string => {
    if (size === "sm") return "1rem";
    if (size === "md") return "1.25rem";
    if (size === "lg") return "2rem";
    if (size === "xl") return "2.25rem";
    return "1rem"
  };