import { StyledButton } from "components/primitives/button.styles";
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
      <XStack space={"$space$4"}>
        <Text>{session?.user?.name}</Text>
        <XStack>
          {!session && (
            <StyledButton onClick={() => signIn()}>Login</StyledButton>
          )}
          {session && (
            <StyledButton onClick={() => signOut()}>Logout</StyledButton>
          )}
        </XStack>
      </XStack>
    </XStack>
  );
};

export default TopNav;
