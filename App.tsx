import { Home } from "@screens/Home";
import { Loading } from "@components/Loading";

import theme from "@theme/index";

import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";

import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import { Statistics } from "@screens/Statistics";

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
        {fontsLoaded ? <Statistics /> : <Loading />}
      </>
    </ThemeProvider>
  );
}
