import Head from "next/head";

import { NavBar } from "./components/navbar";
import { Description } from "./components/description";
import { JoinMeeting } from "./components/joinMeeting";

export const Home = () => {
  return (
    <div className="h-full w-full">
      <Head>Spr Meet</Head>
      <div className="h-full w-full">
        <NavBar />
        <div className="p-28 flex flex-col gap-20 lg:w-1/2 sm:w-full xs:w-full">
          <Description />
          <JoinMeeting />
        </div>
      </div>
    </div>
  );
};
