import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { CreateNewMeal } from "@screens/CreateNewMeal";
import { CreateNewMealNotInDiet } from "@screens/CreateNewMealNotInDiet";
import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { NewMeal } from "@screens/NewMeal";
import { Statistics } from "@screens/Statistics";

export type RootStackParamList = {
  home: undefined;
  meal: undefined;
  newMeal: undefined;
  createNewMeal: undefined;
  createNewMealNotInDiet: undefined;
  statistics: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="meal" component={Meal} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="createNewMeal" component={CreateNewMeal} />
      <Screen
        name="createNewMealNotInDiet"
        component={CreateNewMealNotInDiet}
      />
      <Screen name="statistics" component={Statistics} />
    </Navigator>
  );
}
