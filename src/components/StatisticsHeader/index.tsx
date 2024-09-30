import { ArrowLeft } from "phosphor-react-native";
import {
  BackButton,
  Container,
  InfoContainer,
  PercentNumber,
  PercentText,
} from "./styles";

interface StatisticsHeaderProps {
  color: "red" | "green";
  goBack: () => void;
}

const colorMap = {
  green: "#639339",
  red: "#BF3B44",
};

export function StatisticsHeader({ color, goBack }: StatisticsHeaderProps) {
  return (
    <Container color={color}>
      <BackButton onPress={goBack}>
        <ArrowLeft size={24} color={color} />
      </BackButton>
      <InfoContainer>
        <PercentNumber>90,86%</PercentNumber>
        <PercentText>das refeições dentro da dieta</PercentText>
      </InfoContainer>
    </Container>
  );
}
