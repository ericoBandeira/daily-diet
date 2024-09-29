import { Container, NumberLabel, TextLabel } from "./styles";

interface NormalCardProps {
  numberLabel: string;
  textLabel: string;
  color: "red" | "green";
}

export function DietCard({ numberLabel, textLabel, color }: NormalCardProps) {
  return (
    <Container color={color}>
      <NumberLabel>{numberLabel}</NumberLabel>
      <TextLabel>{textLabel}</TextLabel>
    </Container>
  );
}
