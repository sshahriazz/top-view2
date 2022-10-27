import type { NextPage } from "next";
import Head from "next/head";
import { Text, YStack } from "stitches-system";
import { useSession } from "next-auth/react";
import { useAtom } from "jotai";
import { dailyPlanAtom } from "atom";
import TextInput from "components/input/Input";
import MidUpdate1 from "components/form/MidUpdate1";
import MidUpdate2 from "components/form/MidUpdate2";
import { ChangeEvent } from "react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const [dailyPlan, setDailyPlan] = useAtom(dailyPlanAtom);

  function handleNameDate(e: ChangeEvent<HTMLInputElement>) {
    setDailyPlan((d) => {
      d[e.target.name as "date" | "taskName"] = e.target.value;

      return d;
    });
  }

  return (
    <YStack>
      <Head>
        <title>Top View</title>
        <meta name="description" content="This is a Progress tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <YStack css={{ maxW: "40%", px: "$5" }} space={"$space$md"}>
        <Text>Task</Text>
        <TextInput
          type="text"
          value={dailyPlan.taskName}
          name={"taskName"}
          onChange={handleNameDate}
        />
        <TextInput
          type="date"
          value={dailyPlan.date}
          name={"date"}
          onChange={handleNameDate}
        />

        <MidUpdate1 />
        <MidUpdate2 />
      </YStack>
    </YStack>
  );
};

export default Home;
