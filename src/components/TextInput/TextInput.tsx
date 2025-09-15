import {
  BaseComponentProps,
  BaseStyleResolver,
} from "../../types/BaseComponentProps";
import { resolveRadius } from "../../utils/RadiusResolver";

type TextInputProps = BaseComponentProps & {
  variant?: "default" | "sensitive";
  label?: string;
};

export const TextInput: React.FC<TextInputProps> = ({
  variant = "default",
  label,
  ...props
}) => {
  const baseStyles = BaseStyleResolver(props);

  const textStyles: React.CSSProperties = {
    padding: "0.25rem 0.5rem",
    borderRadius: resolveRadius("sm"),
    border: "2px solid grey",
    ...baseStyles,
  };

  return (
    <>
      {label != null && (
        <p style={{ color: "grey", fontSize: "0.8rem" }}>{label}</p>
      )}
      <input
        type={variant == "sensitive" ? "password" : "text"}
        style={textStyles}
        {...props}
      />
    </>
  );
};
