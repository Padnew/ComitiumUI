export const resolveRadius = (curved: "none" | "sm" | "md" | "lg" = "md"): string => {
    switch (curved) {
      case "sm":
        return "4px";
      case "md":
        return "8px";
      case "lg":
        return "16px";
      case "none":
      default:
        return "0";
    }
  };