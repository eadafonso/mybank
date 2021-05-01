import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
  padding-top: 40px;
`;

export const Ammount = styled.View`
  margin-top: 64px;
  align-items: center;
`;

export const User = styled.View`
  margin: 32px 16px;
  flex-direction: row;
  align-items: center;
`;

export const ProfilePhoto = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 12px;
`;

export const UserDetails = styled.View`
  flex: 1;
  margin: 0 16px;
`;

export const Send = styled.View`
  margin: 16px;
  padding: 16px 32px;
  background-color: #5196f4;
  align-items: center;
  border-radius: 4px;
`;
