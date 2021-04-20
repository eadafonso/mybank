import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #1e1e1e;
  flex: 1;
  justify-content: center;
`;

export const AcessPin = styled.View `
  flex-direction: row;
  justify-content: space-between;
  margin: 36px 64px 16px 64px;
`;

export const USseTouch = styled.TouchableOpacity `
  flex-direction: row;
  padding: 15px;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
`;

export const PinContainer = styled.View `
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #5196f4;
  align-items: center;
  justify-content: center;
`
export const Pin = styled.View `
  width: 8px;
  height: 8px;
  border-radius: 4px;
  border-color: #5196f4;
  background-color: #5196f4;
`