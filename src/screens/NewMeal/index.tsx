import React from "react";

import { Container, DoubleContainer, NewMealContainer } from "./styles";
import { MealHeader } from "@components/MealHeader";
import { Input } from "@components/Input";
import { InOrOutInput } from "@components/InOrOutInput";
import { RegisterButton } from "@components/RegisterButton";

export function NewMeal() {
  return (
    <Container>
      <MealHeader color="gray" title="Nova Refeição" />
      <NewMealContainer>
        <Input title="Nome" />
        <Input title="Descrição" size="lg" />
        <DoubleContainer>
          <Input title="Data" half />
          <Input title="Hora" half />
        </DoubleContainer>
        <InOrOutInput />
        <RegisterButton />
      </NewMealContainer>
    </Container>
  );
}
