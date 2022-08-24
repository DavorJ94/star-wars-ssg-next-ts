import { Container } from "@mui/material";
import React from "react";

import CardSkeleton from "../components/CardSkeleton";

function FallbackSkeleton() {
  return (
    <Container
      sx={{
        display: "grid",
        gap: "10px",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        marginTop: "30px",
        maxWidth: "1500px !important",
      }}
    >
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </Container>
  );
}

export default FallbackSkeleton;
