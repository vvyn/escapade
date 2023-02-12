import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from "./HomeScreen";
import Friends from "./FriendsScreen";
import Leaderboard from "./LeaderboardScreen";
import Search from "./SearchScreen";
import Feed from "./FeedScreen";
import feedPic from "../assets/feed.png";
import friendsPic from "../assets/friends.png";
import leaderboardPic from "../assets/hi.png";
import searchPic from "../assets/Search.png";
import homePic from "../assets/Home.png";
import {StyleSheet, Image} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (

    <Tab.Navigator
      initialRouteName="Home"
      labeled={false}
      activeColor="#F9E5E9"
      inactiveColor='#F6D3D9'
      barStyle={{backgroundColor: '#FFFFFF'}}>
      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          tabBarLabel: 'Leader Board',
          tabBarIcon: ({color}) => (
            <Image source={leaderboardPic} style={{width: 20, height: 20}} />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarLabel: 'Friends',
          tabBarIcon: ({color}) => (
            <Image source={friendsPic} style={{width: 45, height: 20}} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Image source={homePic} style={{width: 45, height: 20}} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color}) => (
            <Image source={feedPic} style={{width: 45, height: 20}} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Image source={searchPic} style={{width: 30, height: 15}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
  
  export default MainTabScreen;
  
//   const HomeStackScreen = ({navigation}) => (
//     <HomeStack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: 'pink',
//         },
//         headerTintColor: 'white',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}>
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//     </HomeStack.Navigator>
//   );
  
//   const LikedStackScreen = ({navigation}) => (
//     <LikedStack.Navigator screenOptions={{headerShown: false}}>
//       <LikedStack.Screen name="Liked" component={LikedScreen} />
//       <LikedStack.Screen name="Tile" component={AnimalTile} />
//     </LikedStack.Navigator>
//   );
  
//   const ShelterStackScreen = ({navigation}) => (
//       <ShelterStack.Navigator screenOptions={{headerShown: false}}>
//           <ShelterStack.Screen name="Shelters" component={ShelterScreen} />
//           <LikedStack.Screen name="Tile2" component={AnimalTile2} />
//       </ShelterStack.Navigator>
//   );
  
//   const ProfileStackScreen = ({navigation}) => (
//     <ProfileStack.Navigator screenOptions={{headerShown: false}}>
//       <ProfileStack.Screen name="Profile" component={ProfileScreen} />
//       <ProfileStack.Screen name="Info" component={InfoScreen} />
      
//     </ProfileStack.Navigator>
//   );