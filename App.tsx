import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather, MaterialIcons } from "@expo/vector-icons";

import TouchScreen from "./src/screens/TouchScreen";
import PinScreen from "./src/screens/PinScreen";

import HomeScreen from "./src/screens/HomeScreen";
import CartScreen from "./src/screens/CartScreen";
import SendScreen from "./src/screens/SendScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";

export default function App() {
  const AppStack = createStackNavigator();
  const TabStack = createBottomTabNavigator();

  const tabBarOptions = {
    showLabel: true,

    style: {
      backgroundColor: "#2D2E31",
      paddingBottom: 5,
      borderTopWidth: 0,
      borderTopColor: "transparent",
    },
  };

  const TabStackScreen = () => {
    return (
      <TabStack.Navigator tabBarOptions={tabBarOptions}>
        <TabStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Início",
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialIcons
                  name="dashboard"
                  size={20}
                  color={focused ? "#5196f4" : "#828282"}
                />
              );
            },
          }}
        />
        <TabStack.Screen
          name="Send"
          component={SendScreen}
          options={{
            title: "Enviar e Receber",
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialIcons
                  name="send"
                  size={20}
                  color={focused ? "#5196f4" : "#828282"}
                />
              );
            },
          }}
        />

        <TabStack.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            title: "Favoritos",
            tabBarIcon: ({ focused }) => {
              return (
                <Feather
                  name="heart"
                  size={20}
                  color={focused ? "#5196f4" : "#828282"}
                />
              );
            },
          }}
        />

        <TabStack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: "Cartões",
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialIcons
                  name="credit-card"
                  size={20}
                  color={focused ? "#5196f4" : "#828282"}
                />
              );
            },
          }}
        />
      </TabStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Touch" component={TouchScreen} />
        <AppStack.Screen name="Pin" component={PinScreen} />
        <AppStack.Screen name="Tabs" component={TabStackScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
