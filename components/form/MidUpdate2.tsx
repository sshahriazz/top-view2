import { Value } from "@sinclair/typebox/value";
import {
  dailyPlanAtom,
  midUpdate2Atom,
  screenShots2Atom,
  taskList2Atom,
} from "atom";
import TextInput from "components/input/Input";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { screenShotsSchema, taskListSchema } from "schema/planSchema";
import { Text, XStack, YStack } from "stitches-system";

const MidUpdate = () => {
  const [midUpdate, setMidUpdate] = useAtom(midUpdate2Atom);
  const [taskList, setTaskList] = useAtom(taskList2Atom);
  const [screenShots, setScreenShots] = useAtom(screenShots2Atom);
  const [, setDailyPlan] = useAtom(dailyPlanAtom);

  function handleMidUpdate(e) {
    setMidUpdate((d) => {
      d[e.target.name] = e.target.value;

      return d;
    });
  }
  function handleTask(e, index) {
    setTaskList((d) => {
      d[index][e.target.name] = e.target.value;

      return d;
    });
  }
  function handleSS(e, index) {
    setScreenShots((d) => {
      d[index][e.target.name] = e.target.value;

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
    <YStack space={"$space$md"}>
      <Text>Mid Update 2</Text>
      {Object.entries(midUpdate).map(
        ([key, value], index) =>
          typeof value === "string" && (
            <TextInput
              type={key === "time" ? "time" : "text"}
              key={key}
              label={key}
              value={value as string}
              onChange={handleMidUpdate}
              name={key}
            />
          )
      )}
      {taskList.map((item, index) => (
        <XStack key={index}>
          <TextInput
            label={"task"}
            value={item.task as string}
            onChange={(e) => handleTask(e, index)}
            name={"task"}
          />
          <button
            onClick={() =>
              setTaskList((d) => {
                d.push(Value.Create(taskListSchema.items));
              })
            }
          >
            Add
          </button>
          <button
            onClick={() =>
              setTaskList((d) => {
                d.splice(index, 1);
              })
            }
          >
            Remove
          </button>
        </XStack>
      ))}
      {screenShots.map((item, index) => (
        <XStack key={index}>
          <TextInput
            label={"image"}
            value={item.image as string}
            onChange={(e) => handleSS(e, index)}
            name={"image"}
          />
          <button
            onClick={() =>
              setScreenShots((d) => {
                d.push(Value.Create(screenShotsSchema.items));
              })
            }
          >
            Add
          </button>
          <button
            onClick={() =>
              setScreenShots((d) => {
                d.splice(index, 1);
              })
            }
          >
            Remove
          </button>
        </XStack>
      ))}
    </YStack>
  );
};

export default MidUpdate;