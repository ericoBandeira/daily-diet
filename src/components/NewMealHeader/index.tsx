import { ArrowLeft } from "phosphor-react-native";
import {
  BackButton,
  Container,
  NewMealContainer,
  NewMealTitle,
} from "./styles";

export function NewMealHeader() {
  return (
    <Container>
      <BackButton>
        <ArrowLeft size={24} color="#1B1D1E" />
      </BackButton>
      <NewMealContainer>
        <NewMealTitle>Nova refeição</NewMealTitle>
      </NewMealContainer>
    </Container>
  );
}
