import React from "react";
import { Text } from "../styles/Text";

import {
  Container,
  SearchContainer,
  Search,
  CardContainer,
  Card,
} from "../styles/FavoriteStyles";

import { AntDesign } from "@expo/vector-icons";

const FavoriteScreen: React.FC = () => {
  return (
    <Container>
      <Text large margin="26px 0 0 20px">
        Pagamentos Favoritos
      </Text>

      <SearchContainer>
        <AntDesign name="search1" size={18} color="#5196f4" />
        <Search
          placeholder="Pesquisar favoritos"
          placeholderTextColor="#727479"
        />
      </SearchContainer>

      <CardContainer>
        <Card>
          <Text large heavy>
            Conta Poupança
          </Text>

          <Text small margin="15px 0 0 0">
            Valor: 500.000kz
          </Text>
        </Card>

        <Card>
          <Text large heavy>
            Conta Poupança
          </Text>

          <Text small margin="15px 0 0 0">
            Valor: 500.000kz
          </Text>
        </Card>

        <Card>
          <Text large heavy>
            Conta Poupança
          </Text>

          <Text small margin="15px 0 0 0">
            Valor: 500.000kz
          </Text>
        </Card>

        <Card>
          <Text large heavy>
            Conta Poupança
          </Text>

          <Text small margin="15px 0 0 0">
            Valor: 500.000kz
          </Text>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default FavoriteScreen;
