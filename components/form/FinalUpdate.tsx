import {
  dailyPlanAtom,
  finalUpdateAtom,
  screenShots3Atom,
  taskList4Atom,
} from "atom";
import ScreenShots from "components/form/ScreenShots";
import TaskList from "components/form/TaskList";
import TextInput from "components/input/Input";
import TextAreaInput from "components/input/TextAreaInput";
import { useAtom } from "jotai";
import { nanoid } from "nanoid";
import React, { ChangeEvent, useEffect } from "react";
import { Text, YStack } from "stitches-system";

const FinalUpdate = () => {
  const [finalUpdate, setFinalUpdate] = useAtom(finalUpdateAtom);
  const [taskList] = useAtom(taskList4Atom);
  const [screenShots] = useAtom(screenShots3Atom);
  const [, setDailyPlan] = useAtom(dailyPlanAtom);

  function handleMidUpdate(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFinalUpdate((d) => {
      d[e.target.name as "time" | "additionalInfo" | "PrLink"] = e.target.value;

      return d;
    });
  }

  useEffect(() => {
    setDailyPlan((dr) => {
      dr.finalUpdate = finalUpdate;

      return dr;
    });
    setDailyPlan((dr) => {
      dr.finalUpdate.TaskList = taskList;

      return dr;
    });
    setDailyPlan((dr) => {
      dr.finalUpdate.screenShots = screenShots;

      return dr;
    });
  }, [finalUpdate, setDailyPlan, taskList, screenShots]);

  return (
    <YStack
      css={{ border: "1px solid $accents7", borderRadius: "$sm", p: "$4" }}
    >
      {Object.entries(finalUpdate).map(
        ([key, value]) =>
          typeof value === "string" &&
          (key !== "additionalInfo" ? (
            <TextInput
              key={nanoid()}
              type={key === "time" ? "time" : "text"}
              label={key}
              value={value as string}
              onChange={handleMidUpdate}
              name={key}
            />
          ) : (
            <TextAreaInput
              key={nanoid()}
              label="Additional Info"
              value={value as string}
              onChange={handleMidUpdate}
              name={key}
            />
          ))
      )}
      <Text>Tasks</Text>
      <TaskList taskListAtom={taskList4Atom} />
      <Text>Screenshots</Text>
      <ScreenShots screenShotsAtom={screenShots3Atom} />
    </YStack>
  );
};

export default FinalUpdate;
