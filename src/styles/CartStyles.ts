import styled from "styled-components/native";

interface Props {
  bgColor: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #1e1e1e;
  padding-top: 20px;
`;

export const CardContainers = styled.View<Props>`
  background-color: #292929;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.bgColor};
`;

export const Cards = styled.FlatList`
  padding: 0 8px;
  margin-top: 32px;
`;

export const CardInfo = styled.View`
  height: 110px;
  flex-direction: row;
  align-items: center;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;

export const CardLogo = styled.View``;
export const CardDetails = styled.View`
  flex: 1;
  align-items: flex-end;
`;
