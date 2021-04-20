import styled from 'styled-components/native';

interface Props {
  bgColor: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
  justify-content: center;
`;


export const Touch = styled.TouchableOpacity `
  /* flex: 1; */
  align-items: center;
  justify-content: center;
`

export const Circle = styled.View<Props> `
  background-color: ${props => props.bgColor};
  padding: 32px;
  border-radius: 999px;
`

export const TouchButton = styled.TouchableOpacity `
  background-color: #5196f4;
  padding: 8px;
  border-radius: 100px;
`;

export const PinAcess = styled.TouchableOpacity `
  flex-direction: row;
  padding: 15px;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
`