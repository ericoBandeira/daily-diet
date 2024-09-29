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

export function CreateNewMeal() {
  return (
    <Container>
      <Title>Continue Assim!</Title>
      <SubTitle>
        Você continua <SubTitleBold>dentro da dieta</SubTitleBold>. Muito bem!
      </SubTitle>
      <Image source={inDietImg} />
      <GoHomeButton>
        <GoHomeButtonText>Ir para a página inicial</GoHomeButtonText>
      </GoHomeButton>
    </Container>
  );
}
