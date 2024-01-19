import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import Container from "../components/Container";

const movies = [
  { id: 1, year: "1994", title: "Um Sonho de Liberdade" },
  { id: 2, year: "1972", title: "O Poderoso Chefão" },
  { id: 3, year: "2008", title: "Batman: O Cavaleiro das Trevas" },
  { id: 4, year: "1974", title: "O Poderoso Chefão II" },
  { id: 5, year: "1957", title: "12 Homens e uma Sentença" },
  { id: 6, year: "1993", title: "A Lista de Schindler" },
  { id: 7, year: "2003", title: "O Senhor dos Anéis: O Retorno do Rei" },
  { id: 8, year: "1994", title: "Pulp Fiction" },
  { id: 9, year: "2001", title: "O Senhor dos Anéis: A Sociedade do Anel" },
  { id: 10, year: "1966", title: "Três Homens em Conflito" },
];

export default function FlatListScreen() {
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };

  const renderMovie = ({ item }) => (
    <View style={styles.list}>
      <Text>Id: {item.id}</Text>
      <Text>Filme: {item.title}</Text>
      <Text>Ano: {item.year}</Text>
    </View>
  );

  return (
    <Container>
      <Title text={"FlatList"} />
      <NavButton text={"Voltar"} onPress={navigateBack} />
      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 40,
    marginHorizontal: 10,
  },
});
