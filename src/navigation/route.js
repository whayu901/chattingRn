import * as React from "react";
// import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import ChatScreen from "../screen/chat";
import LoginScreen from "../screen/login";

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ ...TransitionPresets.ModalSlideFromBottomIOS }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
