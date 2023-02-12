import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabScreen from './screens/MainTabScreen';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function FeedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed!</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search!</Text>
    </View>
  );
}

function LeaderboardScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>LeaderBoard!</Text>
    </View>
  );
}

function FriendsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Friends!</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false,
  }}>
      <Stack.Screen name="PawMatch" component={MainTabScreen} />
    </Stack.Navigator>
  </NavigationContainer>

);
}

export default App;