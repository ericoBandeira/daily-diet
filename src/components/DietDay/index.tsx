import { useNavigation, useRoute } from "@react-navigation/native";
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
import { NavigationProp } from "src/routes/app.routes";

interface DietProps {
  time: string;
  name: string;
  inDiet: boolean;
  description: string;
  date: string;
}

interface DietDayProps {
  day: string;
  diet: DietProps[];
  EditMeal: (day: string, updatedDiet: DietProps) => void;
}

export function DietDay({ day, diet, EditMeal }: DietDayProps) {
  const navigation = useNavigation<NavigationProp>();

  function handleGoToMeal(diet: DietProps) {
    navigation.navigate("meal", { diet, EditMeal });
  }

  return (
    <Container>
      <DayTitle>{day}</DayTitle>
      {diet.map((diet: DietProps) => {
        return (
          <MealBox key={diet.time} onPress={() => handleGoToMeal(diet)}>
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
