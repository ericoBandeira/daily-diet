import { StatisticsHeader } from "@components/StatisticsHeader";
import React from "react";
import {
  Container,
  DietCardContainer,
  StatisticsContainer,
  StatisticsTitle,
} from "./styles";
import { NormalCard } from "@components/NormalCard";
import { DietCard } from "@components/DietCard";

export function Statistics() {
  return (
    <Container>
      <StatisticsHeader color="green" />
      <StatisticsContainer>
        <StatisticsTitle>Estatísticas gerais</StatisticsTitle>
        <NormalCard
          numberLabel="22"
          textLabel="melhor sequência de pratos dentro da dieta"
        />
        <NormalCard numberLabel="109" textLabel="refeições registradas" />
        <DietCardContainer>
          <DietCard
            numberLabel="99"
            textLabel="refeições dentro da dienta"
            color="green"
          />
          <DietCard
            numberLabel="10"
            textLabel="refeições fora da dienta"
            color="red"
          />
        </DietCardContainer>
      </StatisticsContainer>
    </Container>
  );
}
