import React from "react";
import {
  Container,
  GoHomeButton,
  GoHomeButtonText,
  SubTitle,
  SubTitleBold,
  Title,
} from "./styles";

import inDietImg from "@assets/inDietImg.png";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "src/routes/app.routes";

export function CreateNewMeal() {
  const navigation = useNavigation<NavigationProp>();

  function handleGoBackHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Title>Continue Assim!</Title>
      <SubTitle>
        Você continua <SubTitleBold>dentro da dieta</SubTitleBold>. Muito bem!
      </SubTitle>
      <Image source={inDietImg} />
      <GoHomeButton onPress={handleGoBackHome}>
        <GoHomeButtonText>Ir para a página inicial</GoHomeButtonText>
      </GoHomeButton>
    </Container>
  );
}
