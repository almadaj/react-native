import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function ScrollViewScreen() {
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ScrollView</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={navigateBack}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginHorizontal: 3,
    marginVertical: 32,
  },
  title: {
    fontSize: 40,
    color: "#f64348",
  },
  item: {
    fontSize: 16,
    marginTop: 16,
  },
  button: {
    backgroundColor: "#1c1a1d",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: 60,
  },
  buttonText: {
    color: "#fff",
  },
});
