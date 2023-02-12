import React from 'react';
import { StyleSheet, Image, ImageBackground, Text, View, Button } from "react-native";

const SearchScreen = () => {
  return (
    <ImageBackground source={require("../assets/browse_bg.png")} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', objectFit: 'cover'}}>
    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Find a new</Text>
      <Text>Adventure</Text>
      <Text>What experience do you want next?</Text>
      <View style={styles.fixToText}>
        <Button title="Chill" />
        <Button title="Moderate" />
      </View>
      <View style={styles.fixToText}> 
        <Button title="Extreme" />
        <Button title="RANDOM!" />
      </View>
      <Text>Category</Text>
      <View style={styles.fixToText}>
        <Button title="Movies" />
        <Button title="Restaurant" />
      </View>
    </View>
    </ImageBackground>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topbtns: {
    borderColor: 'black',
    backgroundColor: 'red'
  }
});