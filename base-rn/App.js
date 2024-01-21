import StackNavigator from "./src/StackNavigator";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/Theme";
import { useFonts } from "expo-font";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
        <StackNavigator />
      </ThemeProvider>
    </View>
  );
}
