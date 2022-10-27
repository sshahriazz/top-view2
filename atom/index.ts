import { atomWithImmer } from "jotai/immer";
import { Value } from "@sinclair/typebox/value";
import {
  dailyPlanSchema,
  finalUpdateSchema,
  midUpdateSchema,
  planSchema,
  screenShotsSchema,
  taskListSchema,
} from "schema/planSchema";

export const dailyPlanAtom = atomWithImmer(Value.Create(dailyPlanSchema));
export const taskList1Atom = atomWithImmer(Value.Create(taskListSchema));
export const screenShots1Atom = atomWithImmer(Value.Create(screenShotsSchema));
export const taskList2Atom = atomWithImmer(Value.Create(taskListSchema));
export const screenShots2Atom = atomWithImmer(Value.Create(screenShotsSchema));
export const planAtom = atomWithImmer(Value.Create(planSchema));
export const midUpdate1Atom = atomWithImmer(Value.Create(midUpdateSchema));
export const midUpdate2Atom = atomWithImmer(Value.Create(midUpdateSchema));
export const finalUpdateAtom = atomWithImmer(Value.Create(finalUpdateSchema));
