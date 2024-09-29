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

export function InOrOutInput() {
  const [inDiet, setInDiet] = useState(true);

  function handleInDietChoice() {
    setInDiet(true);
  }

  function handleNotInDietChoice() {
    setInDiet(false);
  }

  return (
    <Container>
      <Title>Está dentro da dieta?</Title>
      <InOrOutContainer>
        <YesButton onPress={handleInDietChoice} diet={inDiet}>
          <ColorBall color="green" />
          <TextButton>Sim</TextButton>
        </YesButton>
        <NoButton onPress={handleNotInDietChoice} diet={inDiet}>
          <ColorBall color="red" />
          <TextButton>Não</TextButton>
        </NoButton>
      </InOrOutContainer>
    </Container>
  );
}
