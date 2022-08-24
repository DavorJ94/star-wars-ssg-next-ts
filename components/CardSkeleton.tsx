import { Container, Skeleton } from "@mui/material";

function CardSkeleton() {
  return (
    <Container
      sx={{
        borderRadius: "5px",
        padding: "0 !important",
        maxWidth: "350px !important",
        overflow: "hidden",
        height: "312px",
        marginTop: "30px",
      }}
      component="article"
    >
      <Skeleton variant="rectangular" width="100%" height="100%" />
    </Container>
  );
}

export default CardSkeleton;
