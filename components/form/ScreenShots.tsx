import { Value } from "@sinclair/typebox/value";
import { screenShots1Atom } from "atom";
import TextInput from "components/input/Input";
import { StyledButton } from "components/primitives/button.styles";
import { useAtom } from "jotai";
import { nanoid } from "nanoid";
import React, { ChangeEvent } from "react";
import { screenShotsSchema } from "schema/planSchema";
import { XStack, YStack } from "stitches-system";

const ScreenShots = ({
  screenShotsAtom,
}: {
  screenShotsAtom: typeof screenShots1Atom;
}) => {
  const [screenShots, setScreenShots] = useAtom(screenShotsAtom);

  function handleSS(e: ChangeEvent<HTMLInputElement>, index: number) {
    setScreenShots((d) => {
      d[index][e.target.name as "image"] = e.target.value;

      return d;
    });
  }

  return (
    <YStack>
      {screenShots.map((item, index) => (
        <TextInput
          key={nanoid()}
          actionComponent={
            <XStack>
              <StyledButton
                disabled={screenShots.length === 3}
                onClick={() =>
                  setScreenShots((d) => {
                    d.splice(
                      index + 1,
                      0,
                      Value.Create(screenShotsSchema.items)
                    );
                  })
                }
              >
                +
              </StyledButton>
              <StyledButton
                disabled={screenShots.length === 1}
                onClick={() =>
                  setScreenShots((d) => {
                    d.splice(index, 1);
                  })
                }
              >
                -
              </StyledButton>
            </XStack>
          }
          label={`image ${index + 1}`}
          value={item.image as string}
          onChange={(e) => handleSS(e, index)}
          name={"image"}
        />
      ))}
    </YStack>
  );
};

export default ScreenShots;
