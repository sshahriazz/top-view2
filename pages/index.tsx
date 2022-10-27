import type { NextPage } from "next";
import Head from "next/head";
import { Text, XStack, YStack } from "stitches-system";
import MidUpdate1 from "components/form/MidUpdate1";
import MidUpdate2 from "components/form/MidUpdate2";
import Plan from "components/form/Plan";
import FinalUpdate from "components/form/FinalUpdate";
import TaskInfo from "components/form/TaskInfo";
import { useAtom } from "jotai";
import { dailyPlanAtom } from "atom";
import { nanoid } from "nanoid";

const Home: NextPage = () => {
  const [data] = useAtom(dailyPlanAtom);

  return (
    <YStack>
      <Head>
        <title>Top View</title>
        <meta name="description" content="This is a Progress tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <XStack>
        <YStack css={{ w: "40%", px: "$5", mt: "$7" }}>
          <Text>Task Info</Text>
          <TaskInfo />
          <Text>Plan</Text>
          <Plan />
          <Text>Update 1</Text>

          <MidUpdate1 />
          <Text>Update 2</Text>

          <MidUpdate2 />
          <Text>Final Update</Text>

          <FinalUpdate />
        </YStack>
        <YStack css={{ w: "60%", px: "$5", mt: "$7" }}>
          <Text>{data.taskName}</Text>
          <Text>{data.date} </Text>
          <Text> {data.plan.time} </Text>
          <Text>{data.plan.additionalInfo} </Text>

          {data.plan.TaskList.map((item) => (
            <Text key={nanoid()}>{item.task}</Text>
          ))}
        </YStack>
      </XStack>
    </YStack>
  );
};

export default Home;
