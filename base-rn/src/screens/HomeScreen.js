import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import Container from "../components/Container";

export default function HomeScreen() {
  const navigation = useNavigation();

  const toNavigationScreen = () => {
    navigation.navigate("Navigation");
  };

  const toScrollViewScreen = () => {
    navigation.navigate("ScrollView");
  };

  const toFlatListScreen = () => {
    navigation.navigate("FlatList");
  };

  return (
    <Container>
      <Title text={"Olá, Mundo!"} />
      <StatusBar style="auto" />
      <NavButton text={"Aula de Navegação"} onPress={toNavigationScreen} />
      <NavButton text={"Aula de ScrollView"} onPress={toScrollViewScreen} />
      <NavButton text={"Aula de FlatList"} onPress={toFlatListScreen} />
    </Container>
  );
}
