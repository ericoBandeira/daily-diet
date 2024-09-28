import React, { useState } from "react";

import { Container } from "./styles";
import { Header } from "@components/Header";
import { PercentBox } from "@components/PercentBox";
import { AddMealButton } from "@components/AddMealButton";
import { FlatList } from "react-native";
import { DietDay } from "@components/DietDay";

interface DietProps {
  time: string;
  name: string;
  inDiet: boolean;
}

interface DietDayProps {
  day: string;
  diet: DietProps[];
}

export function Home() {
  const [dietDay, setDietDay] = useState<DietDayProps[]>([
    {
      day: "12.08.22",
      diet: [
        { time: "20:00", name: "X-tudo", inDiet: false },
        { time: "16:00", name: "Whey protein com leite", inDiet: true },
        { time: "12:30", name: "Salada cesar com frango", inDiet: true },
        { time: "09:30", name: "Vitamina de banana com Whey", inDiet: true },
      ],
    },
    {
      day: "11.08.22",
      diet: [
        { time: "20:00", name: "X-tudo", inDiet: false },
        { time: "16:00", name: "Whey protein com leite", inDiet: true },
        { time: "12:30", name: "Salada cesar com frango", inDiet: true },
        { time: "09:30", name: "Vitamina de banana com Whey", inDiet: true },
      ],
    },
    {
      day: "10.08.22",
      diet: [
        { time: "20:00", name: "X-tudo", inDiet: false },
        { time: "16:00", name: "Whey protein com leite", inDiet: true },
        { time: "12:30", name: "Salada cesar com frango", inDiet: true },
        { time: "09:30", name: "Vitamina de banana com Whey", inDiet: true },
      ],
    },
  ]);

  return (
    <Container>
      <Header />
      <PercentBox color="green" />
      <AddMealButton />
      <FlatList
        data={dietDay}
        keyExtractor={(item) => item.day}
        renderItem={({ item }) => <DietDay day={item.day} diet={item.diet} />}
      />
    </Container>
  );
}
