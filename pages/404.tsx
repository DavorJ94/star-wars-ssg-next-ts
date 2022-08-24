import { Container, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

const MissingPage = () => {
  return (
    <>
      <Head>
        <title>Star Wars</title>
      </Head>
      <Container
        sx={{
          textAlign: "center",
          marginTop: "200px",
        }}
        maxWidth="md"
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Ooops...
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          That page cannot be found
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Go back to the{" "}
          <Link href="/">
            <Typography
              variant="body1"
              component="a"
              textTransform="uppercase"
              color="secondary"
              sx={{
                textDecoration: "underline",
                fontWeight: "bold",
                letterSpacing: 0.5,
                "&:hover": {
                  color: "goldenrod",
                  cursor: "pointer",
                },
              }}
            >
              homepage
            </Typography>
          </Link>
        </Typography>
      </Container>
    </>
  );
};

export default MissingPage;
