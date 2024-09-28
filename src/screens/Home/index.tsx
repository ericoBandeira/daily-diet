import React from "react";

import { Container } from "./styles";
import { Header } from "@components/Header";
import { PercentBox } from "@components/PercentBox";
import { AddMealButton } from "@components/AddMealButton";

export function Home() {
  return (
    <Container>
      <Header />
      <PercentBox color="green" />
      <AddMealButton />
    </Container>
  );
}
