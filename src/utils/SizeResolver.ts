export const resolveSize = (size?: string): string => {
    if (size === "sm") return "1rem";
    if (size === "md") return "1.5rem";
    if (size === "lg") return "2rem";
    if (size === "xl") return "2.5rem";
    return size ?? "1.5rem";
  };