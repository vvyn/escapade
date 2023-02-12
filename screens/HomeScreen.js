import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import Task from "./Task.js";
import bg from "../assets/bg5.png";
import drop from "../assets/drop.png";

// Used this source for code: https://www.youtube.com/watch?v=0kL6nhutjQ8

const HomeScreen = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View>
        <ImageBackground style={styles.greenIMG} source={bg}>
          <Text style={styles.hey}>Hey</Text>
        </ImageBackground>

      <Text style={styles.myListText}>My List</Text>
      <Image style={styles.drop} source={drop} />

      <View style={styles.tasksWrapper}>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  greenIMG: {
    width: 600.1,
    height: 670.02,
    top: -380.69,
    left: -124,
    transform: [
      {
        rotate: "-2.02deg",
      },
    ],
  },
  hey: {
    top: 30,
    fontWeight: "normal",
    position: "absolute",
    paddingLeft: 30,
    fontSize: 20,
    zIndex: 1,
  },
  myListText: {
    top: -360.69,
    fontWeight: "bold",
    paddingLeft: 30,
    fontSize: 20,
  },
  drop: {
    width: 30.1,
    height: 30.02,
    top: -385.69,
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
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    marginTop: -310,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  writeTaskWrapper: {
    position: "absolute",
    width: "100%",
    marginTop: 380,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    position: "absolute",
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    width: 275,
    marginLeft: 30,
  },
  items: {
    marginBottom: -10,
  },
  addWrapper: {
    width: 60,
    position: "absolute",
    height: 60,
    backgroundColor: "#5BB097",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 340,
    marginTop: -30,
  },
  addText: {
    color: "#FFF",
    position: "absolute",
    fontSize: 30,
    fontWeight: "bold",
  },
});
