import React, { useEffect, useState } from "react";

import {
  ButtonContainer,
  Container,
  DeleteButton,
  DeleteButtontText,
  EditButton,
  EditButtontText,
  InDietBall,
  InDietContainer,
  InDietText,
  MealDescription,
  MealName,
  MealTime,
  MealTimeTitle,
  NewMealContainer,
} from "./styles";
import { MealHeader } from "@components/MealHeader";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NavigationProp } from "src/routes/app.routes";

interface DietProps {
  time: string;
  name: string;
  inDiet: boolean;
  description: string;
  date: string;
}

type RouteParams = {
  diet: DietProps;
  EditMeal: (day: string, updatedDiet: DietProps) => void;
};

export function Meal() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProp<{ params: RouteParams }, "params">>();

  const { diet: initialDiet, EditMeal } = route.params as RouteParams;

  const [diet, setDiet] = useState(initialDiet);

  function handleGoBackHome() {
    navigation.navigate("home");
  }

  function handleGoToEditPage() {
    navigation.navigate("editPage", { EditMeal, diet });
  }

  useEffect(() => {
    if (route.params?.diet) {
      setDiet(route.params.diet);
    }
  }, [diet]);

  return (
    <Container>
      <MealHeader
        color={diet.inDiet ? "green" : "red"}
        title="Refeição"
        goBack={handleGoBackHome}
      />
      <NewMealContainer>
        <MealName>{diet.name}</MealName>
        <MealDescription>{diet.description}</MealDescription>
        <MealTimeTitle>Data e hora</MealTimeTitle>
        <MealTime>
          {diet.date} às {diet.time}
        </MealTime>
        <InDietContainer>
          <InDietBall color={diet.inDiet ? "green" : "red"} />
          <InDietText>
            {diet.inDiet ? "Dentro da dieta" : "Fora da dieta"}
          </InDietText>
        </InDietContainer>

        <ButtonContainer>
          <EditButton onPress={handleGoToEditPage}>
            <PencilSimpleLine size={16} color="#FFFFFF" />
            <EditButtontText>Editar Refeição</EditButtontText>
          </EditButton>
          <DeleteButton>
            <Trash size={16} />
            <DeleteButtontText>Excluir refeição</DeleteButtontText>
          </DeleteButton>
        </ButtonContainer>
      </NewMealContainer>
    </Container>
  );
}
