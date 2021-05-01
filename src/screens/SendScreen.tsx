import React, { useState } from "react";

import {
  Ammount,
  Container,
  User,
  ProfilePhoto,
  UserDetails,
  Send,
} from "../styles/SendStyles";
import { Text } from "../styles/Text";
import { Feather, MaterialIcons, AntDesign } from "@expo/vector-icons";
import NumberPad from "../components/NumberPad";

const SendScreen: React.FC = () => {
  const [amount, setAmount] = useState("0");

  const pressKey = (item: string, index: number) => {
    setAmount((prev) => {
      return index != 10 ? prev + item : prev.slice(0, prev.length - 1);
    });
  };

  const convertToDollar = (currentAmount: number) => {
    const newAmount = currentAmount / 100;

    return newAmount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <Container>
      <Text center large heavy margin="16px 0 0 0">
        Enviar
      </Text>

      <Ammount>
        <Text title heavy>
          {convertToDollar(parseInt(amount))}
        </Text>
        <Text bold color="#727479">
          Escolhe a quantidade a enviar
        </Text>
      </Ammount>

      <User>
        <ProfilePhoto source={require("../../assets/user.png")} />

        <UserDetails>
          <Text medium heavy>
            Eadfast Prestação de serviço
          </Text>
          <Text bold color="#727479">
            Empresa
          </Text>
        </UserDetails>

        <MaterialIcons name="edit" color="#fff" size={16} />
      </User>

      <Send>
        <Text medium heavy>
          Enviar {convertToDollar(parseInt(amount))} para Eadfast
        </Text>
      </Send>

      <NumberPad onPress={pressKey} />
    </Container>
  );
};

export default SendScreen;
