import { Plus } from "phosphor-react-native";
import { AddButton, Container, Title, TextButto } from "./styles";

export function AddMealButton() {
  return (
    <Container>
      <Title>Refeições</Title>
      <AddButton>
        <Plus size={18} color="#FFF" />
        <TextButto>Nova refeição</TextButto>
      </AddButton>
    </Container>
  );
}
