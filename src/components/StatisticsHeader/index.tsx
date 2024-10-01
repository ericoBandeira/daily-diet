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
  percentage: string;
}

const colorMap = {
  green: "#639339",
  red: "#BF3B44",
};

export function StatisticsHeader({
  color,
  goBack,
  percentage,
}: StatisticsHeaderProps) {
  return (
    <Container color={color}>
      <BackButton onPress={goBack}>
        <ArrowLeft size={24} color={color} />
      </BackButton>
      <InfoContainer>
        <PercentNumber>{percentage}</PercentNumber>
        <PercentText>das refeições dentro da dieta</PercentText>
      </InfoContainer>
    </Container>
  );
}
