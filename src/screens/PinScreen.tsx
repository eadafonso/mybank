import React, { useState, useEffect } from "react";
import { Fontisto } from "@expo/vector-icons";
import { Text } from "../styles/Text";
import {
  Container,
  AcessPin,
  USseTouch,
  Pin,
  PinContainer,
} from "../styles/PinStyles";
import { useNavigation } from "@react-navigation/native";

import NumberPad from "../components/NumberPad";

const PinScreen: React.FC = () => {
  const navigation = useNavigation();
  const [pinCount, setPincount] = useState(0);

  const totalPin = 6;

  useEffect(() => {
    if (pinCount === totalPin) {
      navigation.navigate("Tabs");
    }
  }, [pinCount]);

  const renderPin = () => {
    const pins = [];

    for (let x = 1; x <= totalPin; x++) {
      pins.push(
        x <= pinCount ? (
          <PinContainer key={x}>
            <Pin />
          </PinContainer>
        ) : (
          <PinContainer key={x} />
        )
      );
    }

    return pins;
  };

  const presKey = (_: number, index: number) => {
    setPincount((prev) => {
      return index != 10 ? prev + 1 : prev - 1;
    });
  };

  return (
    <Container>
      <Text center heavy color="#5196f4" title margin="10px 0 0 0">
        myBank
      </Text>

      <Text center margin="32px 0 0 0" medium>
        Digite o pin da sua conta
      </Text>

      <AcessPin>{renderPin()}</AcessPin>

      <Text center bold margin="8px 0 0 0" color="#9c9c9f">
        Esqueceu o pin?
      </Text>

      <USseTouch onPress={() => navigation.navigate("Touch")} delayPressIn={0}>
        <Fontisto name="locked" size={16} color="#5196f4" />
        <Text color="#5196f4" bold margin="3px 0 0 8px">
          Usar impressão Digital
        </Text>
      </USseTouch>
      <NumberPad onPress={presKey} />
    </Container>
  );
};

export default PinScreen;
