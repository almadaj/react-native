import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import Container from "../components/Container";
import StyledTitle from "../components/StyledTitle";

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
  const toStyledScreen = () => {
    navigation.navigate("Styled");
  };
  const toApiScreen = () => {
    navigation.navigate("API");
  };
  const toSampleApiScreen = () => {
    navigation.navigate("SampleAPI");
  };
  const toAccelerometerScreen = () => {
    navigation.navigate("Accelerometer");
  };

  return (
    <Container>
      <StyledTitle>Olá, Meu Mundo!</StyledTitle>
      <StatusBar style="auto" />
      <NavButton text={"Aula de Navegação"} onPress={toNavigationScreen} />
      <NavButton text={"Aula de ScrollView"} onPress={toScrollViewScreen} />
      <NavButton text={"Aula de FlatList"} onPress={toFlatListScreen} />
      <NavButton text={"Aula de Styled Components"} onPress={toStyledScreen} />
      <NavButton text={"Aula de API"} onPress={toApiScreen} />
      <NavButton text={"Exemplo de API"} onPress={toSampleApiScreen} />
      <NavButton text={"Uso do Acelerômetro"} onPress={toAccelerometerScreen} />
    </Container>
  );
}
