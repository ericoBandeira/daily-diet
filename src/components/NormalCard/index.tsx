import { Container, NumberLabel, TextLabel } from "./styles";

interface NormalCardProps {
  numberLabel: string;
  textLabel: string;
}

export function NormalCard({ numberLabel, textLabel }: NormalCardProps) {
  return (
    <Container>
      <NumberLabel>{numberLabel}</NumberLabel>
      <TextLabel>{textLabel}</TextLabel>
    </Container>
  );
}
