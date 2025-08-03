import { resolveRadius } from "../../utils/RadiusResolver";
import { resolveSize } from "../../utils/SizeResolver";

type TextInputProps = React.ButtonHTMLAttributes<HTMLInputElement> & {
  variant?: "default" | "sensitive";
  label?: string;
};

export const TextInput: React.FC<TextInputProps> = ({
  variant = "default",
  className,
  children,
  label,
  ...props
}) => {
  const baseStyles: React.CSSProperties = {
    padding: "2px 2px 4px 4px",
    borderRadius: resolveRadius("sm"),
    fontSize: resolveSize("md"),
    border: "2px grey solid",
  };

  return (
    <>
      {label != null ? (
        <>
          <p style={{ color: "grey", fontSize: "0.8rem" }}>{label}</p>
          <input
            type={variant == "sensitive" ? "password" : "text"}
            style={baseStyles}
            className={className}
            {...props}
          />
        </>
      ) : (
        <input
          type={variant == "sensitive" ? "password" : "text"}
          style={baseStyles}
          className={className}
          {...props}
        />
      )}
    </>
  );
};
