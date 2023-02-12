import React from 'react';
import { TouchableOpacity, StyleSheet, Image, ImageBackground, Text, View, Button, ScrollView, TextInput } from "react-native";
import popcornImg from "../assets/popcorn.png";
import basketballImg from "../assets/basketball.png";
import scubaImg from "../assets/scubaIcon.png";
import masksImg from "../assets/masks.png";
import booksImg from "../assets/books.png";
import aerobicexerciseImg from "../assets/aerobicexercise.png";
import moviesImg from "../assets/movies.png";
import pianoImg from "../assets/piano.png";
import searchbarImg from "../assets/searchbar.png";
import searchImg from "../assets/Search.png";

const SearchScreen = () => {
  return (
    <ImageBackground source={require("../assets/browse_bg.png")} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
      <View style={{marginTop: 60, justifyContent: 'center', alignItems: 'center',}}>
        <Image source={searchbarImg}></Image>
        <Image style={{top: -46, right: -150}}source={searchImg}></Image>
        <TextInput style={{top: -66, left: -135}}>Search</TextInput>
      </View>
      <View style={{marginTop: -20, marginLeft: 32}}>
        <Text style={{fontSize: 38, color: '#4A4A4A'}}>Find a new</Text>
        <Text style={{fontSize: 38, color: '#4A4A4A'}}>adventure!</Text>
        <Text style={{marginVertical: 18, color: '#4A4A4A'}}>What experience do you want next?</Text>
      </View> 
      <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.fixToText}>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 16, marginHorizontal: 33, color: '#4A4A4A'}}><Image source={popcornImg}></Image> Chill</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 16, marginHorizontal: 18, color: '#4A4A4A'}}><Image source={basketballImg}></Image> Moderate</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fixToText}> 
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 16, marginHorizontal: 18, color: '#4A4A4A'}}><Image style={{height: 16}} source={scubaImg}></Image> Extreme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 16, marginHorizontal: 15, color: '#4A4A4A'}}><Image source={masksImg}></Image> RANDOM!</Text>
          </TouchableOpacity>
        </View>
      </View> 
      <Text style={{color: '#4A4A4A', fontSize: 22, marginTop: 12, marginBottom: 10, marginLeft: 38}}>Category</Text>
      <View style={{marginLeft: 32}}> 
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.fixToText} horizontal={true}>
          <TouchableOpacity style={styles.card}>
            <Text style={{fontSize: 16, left: -45, top: 8, marginBottom: 10}}>Books</Text>
            <Image style={{ bottom: -20, height: 165, width: 150}}source={booksImg}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={{fontSize: 16, left: -10, top: 8, marginBottom: 10}}>Aerobic Exercise</Text>
            <Image style={{ bottom: -10, height: 163, width: 135}}source={aerobicexerciseImg}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={{fontSize: 16, left: -40, top: 12, marginBottom: 10}}>Movies</Text>
            <Image style={{ bottom: -10, height: 170, width: 160}}source={moviesImg}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={{fontSize: 16, left: -40, marginBottom: 10}}>Instruments</Text>
            <Image style={{ bottom: -10, height: 143, width: 110}}source={pianoImg}></Image>
          </TouchableOpacity>
        </View>
        </ScrollView>
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
    padding: 14,
    margin: 10,
    justifyContent: 'center',
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  card: {
    height: 230,
    width: 200,
    justifyContent: 'center',
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
  },
  searchBar: {
    borderColor: '#969696',
    borderWidth: 2,
    borderRadius: 7,
    height: 30,
    width: 140,
    marginLeft: 10,
    marginVertical: 2,
},
});