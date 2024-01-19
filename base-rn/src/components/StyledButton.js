import styled from "styled-components/native";

const Background = styled.TouchableOpacity`
  background-color: ${({ color }) => color ?? "#1c1a1d"};
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px;
`;

const Text = styled.Text`
  color: ${({ color }) => color ?? "#fff"};
`;

export default function ({ bgColor, color, children, onPress }) {
  return (
    <Background color={bgColor} onPress={onPress}>
      <Text color={color}>{children}</Text>
    </Background>
  );
}
