import React, { useState } from "react";

import { Container, DoubleContainer, NewMealContainer } from "./styles";
import { MealHeader } from "@components/MealHeader";
import { Input } from "@components/Input";
import { InOrOutInput } from "@components/InOrOutInput";
import { RegisterButton } from "@components/RegisterButton";
import { useNavigation } from "@react-navigation/native";

export function NewMeal() {
  const [inDiet, setInDiet] = useState(true);
  const navigation = useNavigation();

  function handleGoBackHome() {
    navigation.navigate("home");
  }

  function handleCreateMeal() {
    if (inDiet) {
      navigation.navigate("createNewMeal");
    } else {
      navigation.navigate("createNewMealNotInDiet");
    }
  }

  return (
    <Container>
      <MealHeader
        color="gray"
        title="Nova Refeição"
        goBack={handleGoBackHome}
      />
      <NewMealContainer>
        <Input title="Nome" />
        <Input title="Descrição" size="lg" />
        <DoubleContainer>
          <Input title="Data" half />
          <Input title="Hora" half />
        </DoubleContainer>
        <InOrOutInput />
        <RegisterButton registerMeal={handleCreateMeal} />
      </NewMealContainer>
    </Container>
  );
}
