import { Container } from "@mui/material";
import { ReactNode } from "react";

import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <HeaderComponent />
      <Container
        component="main"
        sx={{ paddingBottom: "100px", maxWidth: "1500px !important" }}
      >
        {children}
      </Container>
      <FooterComponent />
    </>
  );
}

export default Layout;
