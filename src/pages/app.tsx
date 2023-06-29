import type { NextPage } from "next";
import Head from "next/head";
import { AppView } from "views/app";
const App: NextPage = (props) => {
    return (
        <>
            <Head>
                <title>Residential Dao</title>
                <meta
                    name="description"
                    content="Residential Dao"
                />
            </Head>
            <AppView />
        </>
    );
};

export default App;
