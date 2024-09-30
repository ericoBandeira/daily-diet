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
import { NavigationProp } from "src/routes/app.routes";

export function CreateNewMealNotInDiet() {
  const navigation = useNavigation<NavigationProp>();

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
