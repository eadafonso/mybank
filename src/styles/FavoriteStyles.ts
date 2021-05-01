import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
  padding-top: 40px;
`;

export const SearchContainer = styled.View`
  background-color: #3d3d3d;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  border-radius: 6px;
  margin: 16px 20px;
`;

export const Search = styled.TextInput`
  flex: 1;
  padding: 8px 16px;
  color: #dbdbdb;
`;

export const CardContainer = styled.ScrollView.attrs({
  vertical: true,
})`
  background-color: transparent;
  padding: 20px;
`;

export const Card = styled.View`
  background-color: #3d3d3d;
  height: 114px;
  border-radius: 4px;
  padding: 20px;
  margin: 10px 0;
`;
