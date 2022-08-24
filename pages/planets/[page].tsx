import { Container } from "@mui/material";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import PlanetsAccordion from "../../components/AccordionComponents/PlanetsAccordion";
import CardComponent from "../../components/CardComponent";
import CustomPaginationComponent from "../../components/CustomPaginationComponent";
import FallbackSkeleton from "../../components/FallbackSkeleton";
import { Planets } from "../../types";
import { getImageSrc } from "../../utils/getImageSrc";

type PlanetsProps = {
  data: Planets;
};

function Planets({ data }: PlanetsProps) {
  const router = useRouter();
  const { page } = router.query;

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>Planets</title>
        </Head>
        <FallbackSkeleton />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Planets</title>
      </Head>
      <Container
        sx={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          marginTop: "30px",
          maxWidth: "1500px !important",
        }}
      >
        {data.results.map((planet) => (
          <CardComponent
            key={planet.url}
            description={`Terrain: ${planet.terrain}`}
            title={planet.name}
            imageSrc={getImageSrc("planets", planet.url)}
            Component={<PlanetsAccordion data={planet} />}
          />
        ))}
      </Container>
      <CustomPaginationComponent
        count={data.count}
        page={page}
        endpoint="planets"
      />
    </>
  );
}

export default Planets;

export async function getStaticPaths() {
  return {
    paths: [{ params: { page: "1" } }],
    fallback: true,
  };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  if (context.params) {
    const page = context?.params.page;
    const result = await fetch("https://swapi.dev/api/planets/?page=" + page);
    const data = await result.json();

    return {
      props: { data },
      revalidate: 86400,
      notFound: !data.count,
    };
  }
  return null;
};
