import { dailyPlanAtom, planAtom, taskList3Atom } from "atom";
import TaskList from "components/form/TaskList";
import TextInput from "components/input/Input";
import TextAreaInput from "components/input/TextAreaInput";
import { useAtom } from "jotai";
import { nanoid } from "nanoid";
import React, { ChangeEvent, useEffect } from "react";
import { Text, YStack } from "stitches-system";

const Plan = () => {
  const [planUpdate, setPlanUpdate] = useAtom(planAtom);
  const [taskList] = useAtom(taskList3Atom);
  const [, setDailyPlan] = useAtom(dailyPlanAtom);

  function handleMidUpdate(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setPlanUpdate((d) => {
      d[e.target.name as "time" | "additionalInfo"] = e.target.value;

      return d;
    });
  }

  useEffect(() => {
    setDailyPlan((dr) => {
      dr.plan = planUpdate;

      return dr;
    });
    setDailyPlan((dr) => {
      dr.plan.TaskList = taskList;

      return dr;
    });
  }, [planUpdate, setDailyPlan, taskList]);

  return (
    <YStack
      css={{ border: "1px solid $accents7", borderRadius: "$sm", p: "$4" }}
    >
      {Object.entries(planUpdate).map(
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
      <TaskList taskListAtom={taskList3Atom} />
    </YStack>
  );
};

export default Plan;
