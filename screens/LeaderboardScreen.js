import React from 'react';
import { StyleSheet, Image, ImageBackground, Text, View } from "react-native";
import board from "../assets/board.png";
import leaderboardPeople from "../assets/leaderboard_people.png";

const LeaderboardScreen = () => {
  return (
    <ImageBackground source={require("../assets/leaderboard_bg.png")} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', objectFit: 'cover'}}>
      <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{top: 35}} source={leaderboardPeople}></Image>
        <Image style={{bottom: -45}} source={board}></Image>
      </View>
   </ImageBackground>
  )
}

export default LeaderboardScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    top: -20,
  },
});