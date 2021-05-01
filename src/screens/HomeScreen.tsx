import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Text } from "../styles/Text";

import {
  Container,
  Header,
  ProfilePhoto,
  Welcome,
  Purchases,
  TransactionsHeader,
  SearchContainer,
  Search,
  Puchase,
  PuchaseInfo,
  CardContainer,
  Card,
} from "../styles/HomeStyles";

import { Feather, MaterialIcons, AntDesign } from "@expo/vector-icons";

import PurchaseData from "../services/purchase";

type Episode = {
  id: string;
  price: string;
  product: string;
  adress: string;
};

interface Props {
  item: Array<Episode>;
}

const HomeScreen: React.FC = () => {
  const renderPuchase = ({ item }) => (
    <Puchase>
      <PuchaseInfo>
        <Text heavy>{item.product}</Text>
        <Text bold margin={"2px 0 2px 0"}>
          {item.store}
        </Text>
        <Text small color="#727479">
          <Text small color="#727479">
            Data:
          </Text>{" "}
          {item.data}
        </Text>
      </PuchaseInfo>
      <Text heavy>{item.price}</Text>
    </Puchase>
  );
  return (
    <>
      <StatusBar style="light" />
      <Container>
        <Header>
          <ProfilePhoto source={require("../../assets/user.png")} />

          <Welcome>
            <Text heavy medium>
              Bem vindo,
            </Text>
            <Text>Edvaldo Afonso</Text>
          </Welcome>

          <Feather name="settings" color="#818181" size={20} />
        </Header>

        <Text center title black>
          906.525.078 kz
        </Text>

        <Text center color="#727479" black heavy>
          Saldo Actual
        </Text>

        <CardContainer>
          <Card>
            <MaterialIcons
              name="account-balance-wallet"
              color="#5196f4"
              size={24}
            />
            <Text medium light margin={"5px 0 15px 0"}>
              Pagamentos de serviços
            </Text>
          </Card>

          <Card>
            <MaterialIcons name="payments" color="#5196f4" size={24} />
            <Text medium light margin={"5px 0 15px 0"}>
              Levantamento sem cartão
            </Text>
          </Card>

          <Card>
            <Feather name="dollar-sign" color="#5196f4" size={24} />
            <Text medium light margin={"5px 0 15px 0"}>
              Cambio e taxas
            </Text>
          </Card>
        </CardContainer>

        <Purchases<any>
          ListHeaderComponent={
            <>
              <TransactionsHeader>
                <Text>Ultímas transações</Text>
                <MaterialIcons name="sort" color="#5196f4" size={24} />
              </TransactionsHeader>

              <SearchContainer>
                <AntDesign name="search1" size={18} color="#5196f4" />
                <Search
                  placeholder="Pesquisar transações"
                  placeholderTextColor="#727479"
                />
              </SearchContainer>
            </>
          }
          data={PurchaseData}
          renderItem={renderPuchase}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </>
  );
};

export default HomeScreen;
