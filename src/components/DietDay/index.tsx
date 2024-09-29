import {
  Container,
  DayTitle,
  FoodInfoContainer,
  InDietIcon,
  MealBox,
  MealName,
  MealTime,
  Separator,
} from "./styles";

interface DietProps {
  time: string;
  name: string;
  inDiet: boolean;
}

interface DietDayProps {
  day: string;
  diet: DietProps[];
}

export function DietDay({ day, diet }: DietDayProps) {
  return (
    <Container>
      <DayTitle>{day}</DayTitle>
      {diet.map((diet: DietProps) => {
        return (
          <MealBox key={diet.time}>
            <FoodInfoContainer>
              <MealTime>{diet.time}</MealTime>
              <Separator>|</Separator>
              <MealName>{diet.name}</MealName>
            </FoodInfoContainer>
            <InDietIcon inDiet={diet.inDiet} />
          </MealBox>
        );
      })}
    </Container>
  );
}
