import { Home } from "@screens/Home";
import { Statistics } from "@screens/Statistics";
import { NewMeal } from "@screens/NewMeal";
import { CreateNewMeal } from "@screens/CreateNewMeal";
import { CreateNewMealNotInDiet } from "@screens/CreateNewMealNotInDiet";
import { Meal } from "@screens/Meal";
import { Loading } from "@components/Loading";

import theme from "@theme/index";

import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";

import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Meal /> : <Loading />}
      </>
    </ThemeProvider>
  );
}
