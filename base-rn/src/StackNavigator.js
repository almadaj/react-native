import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import NavigationScreen from "./screens/NavigationScreen";
import ScrollViewScreen from "./screens/ScrollViewScreen";
import FlatListScreen from "./screens/FlatListScreen";
import StyledComponentsScreen from "./screens/StyledComponentsScreen";
import UsingApiScreen from "./screens/UsingApiScreen";
import SampleApiScreen from "./screens/SampleApiScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigatior() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Navigation" component={NavigationScreen} />
        <Stack.Screen name="ScrollView" component={ScrollViewScreen} />
        <Stack.Screen name="FlatList" component={FlatListScreen} />
        <Stack.Screen name="Styled" component={StyledComponentsScreen} />
        <Stack.Screen name="API" component={UsingApiScreen} />
        <Stack.Screen name="SampleAPI" component={SampleApiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
