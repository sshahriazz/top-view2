import type { NextPage } from "next";
import Head from "next/head";
import { YStack } from "stitches-system";
import { useSession } from "next-auth/react";
import { useAtom } from "jotai";
import { dailyPlanAtom, taskListAtom } from "atom";
import TextInput from "components/input/Input";
import { useState } from "react";

const IsObjectRender = ({ objectData }: any) => {
  const [objectKeys] = useState<any>(Object.keys(objectData));

  return (
    <div>
      {objectKeys.map((key: any, index: any) => (
        <div key={index}>
          {typeof objectData[key] === "object" ? (
            <IsObjectRender objectData={objectData[key]} />
          ) : Array.isArray(objectData[key]) ? (
            <IsArrayRender arrayData={objectData[key]} />
          ) : (
            <TextInput
              // objectData[key]
              type="text"
              label="plan-time"
              value={objectData[key]}
              onChange={
                (e) => console.log(e.target.value)
                // setDailyPlan((draft) => {
                //   draft.plan.time = e.target.value;

                //   return draft;
                // })
              }
            />
          )}
        </div>
      ))}
    </div>
  );
};
const IsArrayRender = ({ arrayData, setArrayData }: any) => {
  // const [arrayUpdate, setArrayUpdate] = useState(arrayData);

  return (
    <div>
      {arrayData.map((item: any, index: any) => (
        <TextInput
          key={index}
          // objectData[key]
          type="text"
          label="plan-time"
          value={item}
          onChange={
            (e) => {
              const temp: any = arrayData;
              temp[index] = e.target.value;
              // setArrayUpdate(temp);
              setArrayData(temp);
            }
            // setDailyPlan((draft) => {
            //   draft.plan.time = e.target.value;

            //   return draft;
            // })
          }
        />
      ))}
    </div>
  );
};

const RenderItem = ({ dailyPlan, setDailyPlan }: any) => {
  console.log(dailyPlan);
  const [objectKeys] = useState<any>(Object.keys(dailyPlan));

  return (
    <div>
      {objectKeys.map((key: any, index: any) => (
        <div key={index}>
          {typeof dailyPlan[key] === "object" ? (
            <IsObjectRender objectData={dailyPlan[key]} />
          ) : Array.isArray(dailyPlan[key]) ? (
            <IsArrayRender
              arrayData={dailyPlan[key]}
              setArrayData={(temp: any) =>
                // console.log("array udpated Data : ", temp)
                setDailyPlan((draft: any) => {
                  draft[key] = temp;

                  return draft;
                })
              }
            />
          ) : (
            dailyPlan[key]
          )}
          <br></br>
        </div>
      ))}
    </div>
  );
};

const Home: NextPage = () => {
  const { data: session } = useSession();
  const [dailyPlan, setDailyPlan] = useAtom(dailyPlanAtom);
  const [taskList, setTaskList] = useAtom(taskListAtom);
  console.log("daily Plan : ", dailyPlan);

  return (
    <YStack>
      <Head>
        <title>Top View</title>
        <meta name="description" content="This is a Progress tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <YStack>
        <TextInput
          type="text"
          label="taskName"
          value={dailyPlan.taskName}
          onChange={(e) =>
            setDailyPlan((draft) => {
              draft.taskName = e.target.value;

              return draft;
            })
          }
        />
        <TextInput
          type="text"
          label="plan-time"
          value={dailyPlan.plan.time}
          onChange={(e) =>
            setDailyPlan((draft) => {
              draft.plan.time = e.target.value;

              return draft;
            })
          }
        />
        <TextInput
          type="text"
          label="plan-information"
          value={dailyPlan.plan.additionalInfo}
          onChange={(e) =>
            setDailyPlan((draft) => {
              draft.plan.additionalInfo = e.target.value;

              return draft;
            })
          }
        />
        <TextInput
          type="text"
          label="plan-tasklist1"
          value={dailyPlan.plan.TaskList[0] ? dailyPlan.plan.TaskList[0] : ""}
          onChange={(e) =>
            setDailyPlan((draft) => {
              draft.plan.TaskList[0]
                ? (draft.plan.TaskList[0] = e.target.value)
                : draft.plan.TaskList.push(e.target.value);

              return draft;
            })
          }
        />
        <TextInput
          type="text"
          label="plan-tasklist2"
          value={dailyPlan.plan.TaskList[1] ? dailyPlan.plan.TaskList[1] : ""}
          onChange={(e) =>
            setDailyPlan((draft) => {
              draft.plan.TaskList[1]
                ? (draft.plan.TaskList[1] = e.target.value)
                : draft.plan.TaskList.push(e.target.value);

              return draft;
            })
          }
        />

        <h1> Testing render item</h1>
        <RenderItem dailyPlan={dailyPlan} setDailyPlan={setDailyPlan} />
      </YStack>
    </YStack>
  );
};

export default Home;
