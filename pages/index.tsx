import { Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

import HomepageImageComponent from "../components/HomepageImageComponent";
import componentData from "../constants/homepageData";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Star Wars</title>
      </Head>
      <Grid container spacing={2} marginTop={5} justifyContent="center">
        {componentData.map((data) => (
          <Grid
            key={data.title}
            item
            sm={12}
            md={6}
            lg={4}
            display="flex"
            justifyContent="center"
          >
            <HomepageImageComponent data={data} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
