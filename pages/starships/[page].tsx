import { Container } from "@mui/material";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import StarshipsAccordion from "../../components/AccordionComponents/StarshipsAccordion";
import CardComponent from "../../components/CardComponent";
import CustomPaginationComponent from "../../components/CustomPaginationComponent";
import FallbackSkeleton from "../../components/FallbackSkeleton";
import { Starships } from "../../types";
import { getImageSrc } from "../../utils/getImageSrc";

type StarshipsProps = {
  data: Starships;
};

function Starships({ data }: StarshipsProps) {
  const router = useRouter();
  const { page } = router.query;

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>Starships</title>
        </Head>
        <FallbackSkeleton />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Starships</title>
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
        {data.results.map((starship) => (
          <CardComponent
            key={starship.url}
            description={`
            Model: ${starship.model} newLine
            Manufacturer: ${starship.manufacturer}`}
            title={starship.name}
            imageSrc={getImageSrc("starships", starship.url)}
            Component={<StarshipsAccordion data={starship} />}
          />
        ))}
      </Container>
      <CustomPaginationComponent
        count={data.count}
        page={page}
        endpoint="starships"
      />
    </>
  );
}

export default Starships;

export async function getStaticPaths() {
  return {
    paths: [{ params: { page: "1" } }],
    fallback: true,
  };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  if (context.params) {
    const page = context?.params.page;
    const result = await fetch("https://swapi.dev/api/starships/?page=" + page);
    const data = await result.json();

    return {
      props: { data },
      revalidate: 86400,
      notFound: !data.count,
    };
  }
  return null;
};
