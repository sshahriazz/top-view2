import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { Text, XStack } from "stitches-system";

const TopNav = () => {
  const { data: session } = useSession();

  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      css={{ mx: "$3", mt: "$2", p: "$3", border: "1px solid $primary" }}
    >
      <Text>LOGO</Text>
      <XStack>
        {!session && <button onClick={() => signIn()}>Login</button>}
        {session && <button onClick={() => signOut()}>Logout</button>}
      </XStack>
    </XStack>
  );
};

export default TopNav;
