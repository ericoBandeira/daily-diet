import { ArrowLeft } from "phosphor-react-native";
import {
  BackButton,
  Container,
  NewMealContainer,
  NewMealTitle,
} from "./styles";

interface HeaderProps {
  color: "red" | "green" | "gray";
  title: string;
  goBack?: () => void;
}

export function MealHeader({ color, title, goBack }: HeaderProps) {
  return (
    <Container color={color}>
      <BackButton onPress={goBack}>
        <ArrowLeft size={24} color="#1B1D1E" />
      </BackButton>
      <NewMealContainer>
        <NewMealTitle>{title}</NewMealTitle>
      </NewMealContainer>
    </Container>
  );
}
