import { Container, RegisterButtonContainer, TextButton } from "./styles";

interface RegisterButtonProps {
  registerMeal: () => void;
  buttonLabel: string;
}

export function RegisterButton({
  registerMeal,
  buttonLabel,
}: RegisterButtonProps) {
  return (
    <Container>
      <RegisterButtonContainer onPress={registerMeal}>
        <TextButton>{buttonLabel}</TextButton>
      </RegisterButtonContainer>
    </Container>
  );
}
