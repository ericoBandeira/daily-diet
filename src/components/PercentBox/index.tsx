import { ArrowUpRight } from "phosphor-react-native";
import { Container, PercentNumber, PercentText } from "./styles";

export function PercentBox() {
  return (
    <Container>
      <ArrowUpRight size={24} color="#639339" />
      <PercentNumber>90,86%</PercentNumber>
      <PercentText>das refeições dentro da dieta</PercentText>
    </Container>
  );
}
