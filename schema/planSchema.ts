import { Type } from "@sinclair/typebox";

export const dailyPlanSchema = Type.Object({
  date: Type.String({ default: "date" }),
  taskName: Type.String({ default: "taskName" }),
  plan: Type.Object({
    // time: Type.String(),
    // additionalInfo: Type.String(),
    // TaskList: Type.Array(Type.String()),
    time: Type.String({ default: "time 1" }),
    additionalInfo: Type.String({ default: "Anything" }),
    TaskList: Type.Array(Type.String(), {
      default: ["Task1", "Task2", "Task 3"],
    }),
    screenShots: Type.Array(Type.String(), { default: ["hello", "hi"] }),
    PrLink: Type.String({ default: "P link" }),
    videoLink: Type.String({ default: "video end" }),
  }),
  // midUpdate1: Type.Object({
  //   time: Type.String(),
  //   additionalInfo: Type.String(),
  //   TaskList: Type.Array(Type.String()),
  //   PrLink: Type.String(),
  //   screenShots: Type.Array(Type.String()),
  // }),
  // midUpdate2: Type.Object({
  //   time: Type.String(),
  //   additionalInfo: Type.String(),
  //   TaskList: Type.Array(Type.String()),
  //   screenShots: Type.Array(Type.String()),
  //   PrLink: Type.String(),
  // }),
  finalUpdate: Type.Object({
    time: Type.String({ default: "time 2" }),
    additionalInfo: Type.String({ default: "Anything" }),
    TaskList: Type.Array(Type.String(), {
      default: ["Task1", "Task2", "Task 3"],
    }),
    screenShots: Type.Array(Type.String(), { default: ["hello", "hi"] }),
    PrLink: Type.String({ default: "P link" }),
    videoLink: Type.String({ default: "video" }),
  }),
});
export type DailyPlanType = typeof dailyPlanSchema;
