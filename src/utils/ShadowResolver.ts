export const resolveShadow = (shadow: "none" | "sm" | "md" | "lg" = "md"): string => {
    switch (shadow) {
      case "sm":
        return "0 1px 2px rgba(0, 0, 0, 0.05)";
      case "md":
        return "0 4px 6px rgba(0, 0, 0, 0.1)";
      case "lg":
        return "0 10px 15px rgba(0, 0, 0, 0.15)";
      case "none":
      default:
        return "none";
    }
  };