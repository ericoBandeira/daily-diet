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
import { useNavigation } from "@react-navigation/native";

export function Statistics() {
  const navigation = useNavigation();

  function handleGoBackHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <StatisticsHeader color="red" goBack={handleGoBackHome} />
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
            textLabel="refeições fora da dieta"
            color="red"
          />
        </DietCardContainer>
      </StatisticsContainer>
    </Container>
  );
}
