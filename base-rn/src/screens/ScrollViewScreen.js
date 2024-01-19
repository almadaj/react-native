import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import Container from "../components/Container";

export default function ScrollViewScreen() {
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <Title text={"ScrollView"} />
      <NavButton text={"Voltar"} onPress={navigateBack} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
        <Text style={styles.item}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
          tempus urna, sed ornare dui. Nullam nunc risus, dapibus quis libero a,
          molestie faucibus mi. Fusce faucibus velit eu massa fringilla, quis
          feugiat risus laoreet. Fusce tincidunt eget ligula in elementum.
          Nullam vitae luctus ex. Vivamus lacinia ex sed nulla.
        </Text>
        <Text style={styles.item}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
          tempus urna, sed ornare dui. Nullam nunc risus, dapibus quis libero a,
          molestie faucibus mi. Fusce faucibus velit eu massa fringilla, quis
          feugiat risus laoreet. Fusce tincidunt eget ligula in elementum.
          Nullam vitae luctus ex. Vivamus lacinia ex sed nulla.
        </Text>
        <Text style={styles.item}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
          tempus urna, sed ornare dui. Nullam nunc risus, dapibus quis libero a,
          molestie faucibus mi. Fusce faucibus velit eu massa fringilla, quis
          feugiat risus laoreet. Fusce tincidunt eget ligula in elementum.
          Nullam vitae luctus ex. Vivamus lacinia ex sed nulla.
        </Text>
        <Text style={styles.item}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
          tempus urna, sed ornare dui. Nullam nunc risus, dapibus quis libero a,
          molestie faucibus mi. Fusce faucibus velit eu massa fringilla, quis
          feugiat risus laoreet. Fusce tincidunt eget ligula in elementum.
          Nullam vitae luctus ex. Vivamus lacinia ex sed nulla.
        </Text>
        <Text style={styles.item}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
          tempus urna, sed ornare dui. Nullam nunc risus, dapibus quis libero a,
          molestie faucibus mi. Fusce faucibus velit eu massa fringilla, quis
          feugiat risus laoreet. Fusce tincidunt eget ligula in elementum.
          Nullam vitae luctus ex. Vivamus lacinia ex sed nulla.
        </Text>
        <Text style={styles.item}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
          tempus urna, sed ornare dui. Nullam nunc risus, dapibus quis libero a,
          molestie faucibus mi. Fusce faucibus velit eu massa fringilla, quis
          feugiat risus laoreet. Fusce tincidunt eget ligula in elementum.
          Nullam vitae luctus ex. Vivamus lacinia ex sed nulla.
        </Text>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 16,
    marginTop: 16,
  },
});
