import { Container } from "@mui/material";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import CharactersAccordion from "../../components/AccordionComponents/CharactersAccordion";
import CardComponent from "../../components/CardComponent";
import CustomPaginationComponent from "../../components/CustomPaginationComponent";
import FallbackSkeleton from "../../components/FallbackSkeleton";
import { Characters } from "../../types";
import { getImageSrc } from "../../utils/getImageSrc";

type CharactersProps = {
  data: Characters;
};

function Characters({ data }: CharactersProps) {
  const router = useRouter();
  const { page } = router.query;

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>Characters</title>
        </Head>
        <FallbackSkeleton />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Characters</title>
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
        {data.results.map((character) => (
          <CardComponent
            key={character.url}
            description={`Birth Year: ${character.birth_year}`}
            title={character.name}
            imageSrc={getImageSrc("characters", character.url)}
            Component={<CharactersAccordion data={character} />}
          />
        ))}
      </Container>
      <CustomPaginationComponent
        count={data.count}
        page={page}
        endpoint="characters"
      />
    </>
  );
}

export default Characters;

export async function getStaticPaths() {
  return {
    paths: [{ params: { page: "1" } }],
    fallback: true,
  };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  if (context.params) {
    const page = context?.params.page;
    const result = await fetch("https://swapi.dev/api/people/?page=" + page);
    const data = await result.json();

    return {
      props: { data },
      revalidate: 86400,
      notFound: !data.count,
    };
  }
  return null;
};
