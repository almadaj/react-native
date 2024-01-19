import styled from "styled-components/native";

export default styled.View`
  flex: 1;
  margin: 32px 0 0;
  background-color: ${(props) => props.color ?? "#fff"};
  padding: 16px;
`;
