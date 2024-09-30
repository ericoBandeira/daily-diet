import { Plus } from "phosphor-react-native";
import { AddButton, Container, Title, TextButto } from "./styles";

interface ButtonProps {
  goTo: () => void;
}

export function AddMealButton({ goTo }: ButtonProps) {
  return (
    <Container>
      <Title>Refeições</Title>
      <AddButton onPress={goTo}>
        <Plus size={18} color="#FFF" />
        <TextButto>Nova refeição</TextButto>
      </AddButton>
    </Container>
  );
}
