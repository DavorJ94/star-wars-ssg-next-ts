import { Container } from "@mui/material";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import FilmsAccordion from "../../components/AccordionComponents/FilmsAccordion";
import CardComponent from "../../components/CardComponent";
import CustomPaginationComponent from "../../components/CustomPaginationComponent";
import FallbackSkeleton from "../../components/FallbackSkeleton";
import { Films as FilmsType } from "../../types";
import { getImageSrc } from "../../utils/getImageSrc";

type FilmsProps = {
  data: FilmsType;
};

function Films({ data }: FilmsProps) {
  const router = useRouter();
  const { page } = router.query;

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>Films</title>
        </Head>
        <FallbackSkeleton />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Films</title>
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
        {data.results.map((film) => (
          <CardComponent
            key={film.url}
            description={film.opening_crawl}
            title={film.title}
            imageSrc={getImageSrc("films", film.url)}
            Component={<FilmsAccordion data={film} />}
          />
        ))}
      </Container>
      <CustomPaginationComponent
        count={data.count}
        page={page}
        endpoint="films"
      />
    </>
  );
}

export default Films;

export async function getStaticPaths() {
  return {
    paths: [{ params: { page: "1" } }],
    fallback: true,
  };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  if (context.params) {
    const page = context?.params.page;
    const result = await fetch("https://swapi.dev/api/films/?page=" + page);
    const data = await result.json();

    return {
      props: { data },
      revalidate: 86400,
      notFound: !data.count,
    };
  }
  return null;
};
