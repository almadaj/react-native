import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";
import StyledButton from "../components/StyledButton";
import { useNavigation } from "@react-navigation/native";

export default function SampleApiScreen() {
  const [posts, setPosts] = useState({});
  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };

  const fetchPostsJson = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPostsJson();
  }, []);

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Text>ID: {item.id}</Text>
      <Text style={styles.textTitle}>Título: {item.title}</Text>
      <Text style={styles.textContent}>Conteúdo: {item.body}</Text>
    </View>
  );

  return (
    <View style={{ marginTop: 50 }}>
      <StyledButton onPress={navigateBack}>Voltar</StyledButton>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    borderWidth: 1,
    borderColor: "#BBBB",
    borderRadius: 5,
    margin: 10,
    padding: 16,
  },
  textTitle: {
    marginVertical: 8,
    fontWeight: "bold",
    fontSize: 18,
  },
  textContent: {
    fontWeight: "300",
    fontSize: 14,
  },
});
