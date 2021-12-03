import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CounterScreen from "./src/screens/CounterScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ExercisesScreen from "./src/screens/ExercisesScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ListScreen from "./src/screens/ListScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import ColorCounter from "./src/components/ColorCounter";
import LoginScreen from "./src/screens/LoginScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Exercises: ExercisesScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen,
    ColorCounter: ColorCounter,
    Login: LoginScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
