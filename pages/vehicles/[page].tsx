import { Container } from "@mui/material";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import VehiclesAccordion from "../../components/AccordionComponents/VehiclesAccordion";
import CardComponent from "../../components/CardComponent";
import CustomPaginationComponent from "../../components/CustomPaginationComponent";
import FallbackSkeleton from "../../components/FallbackSkeleton";
import { Vehicles as VehiclesType } from "../../types";
import { getImageSrc } from "../../utils/getImageSrc";

type VehiclesProps = {
  data: VehiclesType;
};

function Vehicles({ data }: VehiclesProps) {
  const router = useRouter();
  const { page } = router.query;

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>Vehicles</title>
          <FallbackSkeleton />
        </Head>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Vehicles</title>
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
        {data.results.map((vehicle) => (
          <CardComponent
            key={vehicle.url}
            description={`
            Model: ${vehicle.model} newLine
            Manufacturer: ${vehicle.manufacturer}`}
            title={vehicle.name}
            imageSrc={getImageSrc("vehicles", vehicle.url)}
            Component={<VehiclesAccordion data={vehicle} />}
          />
        ))}
      </Container>
      <CustomPaginationComponent
        count={data.count}
        page={page}
        endpoint="vehicles"
      />
    </>
  );
}

export default Vehicles;

export async function getStaticPaths() {
  return {
    paths: [{ params: { page: "1" } }],
    fallback: true,
  };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  if (context.params) {
    const page = context?.params.page;
    const result = await fetch("https://swapi.dev/api/vehicles/?page=" + page);
    const data = await result.json();

    return {
      props: { data },
      revalidate: 86400,
      notFound: !data.count,
    };
  }
  return null;
};
