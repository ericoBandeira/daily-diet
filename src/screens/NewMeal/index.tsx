import React from "react";

import { Container, DoubleContainer, NewMealContainer } from "./styles";
import { NewMealHeader } from "@components/NewMealHeader";
import { Input } from "@components/Input";

export function NewMeal() {
  return (
    <Container>
      <NewMealHeader />
      <NewMealContainer>
        <Input title="Nome" />
        <Input title="Descrição" size="lg" />
        <DoubleContainer>
          <Input title="Data" half />
          <Input title="Hora" half />
        </DoubleContainer>
      </NewMealContainer>
    </Container>
  );
}
