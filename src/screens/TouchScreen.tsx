import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import {
  Container,
  TouchButton,
  Touch,
  Circle,
  PinAcess,
} from "../styles/TouchStyles";

import { Text } from "../styles/Text";

const TouchScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar style="light" />
      <Container>
        <Text center heavy color="#5196f4" title margin="10px 0 0 0">
          myBank
        </Text>

        <Touch onLongPress={() => navigation.navigate("Tabs")} delayPressIn={0}>
          <Circle bgColor="#1e1e1e">
            <Circle bgColor="#5196f405">
              <Circle bgColor="#5196f410">
                <Circle bgColor="#5196f430">
                  <TouchButton>
                    <MaterialIcons name="fingerprint" size={64} color="#fff" />
                  </TouchButton>
                </Circle>
              </Circle>
            </Circle>
          </Circle>
        </Touch>

        <Text center medium>
          Mantenha o dedo no sensor para entrar na {"\n"} tua conta do eadbank.
        </Text>

        <Text center bold margin="20px 0 0 0" color="#9c9c9f">
          Por favor verifica a sua identidade {"\n"} usando a impressão Digital.
        </Text>

        <PinAcess onPress={() => navigation.navigate("Pin")} delayPressIn={0}>
          <Fontisto name="locked" size={16} color="#5196f4" />
          <Text color="#5196f4" bold margin="3px 0 0 8px">
            Introduzir pin
          </Text>
        </PinAcess>
      </Container>
    </>
  );
};

export default TouchScreen;
