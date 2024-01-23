import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";
import StyledButton from "../components/StyledButton";
import StyledTitle from "../components/StyledTitle";
import { StyleSheet, Text, View, Vibration } from "react-native";
import { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";

export default function AccelerometerScreen() {
  const navigation = useNavigation();
  const navigateBack = () => navigation.goBack();
  const [accelerometerData, setAccelerometerData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const subscribe = () => {
    setSubscription(Accelerometer.addListener(setAccelerometerData));
  };

  const unsubscribe = () => {
    if (subscription) subscription.remove();
    setSubscription(null);
  };
  useEffect(() => {
    subscribe();
    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <StyledTitle>Periféricos</StyledTitle>
      <StyledButton onPress={navigateBack}>Voltar</StyledButton>
      <View
        style={accelerometerData.x > 1 ? styles.container : styles.altContainer}
      >
        <Text style={styles.text}>Acelerômetro</Text>
        <Text>(em g's sendo 1g = 9.81m/s²)</Text>
        <Text style={styles.text}>x: {accelerometerData.x}</Text>
        <Text style={styles.text}>y: {accelerometerData.y}</Text>
        <Text style={styles.text}>z: {accelerometerData.z}</Text>
        <StyledButton onPress={subscription ? unsubscribe : subscribe}>
          {subscription ? "Ativado" : "Desativado"}
        </StyledButton>
        <StyledButton onPress={() => Vibration.vibrate(1000)}>
          Vibrar
        </StyledButton>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
  },
  altContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f64348",
  },
});
