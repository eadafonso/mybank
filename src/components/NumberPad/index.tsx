import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { KeyPad, Number } from "./styles";

import { Text } from "../../styles/Text";

interface MyCodeParams {
  onPress?: any;
}

const NumberPad: React.FC<MyCodeParams> = ({ onPress }) => {
  const button = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    <MaterialIcons name="keyboard-backspace" size={24} />,
  ];

  return (
    <KeyPad>
      {button.map((item, index) => {
        return (
          <Number
            key={index}
            onPress={() => onPress(item, index)}
            delayPressIn={0}
          >
            <Text center color="#fff" large heavy>
              {item}
            </Text>
          </Number>
        );
      })}
    </KeyPad>
  );
};

export default NumberPad;
