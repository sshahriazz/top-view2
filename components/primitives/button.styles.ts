import { styled } from "stitches-system";

export const StyledButton = styled("button", {
  border: "unset",
  mx: "$2",
  px: "$8",
  py: "$1",
  borderRadius: "$sm",
  width: "fit-content",
  height: "fit-content",
  color: "$text",
  backgroundColor: "$accents1",
  "&:hover, &:focus": {
    backgroundColor: "$accents3",
  },
  "&:active": {
    backgroundColor: "$accents4",
  },
});
