import { ChangeEventHandler } from "react";
import { styled, XStack } from "stitches-system";

export const StyledInput = styled("input", {
  border: "unset",
  outline: "unset",
  margin: "unset",
  padding: "unset",
  width: "100%",
});
export const StyledTextArea = styled("textarea", {
  outline: "unset",
  margin: "unset",
  padding: "unset",
  width: "100%",
});
export const StyledLabel = styled("label", {});
const TextInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
}: {
  label?: string;
  value?: string;
  name?: string;
  type?: "text" | "number" | "date" | "time";
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) => (
  <XStack css={{ gap: "$4" }}>
    {label && <StyledLabel>{label}</StyledLabel>}
    <StyledInput
      css={{ border: "1px solid $accents2" }}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  </XStack>
);
export default TextInput;
