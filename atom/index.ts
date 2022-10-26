import { atomWithImmer } from "jotai/immer";
import { Value } from "@sinclair/typebox/value";
import { dailyPlanSchema } from "schema/planSchema";
export const dailyPlanAtom = atomWithImmer(Value.Create(dailyPlanSchema));
export const taskListAtom = atomWithImmer(
  Value.Create(dailyPlanSchema.properties.plan.properties.TaskList)
);
