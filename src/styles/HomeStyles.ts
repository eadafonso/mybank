import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 30px 16px 20px 16px;
`;
export const ProfilePhoto = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 20px;
`;
export const Welcome = styled.View`
  flex: 1;
  padding: 16px;
`;

export const Purchases = styled.FlatList`
  background-color: #2c2c2c;
  padding: 16px;
  margin-top: 10px;
`;

export const TransactionsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SearchContainer = styled.View`
  background-color: #3d3d3d;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  border-radius: 6px;
  margin: 16px 0;
`;

export const Search = styled.TextInput`
  flex: 1;
  padding: 8px 16px;
  color: #dbdbdb;
`;

export const Puchase = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #393939;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;
export const PuchaseInfo = styled.View``;

export const CardContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin: 35px 0;
  flex-direction: row;
  padding-bottom: 10px;
  padding-left: 8px;
  padding-right: 20px;
`;

export const Card = styled.View`
  width: 160px;
  height: 138px;
  margin: 0 7px;
  background-color: #3d3d3d;
  border-radius: 4px;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
`;
