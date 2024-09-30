import React from "react";

import NotInDietImg from "@assets/NoInDietImg.png";
import { Image } from "react-native";
import {
  Container,
  GoHomeButton,
  GoHomeButtonText,
  SubTitle,
  SubTitleBold,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export function CreateNewMealNotInDiet() {
  const navigation = useNavigation();

  function handleGoBackHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Title>Que pena!</Title>
      <SubTitle>
        Você <SubTitleBold>saiu da dieta</SubTitleBold> dessa vez, mas continue
        se esforçando e não desista!
      </SubTitle>
      <Image source={NotInDietImg} />
      <GoHomeButton onPress={handleGoBackHome}>
        <GoHomeButtonText>Ir para a página inicial</GoHomeButtonText>
      </GoHomeButton>
    </Container>
  );
}
