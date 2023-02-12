import React from "react";
import { Text, View } from "react-native";
import { StyleSheet, Image } from "react-native";
import bg from "../assets/bg.png";
import drop from "../assets/drop.png";
import dots from "../assets/dots.png";
import dark from "../assets/dark.png";
import light from "../assets/light.png";

const HomeScreen = () => {
  return (
    <View>
      <Image style={styles.greenIMG} source={bg}></Image>
      <Text style={styles.myListText}>My List</Text>
      <Image style={styles.drop} source={drop} />

      <View style={styles.cont}>
        <View>
          <Text style={styles.myGoalsText}>
            <Image style={styles.dots} source={dark} />
            Scuba Diving
          </Text>
          <Text style={styles.myGoalsInfo}>more detail here</Text>
        </View>
        <View>
          <Text style={styles.myGoalsText}>
            <Image style={styles.dots} source={dark} />
            Read 5 books in a month
          </Text>
          <Text style={styles.myGoalsInfo}>more detail here</Text>
        </View>
        <View>
          <Text style={styles.myGoalsText}>
            <Image style={styles.dots} source={dark} />
            Become a billionaire
          </Text>
          <Text style={styles.myGoalsInfo}>more detail here</Text>
        </View>
        <View>
          <Text style={styles.myGoalsText}>
            <Image style={styles.dots} source={dark} />
            Learning how to Drive
          </Text>
          <Text style={styles.myGoalsInfo}>more detail here</Text>
        </View>
        <View>
          <Text style={styles.myGoalsText}>
            <Image style={styles.dots} source={dark} />
            Petting a Red Panda
          </Text>
          <Text style={styles.myGoalsInfo}>more detail here</Text>
        </View>
        <View>
          <Text style={styles.myGoalsText}>
            <Image style={styles.dots} source={dark} />
            Skiing
          </Text>
          <Text style={styles.myGoalsInfo}>more detail here</Text>
        </View>

        {/* <View style={styles.item}>
          <Image style={styles.dots} source={light} />
          <Text style={styles.myGoalsText}>Scuba Diving</Text>
          <Image style={styles.dots} source={dark} />
          <Image style={styles.dots} source={light} />
          <Image style={styles.dots} source={dark} />
          <Image style={styles.dots} source={light} />
          <Image style={styles.dots} source={dark} />
        </View>

        <View style={styles.text}>
          <Text style={styles.myGoalsText}>Scuba Diving</Text>
        </View> */}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  greenIMG: {
    width: 600.1,
    height: 670.02,
    top: -400.69,
    left: -120,
    transform: [
      {
        rotate: "-2.02deg",
      },
    ],
  },
  hey: {
    top: -375.69,
    fontWeight: "normal",
    paddingLeft: 30,
    fontSize: 20,
  },
  myListText: {
    top: -375.69,
    fontWeight: "bold",
    paddingLeft: 30,
    fontSize: 20,
  },
  drop: {
    width: 30.1,
    height: 30.02,
    top: -400.69,
    marginLeft: 95,
  },
  dots: {
    width: 50.1,
    height: 50.02,
    top: -375.69,
    marginLeft: 25,
    marginBottom: 25,
  },
  myGoalsText: {
    top: -370.69,
    fontWeight: "bold",
    paddingLeft: 65,
    fontSize: 18,
  },
  myGoalsInfo: {
    top: -375.69,
    fontWeight: "bold",
    paddingLeft: 65,
    fontSize: 18,
    color: "#D9D9D9",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
  },
  item: {
    width: "50%", // is 50% of container width
  },
  text: {
    width: "50%",
  },
  cont: {
    display: "flex",
  },
});
