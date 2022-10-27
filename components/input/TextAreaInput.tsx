import { StyledTextArea } from "components/input/Input";
import React, { ChangeEventHandler } from "react";
import { Text, XStack, YStack } from "stitches-system";

const TextAreaInput = ({
  label,
  name,
  value,
  onChange,
}: {
  label?: string;
  value?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}) => {
  return (
    <YStack css={{ my: "$2" }}>
      <XStack css={{ mb: "$1" }} justifyContent="space-between">
        {label && (
          <Text size={"$sm"} css={{ pl: "$3" }}>
            {label}
          </Text>
        )}
      </XStack>

      <StyledTextArea
        css={{
          border: "1px solid $accents2",
          py: "$3",
          px: "$5",
          borderRadius: "$base",
          resize: "vertical",
        }}
        name={name}
        value={value}
        onChange={onChange}
      />
    </YStack>
  );
};

export default TextAreaInput;
