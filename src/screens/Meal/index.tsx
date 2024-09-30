import React from "react";

import {
  ButtonContainer,
  Container,
  DeleteButton,
  DeleteButtontText,
  EditButton,
  EditButtontText,
  InDietBall,
  InDietContainer,
  InDietText,
  MealDescription,
  MealName,
  MealTime,
  MealTimeTitle,
  NewMealContainer,
} from "./styles";
import { MealHeader } from "@components/MealHeader";
import { PencilSimpleLine, Trash } from "phosphor-react-native";

export function Meal() {
  return (
    <Container>
      <MealHeader color="green" title="Refeição" />
      <NewMealContainer>
        <MealName>Sanduíche</MealName>
        <MealDescription>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </MealDescription>
        <MealTimeTitle>Data e hora</MealTimeTitle>
        <MealTime>12/08/2022 às 16:00</MealTime>
        <InDietContainer>
          <InDietBall color="green" />
          <InDietText>Dentro da dieta</InDietText>
        </InDietContainer>

        <ButtonContainer>
          <EditButton>
            <PencilSimpleLine size={16} color="#FFFFFF" />
            <EditButtontText>Editar Refeição</EditButtontText>
          </EditButton>
          <DeleteButton>
            <Trash size={16} />
            <DeleteButtontText>Excluir refeição</DeleteButtontText>
          </DeleteButton>
        </ButtonContainer>
      </NewMealContainer>
    </Container>
  );
}
