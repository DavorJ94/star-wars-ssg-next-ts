import { Container, Pagination } from "@mui/material";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";

type CustomPaginationProps = {
  count: number;
  page: string | string[] | undefined;
  endpoint: string;
};

function CustomPaginationComponent({
  count,
  page,
  endpoint,
}: CustomPaginationProps) {
  const router = useRouter();

  function handleChange(e: ChangeEvent<unknown>, inputPage: number) {
    if (inputPage !== Number(page)) router.push(`/${endpoint}/${inputPage}`);
  }

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Pagination
        count={Math.ceil(count / 10)}
        color="secondary"
        variant="outlined"
        sx={{
          marginTop: "30px",
          textAlign: "center",
        }}
        page={Number(page)}
        size="large"
        onChange={handleChange}
      />
    </Container>
  );
}

export default CustomPaginationComponent;
