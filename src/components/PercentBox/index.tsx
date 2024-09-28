import { ArrowUpRight } from "phosphor-react-native";
import { Container, IconContainer, PercentNumber, PercentText } from "./styles";

interface PercentBoxProps {
  color: "red" | "green";
}

const colorMap = {
  green: "#639339",
  red: "#BF3B44",
};

export function PercentBox({ color }: PercentBoxProps) {
  return (
    <Container color={color}>
      <IconContainer>
        <ArrowUpRight size={24} color={colorMap[color]} />
      </IconContainer>
      <PercentNumber>90,86%</PercentNumber>
      <PercentText>das refeições dentro da dieta</PercentText>
    </Container>
  );
}
