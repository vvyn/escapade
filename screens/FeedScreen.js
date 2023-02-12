import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import feedGreen3 from "../assets/3.png";
import profilePic from "../assets/profile.png";

const FeedScreen = () => {
  return (
    <View>
      <Image style={styles.greenIMG} source={feedGreen3} />
      {/* <Image style={styles.name} source={profilePic} /> */}
      <Text style={styles.profile}>Emily</Text>
      {/* <Text style={styles.date}>Feb 11th</Text> */}
      <View style={styles.feednoIMG}></View> 
      <View style={styles.line}></View>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  greenIMG: {
    position: "absolute",
    width: 500.1,
    height: 670.02,
    top: -353.69,
    left: -10,
    transform: [
      {
        rotate: "-2.02deg",
      },
    ],
  },
  profile: {
    
  },
  name: {
    textAlign: "left", // <-- the magic
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 310,
    width: "50%",
    paddingLeft: 30,
    color: "black",
  },
  feednoIMG: {
    width: 212,
    height: 31,
    left: 24,
    top: 500,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 60,
    lineHeight: "120%",
    color: "#000000",
    zIndex: 10,
  },
  date: {
    textAlign: "right", // <-- the magic
    justifyContent: "right",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: -20,
    width: "50%",
    paddingLect: 160,
    color: "black",
  },
  line: {
    boxSizing: "border-box",
    position: "absolute",
    width: 337,
    height: 34,
    left: 26,
    top: 174,
    borderTop: "1px solid #4A4A4A",
  },
});
