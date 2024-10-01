import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import { Header } from "@components/Header";
import { PercentBox } from "@components/PercentBox";
import { AddMealButton } from "@components/AddMealButton";
import { FlatList } from "react-native";
import { DietDay } from "@components/DietDay";
import { useNavigation } from "@react-navigation/native";
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

interface SendToStatisticsProps {
  total: number;
  inDietTrue: number;
  percentageString: string;
  maxStreak: number;
}

export function Home() {
  const [dietDay, setDietDay] = useState<DietDayProps[]>([
    {
      day: "12.08.22",
      diet: [
        {
          time: "20:00",
          name: "X-tudo",
          inDiet: false,
          date: "12/08/2022",
          description: "Lorem ipsum teste",
        },
        {
          time: "16:00",
          name: "Whey protein com leite",
          inDiet: true,
          date: "12/08/2022",
          description: "Lorem ipsum teste",
        },
        {
          time: "12:30",
          name: "Salada cesar com frango",
          inDiet: true,
          date: "12/08/2022",
          description: "Lorem ipsum teste",
        },
        {
          time: "09:30",
          name: "Vitamina de banana com Whey",
          inDiet: true,
          date: "12/08/2022",
          description: "Lorem ipsum teste",
        },
      ],
    },
    {
      day: "11.08.22",
      diet: [
        {
          time: "20:00",
          name: "X-salada",
          inDiet: true,
          date: "11/08/2022",
          description: "Lorem ipsum teste",
        },
        {
          time: "16:00",
          name: "Whey protein com leite",
          inDiet: true,
          date: "11/08/2022",
          description: "Lorem ipsum teste",
        },
        {
          time: "12:30",
          name: "Salada cesar com frango",
          inDiet: true,
          date: "11/08/2022",
          description: "Lorem ipsum teste",
        },
        {
          time: "09:30",
          name: "Vitamina de banana com Whey",
          inDiet: true,
          date: "11/08/2022",
          description: "Lorem ipsum teste",
        },
      ],
    },
    {
      day: "10.08.22",
      diet: [
        {
          time: "20:00",
          name: "X-tudo",
          inDiet: false,
          date: "10/08/2022",
          description: "Lorem ipsum teste",
        },
        {
          time: "16:00",
          name: "Whey protein com leite",
          inDiet: true,
          date: "10/08/2022",
          description: "Lorem ipsum teste",
        },
        {
          time: "12:30",
          name: "Salada cesar com frango",
          inDiet: true,
          date: "10/08/2022",
          description: "Lorem ipsum teste",
        },
        {
          time: "09:30",
          name: "Vitamina de banana com Whey",
          inDiet: true,
          date: "10/08/2022",
          description: "Lorem ipsum teste",
        },
      ],
    },
  ]);

  const [currentStreak, setCurrentStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  const navigation = useNavigation<NavigationProp>();

  function handleStatistics({
    total,
    inDietTrue,
    percentageString,
    maxStreak,
  }: SendToStatisticsProps) {
    navigation.navigate("statistics", {
      inDietTrue,
      total,
      percentageString,
      maxStreak,
    });
  }

  function handleCreateNewMeal() {
    navigation.navigate("newMeal");
  }

  const { total, inDietTrue } = dietDay.reduce(
    (acc, day) => {
      const totalInDay = day.diet.length;
      const inDietTrueInDay = day.diet.filter((meal) => meal.inDiet).length;

      acc.total += totalInDay;
      acc.inDietTrue += inDietTrueInDay;

      return acc;
    },
    { total: 0, inDietTrue: 0 }
  );

  const percentage = ((inDietTrue / total) * 100).toFixed(2);
  const percentageString = `${percentage}%`;

  useEffect(() => {
    let tempCurrentStreak = 0;
    let tempMaxStreak = 0;

    dietDay.forEach((day) => {
      day.diet.forEach((meal) => {
        if (meal.inDiet) {
          tempCurrentStreak += 1;
          if (tempCurrentStreak > tempMaxStreak) {
            tempMaxStreak = tempCurrentStreak;
          }
        } else {
          tempCurrentStreak = 0;
        }
      });
    });

    setCurrentStreak(tempCurrentStreak);
    setMaxStreak(tempMaxStreak);
  }, [dietDay]);

  return (
    <Container>
      <Header />
      <PercentBox
        color={(inDietTrue / total) * 100 > 75 ? "green" : "red"}
        goToStatistics={() =>
          handleStatistics({ total, inDietTrue, percentageString, maxStreak })
        }
        percentage={percentage}
      />
      <AddMealButton goTo={handleCreateNewMeal} />
      <FlatList
        style={{ marginTop: 10 }}
        data={dietDay}
        keyExtractor={(item) => item.day}
        renderItem={({ item }) => <DietDay day={item.day} diet={item.diet} />}
      />
    </Container>
  );
}
