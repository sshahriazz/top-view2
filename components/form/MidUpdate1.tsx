import {
  dailyPlanAtom,
  midUpdate1Atom,
  screenShots1Atom,
  taskList1Atom,
} from "atom";
import ScreenShots from "components/form/ScreenShots";
import TaskList from "components/form/TaskList";
import TextInput from "components/input/Input";
import TextAreaInput from "components/input/TextAreaInput";
import { useAtom } from "jotai";
import { nanoid } from "nanoid";
import React, { ChangeEvent, useEffect } from "react";
import { Text, YStack } from "stitches-system";

const MidUpdate1 = () => {
  const [midUpdate, setMidUpdate] = useAtom(midUpdate1Atom);
  const [taskList] = useAtom(taskList1Atom);
  const [screenShots] = useAtom(screenShots1Atom);
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
      dr.midUpdate1 = midUpdate;

      return dr;
    });
    setDailyPlan((dr) => {
      dr.midUpdate1.TaskList = taskList;

      return dr;
    });
    setDailyPlan((dr) => {
      dr.midUpdate1.screenShots = screenShots;

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
      <TaskList taskListAtom={taskList1Atom} />
      <Text>ScreenShots</Text>
      <ScreenShots screenShotsAtom={screenShots1Atom} />
    </YStack>
  );
};

export default MidUpdate1;
