import React from 'react';
import { TouchableOpacity, StyleSheet, Image, ImageBackground, Text, View, Button } from "react-native";

const SearchScreen = () => {
  return (
    <ImageBackground source={require("../assets/browse_bg.png")} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', objectFit: 'cover'}}>
    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
      <View style={{marginTop: 150, marginLeft: 40}}>
        <Text style={{fontSize: 40}}>Find a new</Text>
        <Text style={{fontSize: 40}}>adventure!</Text>
        <Text style={{marginVertical: 20}}>What experience do you want next?</Text>
      </View> 
      <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.fixToText}>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 16, marginHorizontal: 35}}>Chill</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 16, marginHorizontal: 20}}>Moderate</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fixToText}> 
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 16, marginHorizontal: 20}}>Extreme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 16, marginHorizontal: 17}}>RANDOM!</Text>
          </TouchableOpacity>
        </View>
        <Text>Category</Text>
        <View style={styles.fixToText}>
          <Button style={styles.btn} title="Movies" />
          <Button title="Restaurant" />
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 16, marginHorizontal: 10}}>Chill</Text>
          </TouchableOpacity>
        </View>
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
  button: {
    padding: 18,
    justifyContent: 'center',
    borderRadius: 13,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
}
});