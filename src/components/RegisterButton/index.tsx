import { Container, RegisterButtonContainer, TextButton } from "./styles";

interface RegisterButtonProps {
  registerMeal: () => void;
}

export function RegisterButton({ registerMeal }: RegisterButtonProps) {
  return (
    <Container>
      <RegisterButtonContainer onPress={registerMeal}>
        <TextButton>Cadastrar refeição</TextButton>
      </RegisterButtonContainer>
    </Container>
  );
}
