import { ArrowLeft } from "phosphor-react-native";
import {
  BackButton,
  Container,
  NewMealContainer,
  NewMealTitle,
} from "./styles";

interface ColorProps {
  color: "red" | "green" | "gray";
  title: string;
}

export function MealHeader({ color, title }: ColorProps) {
  return (
    <Container color={color}>
      <BackButton>
        <ArrowLeft size={24} color="#1B1D1E" />
      </BackButton>
      <NewMealContainer>
        <NewMealTitle>{title}</NewMealTitle>
      </NewMealContainer>
    </Container>
  );
}
