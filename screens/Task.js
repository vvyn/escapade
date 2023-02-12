import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import dark from "../assets/dark.png";
import light from "../assets/light.png";

// Used this source for code: https://www.youtube.com/watch?v=0kL6nhutjQ8

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
      <Image style={styles.square} source={dark} />
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 50,
    height: 50,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
    marginLeft: 10,
  },
  itemText: {
    maxWidth: '80%',
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Task;