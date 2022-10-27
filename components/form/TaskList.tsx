import { Value } from "@sinclair/typebox/value";
import { taskList1Atom } from "atom";
import TextInput from "components/input/Input";
import { StyledButton } from "components/primitives/button.styles";
import { useAtom } from "jotai";
import React, { ChangeEvent } from "react";
import { taskListSchema } from "schema/planSchema";
import { XStack, YStack } from "stitches-system";

const TaskList = ({ taskListAtom }: { taskListAtom: typeof taskList1Atom }) => {
  const [taskList, setTaskList] = useAtom(taskListAtom);

  function handleTask(e: ChangeEvent<HTMLInputElement>, index: number) {
    setTaskList((d) => {
      d[index][e.target.name as "task"] = e.target.value;

      return d;
    });
  }

  return (
    <YStack>
      {taskList.map((item, index) => (
        <TextInput
          key={index}
          actionComponent={
            <XStack>
              <StyledButton
                disabled={taskList.length === 10}
                onClick={() =>
                  setTaskList((d) => {
                    d.splice(index + 1, 0, Value.Create(taskListSchema.items));
                  })
                }
              >
                +
              </StyledButton>
              <StyledButton
                css={{ backgroundColor: "$warning" }}
                disabled={taskList.length === 1}
                onClick={() =>
                  setTaskList((d) => {
                    d.splice(index, 1);
                  })
                }
              >
                -
              </StyledButton>
            </XStack>
          }
          label={`task ${index + 1}`}
          value={item.task as string}
          onChange={(e) => handleTask(e, index)}
          name={"task"}
        />
      ))}
    </YStack>
  );
};

export default TaskList;
