import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { CreateNewMeal } from "@screens/CreateNewMeal";
import { CreateNewMealNotInDiet } from "@screens/CreateNewMealNotInDiet";
import { EditMeal } from "@screens/EditMeal";
import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { NewMeal } from "@screens/NewMeal";
import { Statistics } from "@screens/Statistics";

export type RootStackParamList = {
  home: undefined;
  meal: {
    diet: DietProps;
    EditMeal: (day: string, updatedDiet: DietProps) => void;
    RemoveMeal: (day: string, mealDelete: DietProps) => void;
  };
  newMeal: { AddMeal: ({ day, diet }: DietDayProps) => void };
  createNewMeal: undefined;
  createNewMealNotInDiet: undefined;
  statistics: {
    total: number;
    inDietTrue: number;
    percentageString: string;
    maxStreak: number;
  };
  editPage: {
    diet: DietProps;
    EditMeal: (day: string, updatedDiet: DietProps) => void;
  };
};

interface DietDayProps {
  day: string;
  diet: DietProps[];
}

interface DietProps {
  time: string;
  name: string;
  inDiet: boolean;
  description: string;
  date: string;
}

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
      <Screen name="editPage" component={EditMeal} />
    </Navigator>
  );
}
