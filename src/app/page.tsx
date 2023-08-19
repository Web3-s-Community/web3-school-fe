import ChallengePage from "./challenges/page";
import Head from "next/head";

export default function Home() {
  return (
      <>
        <Head>
          <link rel="icon" href="/svgs/logo2.svg" />
        </Head>
          <ChallengePage />
      </>
  );
}
