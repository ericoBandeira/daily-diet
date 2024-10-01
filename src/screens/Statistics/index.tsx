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
import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationProp } from "src/routes/app.routes";

type RouteParams = {
  total: number;
  inDietTrue: number;
  percentageString: string;
  maxStreak: number;
};

export function Statistics() {
  const navigation = useNavigation<NavigationProp>();

  function handleGoBackHome() {
    navigation.navigate("home");
  }

  const route = useRoute();

  const { total, inDietTrue, percentageString, maxStreak } =
    route.params as RouteParams;

  const inDietTrueString = `${inDietTrue}`;
  const inDietFalseString = `${total - inDietTrue}`;
  const totalString = `${total}`;
  const maxStreakString = `${maxStreak}`;

  return (
    <Container>
      <StatisticsHeader
        color={(inDietTrue / total) * 100 > 70 ? "green" : "red"}
        goBack={handleGoBackHome}
        percentage={percentageString}
      />
      <StatisticsContainer>
        <StatisticsTitle>Estatísticas gerais</StatisticsTitle>
        <NormalCard
          numberLabel={maxStreakString}
          textLabel="melhor sequência de pratos dentro da dieta"
        />
        <NormalCard
          numberLabel={totalString}
          textLabel="refeições registradas"
        />
        <DietCardContainer>
          <DietCard
            numberLabel={inDietTrueString}
            textLabel="refeições dentro da dienta"
            color="green"
          />
          <DietCard
            numberLabel={inDietFalseString}
            textLabel="refeições fora da dieta"
            color="red"
          />
        </DietCardContainer>
      </StatisticsContainer>
    </Container>
  );
}
