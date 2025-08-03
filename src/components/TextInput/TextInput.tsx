import { resolveRadius } from "../../utils/RadiusResolver";
import { resolveInputSize } from "../../utils/SizeResolver";

type TextInputProps = React.ButtonHTMLAttributes<HTMLInputElement> & {
  variant?: "default" | "sensitive";
  label?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

export const TextInput: React.FC<TextInputProps> = ({
  variant = "default",
  className,
  children,
  label,
  size = "md",
  ...props
}) => {
  const baseStyles: React.CSSProperties = {
    padding: "0.25rem 0.5rem",
    borderRadius: resolveRadius("sm"),
    fontSize: resolveInputSize(size),
    border: "2px solid grey",
  };

  return (
    <>
      {label != null && (
        <p style={{ color: "grey", fontSize: "0.8rem" }}>{label}</p>
      )}
      <input
        type={variant == "sensitive" ? "password" : "text"}
        style={baseStyles}
        className={className}
        {...props}
      />
    </>
  );
};
