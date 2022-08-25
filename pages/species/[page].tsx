import { Container } from "@mui/material";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import SpeciesAccordion from "../../components/AccordionComponents/SpeciesAccordion";
import CardComponent from "../../components/CardComponent";
import CustomPaginationComponent from "../../components/CustomPaginationComponent";
import FallbackSkeleton from "../../components/FallbackSkeleton";
import { Species as SpeciesType } from "../../types";
import { getImageSrc } from "../../utils/getImageSrc";

type SpeciesProps = {
  data: SpeciesType;
};

function Species({ data }: SpeciesProps) {
  const router = useRouter();
  const { page } = router.query;

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>Species</title>
        </Head>
        <FallbackSkeleton />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Species</title>
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
        {data.results.map((specie) => (
          <CardComponent
            key={specie.url}
            description={specie.classification}
            title={specie.name}
            imageSrc={getImageSrc("species", specie.url)}
            Component={<SpeciesAccordion data={specie} />}
          />
        ))}
      </Container>
      <CustomPaginationComponent
        count={data.count}
        page={page}
        endpoint="species"
      />
    </>
  );
}

export default Species;

export async function getStaticPaths() {
  return {
    paths: [{ params: { page: "1" } }],
    fallback: true,
  };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  if (context.params) {
    const page = context?.params.page;
    const result = await fetch("https://swapi.dev/api/species/?page=" + page);
    const data = await result.json();

    return {
      props: { data },
      revalidate: 86400,
      notFound: !data.count,
    };
  }
  return null;
};
