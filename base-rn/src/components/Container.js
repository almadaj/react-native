import { StyleSheet, Text, View } from "react-native";

export default function Title({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginHorizontal: 3,
    marginTop: 48,
  },
});
