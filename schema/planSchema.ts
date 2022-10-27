import { Type } from "@sinclair/typebox";

export const taskListSchema = Type.Array(Type.Object({ task: Type.String() }), {
  default: [{ task: "Hello" }, { task: "hi" }],
});
export const screenShotsSchema = Type.Array(
  Type.Object({ image: Type.String() }),
  {
    default: [{ image: "Hello" }],
  }
);

export const planSchema = Type.Object({
  time: Type.String(),
  additionalInfo: Type.String(),
  TaskList: taskListSchema,
});
export const finalUpdateSchema = Type.Object({
  time: Type.String(),
  additionalInfo: Type.String(),
  TaskList: taskListSchema,
  screenShots: screenShotsSchema,
  PrLink: Type.String(),
  videoLink: Type.String(),
});
export const midUpdateSchema = Type.Object({
  time: Type.String(),
  additionalInfo: Type.String(),
  TaskList: taskListSchema,
  PrLink: Type.String(),
  screenShots: screenShotsSchema,
});
export const dailyPlanSchema = Type.Object({
  date: Type.String(),
  taskName: Type.String({ default: "task name" }),
  plan: planSchema,
  midUpdate1: midUpdateSchema,
  midUpdate2: midUpdateSchema,
  finalUpdate: finalUpdateSchema,
});
