import {
  dailyPlanAtom,
  midUpdate2Atom,
  screenShots2Atom,
  taskList2Atom,
} from "atom";
import ScreenShots from "components/form/ScreenShots";
import TaskList from "components/form/TaskList";
import TextInput from "components/input/Input";
import TextAreaInput from "components/input/TextAreaInput";
import { useAtom } from "jotai";
import { nanoid } from "nanoid";
import React, { ChangeEvent, useEffect } from "react";
import { Text, YStack } from "stitches-system";

const MidUpdate2 = () => {
  const [midUpdate, setMidUpdate] = useAtom(midUpdate2Atom);
  const [taskList] = useAtom(taskList2Atom);
  const [screenShots] = useAtom(screenShots2Atom);
  const [, setDailyPlan] = useAtom(dailyPlanAtom);

  function handleMidUpdate(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setMidUpdate((d) => {
      d[e.target.name as "time" | "additionalInfo" | "PrLink"] = e.target.value;

      return d;
    });
  }

  useEffect(() => {
    setDailyPlan((dr) => {
      dr.midUpdate2 = midUpdate;

      return dr;
    });
    setDailyPlan((dr) => {
      dr.midUpdate2.TaskList = taskList;

      return dr;
    });
    setDailyPlan((dr) => {
      dr.midUpdate2.screenShots = screenShots;

      return dr;
    });
  }, [midUpdate, setDailyPlan, taskList, screenShots]);

  return (
    <YStack
      css={{ border: "1px solid $accents7", borderRadius: "$sm", p: "$4" }}
    >
      {Object.entries(midUpdate).map(
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
      <TaskList taskListAtom={taskList2Atom} />
      <Text>Screenshots</Text>
      <ScreenShots screenShotsAtom={screenShots2Atom} />
    </YStack>
  );
};

export default MidUpdate2;
