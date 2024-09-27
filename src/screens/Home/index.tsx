import React from "react";

import { Container } from "./styles";
import { Header } from "@components/Header";
import { PercentBox } from "@components/PercentBox";

export function Home() {
  return (
    <Container>
      <Header />
      <PercentBox />
    </Container>
  );
}
