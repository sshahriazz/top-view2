import { ChangeEventHandler, ReactNode } from "react";
import { styled, Text, XStack, YStack } from "stitches-system";

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
  actionComponent,
}: {
  label?: string;
  value?: string;
  name?: string;
  type?: "text" | "number" | "date" | "time";
  onChange?: ChangeEventHandler<HTMLInputElement>;
  actionComponent?: ReactNode;
}) => (
  <YStack css={{ my: "$2" }}>
    <XStack css={{ mb: "$1" }} justifyContent="space-between">
      {label && (
        <Text size={"$sm"} css={{ pl: "$3" }}>
          {label}
        </Text>
      )}
      {actionComponent}
    </XStack>

    <StyledInput
      css={{
        border: "1px solid $accents2",
        py: "$3",
        px: "$5",
        borderRadius: "$base",
      }}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  </YStack>
);
export default TextInput;
