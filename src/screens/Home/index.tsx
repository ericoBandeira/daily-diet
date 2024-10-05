import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import { Header } from "@components/Header";
import { PercentBox } from "@components/PercentBox";
import { AddMealButton } from "@components/AddMealButton";
import { FlatList } from "react-native";
import { DietDay } from "@components/DietDay";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "src/routes/app.routes";
import { EmptyList } from "@components/EmptyList";

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

type FunctionCreateProps = ({ day, diet }: DietDayProps) => void;

export function Home() {
  const navigation = useNavigation<NavigationProp>();

  const [dietDay, setDietDay] = useState<DietDayProps[]>([
    // {
    //   day: "12.08.22",
    //   diet: [
    //     {
    //       time: "20:00",
    //       name: "X-tudo",
    //       inDiet: false,
    //       date: "12/08/2022",
    //       description: "Lorem ipsum teste",
    //     },
    //     {
    //       time: "16:00",
    //       name: "Whey protein com leite",
    //       inDiet: true,
    //       date: "12/08/2022",
    //       description: "Lorem ipsum teste",
    //     },
    //     {
    //       time: "12:30",
    //       name: "Salada cesar com frango",
    //       inDiet: true,
    //       date: "12/08/2022",
    //       description: "Lorem ipsum teste",
    //     },
    //     {
    //       time: "09:30",
    //       name: "Vitamina de banana com Whey",
    //       inDiet: true,
    //       date: "12/08/2022",
    //       description: "Lorem ipsum teste",
    //     },
    //   ],
    // },
    // {
    //   day: "11.08.22",
    //   diet: [
    //     {
    //       time: "20:00",
    //       name: "X-salada",
    //       inDiet: true,
    //       date: "11/08/2022",
    //       description: "Lorem ipsum teste",
    //     },
    //     {
    //       time: "16:00",
    //       name: "Whey protein com leite",
    //       inDiet: true,
    //       date: "11/08/2022",
    //       description: "Lorem ipsum teste",
    //     },
    //     {
    //       time: "12:30",
    //       name: "Salada cesar com frango",
    //       inDiet: true,
    //       date: "11/08/2022",
    //       description: "Lorem ipsum teste",
    //     },
    //     {
    //       time: "09:30",
    //       name: "Vitamina de banana com Whey",
    //       inDiet: true,
    //       date: "11/08/2022",
    //       description: "Lorem ipsum teste",
    //     },
    //   ],
    // },
    // {
    //   day: "10.08.22",
    //   diet: [
    //     {
    //       time: "20:00",
    //       name: "X-tudo",
    //       inDiet: false,
    //       date: "10/08/2022",
    //       description: "Lorem ipsum teste",
    //     },
    //     {
    //       time: "16:00",
    //       name: "Whey protein com leite",
    //       inDiet: true,
    //       date: "10/08/2022",
    //       description: "Lorem ipsum teste",
    //     },
    //     {
    //       time: "12:30",
    //       name: "Salada cesar com frango",
    //       inDiet: true,
    //       date: "10/08/2022",
    //       description: "Lorem ipsum teste",
    //     },
    //     {
    //       time: "09:30",
    //       name: "Vitamina de banana com Whey",
    //       inDiet: true,
    //       date: "10/08/2022",
    //       description: "Lorem ipsum teste",
    //     },
    //   ],
    // },
  ]);

  const [currentStreak, setCurrentStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [percentage, setPercentage] = useState("0%");
  const [percentageString, setPercentageString] = useState("0%");
  const [inDietTrue, setInDietTrue] = useState(0);
  const [total, setTotal] = useState(0);

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

  function AddMeal({ day, diet }: DietDayProps) {
    setDietDay((prevDietList) => {
      const dayExists = prevDietList.find((item) => item.day === day);

      if (dayExists) {
        return prevDietList.map((item) =>
          item.day === day ? { ...item, diet: [...item.diet, ...diet] } : item
        );
      } else {
        return [...prevDietList, { day, diet }];
      }
    });
  }

  function EditMeal(day: string, updatedDiet: DietProps) {
    setDietDay((prevDietList) => {
      return prevDietList.map((item) => {
        if (item.day === day) {
          return {
            ...item,
            diet: item.diet.map((meal) =>
              meal.time === updatedDiet.time ? updatedDiet : meal
            ),
          };
        }
        return item;
      });
    });
  }

  function handleCreateNewMeal() {
    navigation.navigate("newMeal", { AddMeal });
  }

  useEffect(() => {
    let tempCurrentStreak = 0;
    let tempMaxStreak = 0;

    if (dietDay.length === 0) {
      setCurrentStreak(tempCurrentStreak);
      setMaxStreak(tempMaxStreak);
    } else {
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

      const percentageAux =
        total > 0 ? ((inDietTrue / total) * 100).toFixed(2) : "0%";
      const percentageStringAux = `${percentageAux}%`;

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
      setPercentageString(percentageStringAux);
      setPercentage(percentageAux);
      setInDietTrue(inDietTrue);
      setTotal(total);
    }
  }, [dietDay]);

  return (
    <Container>
      <Header />
      <PercentBox
        color={(inDietTrue / total) * 100 > 70 ? "green" : "red"}
        goToStatistics={() =>
          handleStatistics({ total, inDietTrue, percentageString, maxStreak })
        }
        percentage={percentageString}
      />
      <AddMealButton goTo={handleCreateNewMeal} />
      <FlatList
        style={{ marginTop: 10 }}
        data={dietDay}
        keyExtractor={(item) => item.day}
        renderItem={({ item }) => (
          <DietDay day={item.day} diet={item.diet} EditMeal={EditMeal} />
        )}
        contentContainerStyle={dietDay.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList message="Que tal cadastrar a primeira refeição?" />
        )}
      />
    </Container>
  );
}
