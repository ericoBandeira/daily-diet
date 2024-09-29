import { InputText, InputTitle } from "@components/Input/styles";
import { Container } from "./styles";
import { TextInput, TextInputProps } from "react-native";

type Props = TextInputProps & {
  title: string;
  size?: "sm" | "lg";
  half?: boolean;
  inputRef?: React.RefObject<TextInput>;
};

export function Input({
  title,
  size = "sm",
  half = false,
  inputRef,
  ...rest
}: Props) {
  return (
    <Container half={half}>
      <InputTitle>{title}</InputTitle>
      <InputText ref={inputRef} {...rest} size={size} />
    </Container>
  );
}
