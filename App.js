import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from './src/screens/ListScreen';
import DifferentComponent from './src/screens/DifferentComponent';
import ImageScreen from './src/screens/ImageScreen';
import MultipleComponents from './src/screens/MultipleComponentsScreen';
import StateScreen from './src/screens/AllStateScreen/StateScreen';
import CounterScreen from './src/screens/AllStateScreen/CounterScreen';
import HungryCatScreen from './src/screens/AllStateScreen/HungryCatScreen'
import AddColorScreen from './src/screens/AllStateScreen/AddColorScreen';
import SquareScreen from './src/screens/AllStateScreen/SquareScreen';
import TextInputs from './src/screens/TextInputsScreen';
import StylesScreen from './src/screens/StylesScreen';
import EffectsHook from './src/screens/UsingEffectHook/EffectsHook';
import Example1CountWithEffect from './src/screens/UsingEffectHook/Example1CountWithEffect';
import Example2 from './src/screens/UsingEffectHook/Example2';
import ReactNavigation from './src/screens/UsingReactNavigation/ReactNavigation';
import StackNavigation from './src/screens/UsingReactNavigation/StackNavigation';
import DrawerNavigation from './src/screens/UsingReactNavigation/DrawerNavigation';
import BottomTabNavigation from './src/screens/UsingReactNavigation/BottomTabNavigation';
import DetailsScreen from './src/screens/UsingReactNavigation/DetailsScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    AllComponents: DifferentComponent,
    Image: ImageScreen,
    MultiCompo: MultipleComponents,
    AllState: StateScreen,
    Count: CounterScreen,
    Cat: HungryCatScreen,
    ChangeColor: AddColorScreen,
    Square: SquareScreen,
    TextInputs: TextInputs,
    AllStyle: StylesScreen,
    effectsScreen: EffectsHook,
    Ex1Screen: Example1CountWithEffect,
    Ex2Screen: Example2,
    NavigationScreen:ReactNavigation,
    StackScreen: StackNavigation,
    BottomScreen: BottomTabNavigation,
    DrawerScreen: DrawerNavigation,
    DetailsScreen: DetailsScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Reference App"
    }
  }
);

export default createAppContainer(navigator);