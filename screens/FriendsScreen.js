import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";

const FriendsScreen = () => {
  return (
    <View>
    <Text style={styles.headerTitle}>Let's go ...</Text>
    <Image source={require("../assets/Card_stack.png")}
            style={styles.friend}>
    </Image>
    
    </View>
    

  )
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left', 
    marginVertical: 70,
    marginLeft: 40,
    position: 'absolute',
  },
  friend: {
    alignContent: 'center',
    marginVertical: 130,
    marginHorizontal: 20,
    
  },

});

export default FriendsScreen