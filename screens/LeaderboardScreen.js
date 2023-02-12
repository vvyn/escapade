import React from 'react';
import { StyleSheet, Image, ImageBackground, Text, View } from "react-native";
import board from "../assets/board.png";
import board2 from "../assets/board2.png";
import leaderboardPeople from "../assets/leaderboard_people.png";

const LeaderboardScreen = () => {
  return (
    <ImageBackground source={require("../assets/leaderboard_bg.png")} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', objectFit: 'cover'}}>
      <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{top: 205}} source={leaderboardPeople}></Image>   
        <View>
          <Image style={{top: 210}} source={board2}></Image>
          <View style={styles.textTop}>
            <Text style={styles.rankingText}>RANK</Text>
            <Text style={styles.rankingText}>NAME</Text>
            <Text style={styles.rankingText}>SCORE</Text>
          </View>
          <View style={styles.text}>
              <Text style={styles.belowText}>4</Text>
              <Text style={styles.belowText}>ravioli4all</Text>
              <Text style={styles.belowText}>11</Text>
          </View>
          <View style={styles.text}>
              <Text style={styles.belowText}>5</Text>
              <Text style={styles.belowText}>jennni88</Text>
              <Text style={styles.belowText}>9</Text>
          </View>
          <View style={styles.text}>
              <Text style={styles.belowText}>6</Text>
              <Text style={styles.belowText}>erikrod7</Text>
              <Text style={styles.belowText}>6</Text>
          </View>
          <View style={styles.text}>
              <Text style={styles.belowText}>7</Text>
              <Text style={styles.belowText}>bertram</Text>
              <Text style={styles.belowText}>5</Text>
          </View>
          <View style={styles.text}>
              <Text style={styles.belowText}>8</Text>
              <Text style={styles.belowText}>markf3</Text>
              <Text style={styles.belowText}>3</Text>
          </View>
          <View style={styles.text}>
              <Text style={styles.belowText}>9</Text>
              <Text style={styles.belowText}>yolo1011</Text>
              <Text style={styles.belowText}>2</Text>
          </View>
          <View style={styles.text}>
              <Text style={styles.belowText}>10</Text>
              <Text style={styles.belowText}>thunderloki</Text>
              <Text style={styles.belowText}>1</Text>
          </View>
        </View>
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
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 68,
    bottom: 170,
    marginVertical: 12,
  },
  belowText: {
    fontSize: 18,
  },
  rankingText: {
    fontSize: 18,
  },
  textTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 50,
    bottom: 190,
  },
});