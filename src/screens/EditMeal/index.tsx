import React, { useState } from "react";

import { Container, DoubleContainer, NewMealContainer } from "./styles";
import { MealHeader } from "@components/MealHeader";
import { Input } from "@components/Input";
import { InOrOutInput } from "@components/InOrOutInput";
import { RegisterButton } from "@components/RegisterButton";
import { useNavigation, useRoute } from "@react-navigation/native";
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
}

type RouteParams = { AddMeal: ({ day, diet }: DietDayProps) => void };

export function EditMeal() {
  const navigation = useNavigation<NavigationProp>();

  const route = useRoute();
  const { AddMeal } = route.params as RouteParams;

  const [inDiet, setInDiet] = useState(true);
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleGoBackHome() {
    navigation.navigate("home");
  }

  function handleInDietChoice() {
    setInDiet(true);
  }

  function handleNotInDietChoice() {
    setInDiet(false);
  }

  function handleCreateMeal() {}

  function handleSave() {
    const newMeal = {
      day: date,
      diet: [
        {
          time: time,
          name: name,
          inDiet: inDiet,
          description: description,
          date: date,
        },
      ],
    };
    AddMeal(newMeal);
    handleCreateMeal();
  }

  return (
    <Container>
      <MealHeader
        color="gray"
        title="Nova Refeição"
        goBack={handleGoBackHome}
      />
      <NewMealContainer>
        <Input title="Nome" onChangeText={setName} />
        <Input title="Descrição" size="lg" onChangeText={setDescription} />
        <DoubleContainer>
          <Input
            title="Data"
            half
            onChangeText={setDate}
            keyboardType="numeric"
            placeholder="01/01/2001"
          />
          <Input
            title="Hora"
            half
            onChangeText={setTime}
            maxLength={5}
            keyboardType="numeric"
            placeholder="00:00"
          />
        </DoubleContainer>
        <InOrOutInput
          inDietChoice={handleInDietChoice}
          notInDietChoice={handleNotInDietChoice}
          inDiet={inDiet}
        />
        <RegisterButton registerMeal={handleSave} />
      </NewMealContainer>
    </Container>
  );
}
