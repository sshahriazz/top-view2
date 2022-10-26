import type { AppProps } from "next/app";
import { TNextUIProvider } from "stitches-system";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import TopNav from "components/top-nav/TopNav";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session}>
      <TNextUIProvider>
        <TopNav />
        <Component {...pageProps} />
      </TNextUIProvider>
    </SessionProvider>
  );
}

export default MyApp;
