import { useState } from "react";
import {
  ColorBall,
  Container,
  InOrOutContainer,
  NoButton,
  TextButton,
  Title,
  YesButton,
} from "./styles";

interface InOrOutInputProps {
  inDietChoice: () => void;
  notInDietChoice: () => void;
  inDiet: boolean;
}

export function InOrOutInput({
  inDietChoice,
  notInDietChoice,
  inDiet,
}: InOrOutInputProps) {
  return (
    <Container>
      <Title>Está dentro da dieta?</Title>
      <InOrOutContainer>
        <YesButton onPress={inDietChoice} diet={inDiet}>
          <ColorBall color="green" />
          <TextButton>Sim</TextButton>
        </YesButton>
        <NoButton onPress={notInDietChoice} diet={inDiet}>
          <ColorBall color="red" />
          <TextButton>Não</TextButton>
        </NoButton>
      </InOrOutContainer>
    </Container>
  );
}
