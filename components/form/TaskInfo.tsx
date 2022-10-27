import { dailyPlanAtom } from "atom";
import TextInput from "components/input/Input";
import { useAtom } from "jotai";
import React, { ChangeEvent } from "react";
import { YStack } from "stitches-system";

const TaskInfo = () => {
  const [dailyPlan, setDailyPlan] = useAtom(dailyPlanAtom);
  function handleNameDate(e: ChangeEvent<HTMLInputElement>) {
    setDailyPlan((d) => {
      d[e.target.name as "date" | "taskName"] = e.target.value;

      return d;
    });
  }

  return (
    <YStack
      css={{ border: "1px solid $accents7", borderRadius: "$sm", p: "$4" }}
    >
      <TextInput
        label="Task Name"
        type="text"
        value={dailyPlan.taskName}
        name={"taskName"}
        onChange={handleNameDate}
      />
      <TextInput
        label="Date"
        type="date"
        value={dailyPlan.date}
        name={"date"}
        onChange={handleNameDate}
      />
    </YStack>
  );
};

export default TaskInfo;
