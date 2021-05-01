import styled from "styled-components/native";

export const KeyPad = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  margin: 30px;
  margin-right: 50px;
`;

export const Number = styled.TouchableOpacity`
  width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  margin: 10px 20px;
  border-width: 1px;
  border-color: #ffffff20;
`;
