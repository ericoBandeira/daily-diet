import { ArrowUpRight } from "phosphor-react-native";
import {
  Container,
  IconButton,
  IconContainer,
  PercentNumber,
  PercentText,
} from "./styles";

interface PercentBoxProps {
  color: "red" | "green";
  goToStatistics: () => void;
  percentage: string;
}

const colorMap = {
  green: "#639339",
  red: "#BF3B44",
};

export function PercentBox({
  color,
  goToStatistics,
  percentage,
}: PercentBoxProps) {
  return (
    <Container color={color}>
      <IconContainer>
        <IconButton onPress={goToStatistics}>
          <ArrowUpRight size={24} color={colorMap[color]} />
        </IconButton>
      </IconContainer>
      <PercentNumber>{percentage}</PercentNumber>
      <PercentText>das refeições dentro da dieta</PercentText>
    </Container>
  );
}
