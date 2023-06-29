import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Residential Dao</title>
        <meta
          name="description"
          content="Residential Dao"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
