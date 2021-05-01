import React from "react";

import {
  Container,
  Cards,
  CardContainers,
  CardInfo,
  CardLogo,
  CardDetails,
} from "../styles/CartStyles";
import { Text } from "../styles/Text";

const CartScreen: React.FC = () => {
  const myCards = [
    {
      id: "1",
      color: "#5750f0",
      number: "12345",
      exp: "20/2024",
      bank: "EADBANK",
      titular: "Edvaldo Afonso",
    },
    {
      id: "2",
      color: "#c84ff1",
      number: "09888",
      exp: "20/2024",
      bank: "NoBank",
      titular: "Edvaldo Afonso",
    },

    {
      id: "3",
      color: "#5298f7",
      number: "34232",
      exp: "20/2024",
      bank: "MyBank",
      titular: "Edvaldo Afonso",
    },

    {
      id: "4",
      color: "#974ff2",
      number: "54321",
      exp: "20/2024",
      bank: "InzoBank",
      titular: "Edvaldo Afonso",
    },

    {
      id: "5",
      color: "#c42f2f",
      number: "54321",
      exp: "20/2024",
      bank: "MYBANK",
      titular: "Edvaldo Afonso",
    },
  ];

  const renderCard = ({ item }) => (
    <CardContainers bgColor={item.color}>
      <CardInfo>
        <Text large>{item.titular}</Text>

        <CardDetails>
          <Text heavy>
            {" "}
            &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;{" "}
            &bull;&bull;&bull;&bull;
            <Text heavy medium>
              {item.number}
            </Text>
          </Text>
          <Text heavy color="#fff" margin="5px 0 0 0" small>
            {item.exp}
          </Text>
        </CardDetails>
      </CardInfo>

      <CardLogo>
        <Text medium>{item.bank}</Text>
      </CardLogo>
    </CardContainers>
  );
  return (
    <Container>
      <Text center large heavy margin="50px 0 0 0">
        Todos cartões
      </Text>

      <Cards data={myCards} renderItem={renderCard} />
    </Container>
  );
};

export default CartScreen;
