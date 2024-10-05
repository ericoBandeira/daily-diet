import React, { useEffect, useState } from "react";

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

type RouteParams = {
  diet: DietProps;
  EditMeal: (day: string, updatedDiet: DietProps) => void;
};

export function EditMeal() {
  const navigation = useNavigation<NavigationProp>();

  const route = useRoute();
  const { diet, EditMeal } = route.params as RouteParams;

  const [inDiet, setInDiet] = useState(true);
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleGoBack() {
    navigation.goBack();
  }

  function handleInDietChoice() {
    setInDiet(true);
  }

  function handleNotInDietChoice() {
    setInDiet(false);
  }

  function handleEdit() {
    const editMeal = {
      time: time,
      name: name,
      inDiet: inDiet,
      description: description,
      date: date,
    };
    EditMeal(date, editMeal);
    handleGoBack();
  }

  useEffect(() => {
    setDate(diet.date);
    setTime(diet.time);
    setName(diet.name);
    setDescription(diet.description);
    setInDiet(diet.inDiet);
  });
  return (
    <Container>
      <MealHeader color="gray" title="Editar Refeição" goBack={handleGoBack} />
      <NewMealContainer>
        <Input title="Nome" onChangeText={setName} value={name} />
        <Input
          title="Descrição"
          size="lg"
          onChangeText={setDescription}
          value={description}
        />
        <DoubleContainer>
          <Input
            title="Data"
            half
            onChangeText={setDate}
            value={date}
            keyboardType="numeric"
            placeholder="01/01/2001"
          />
          <Input
            title="Hora"
            half
            onChangeText={setTime}
            value={time}
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
        <RegisterButton
          registerMeal={handleEdit}
          buttonLabel="Salvar alterações"
        />
      </NewMealContainer>
    </Container>
  );
}
