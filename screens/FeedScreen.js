import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Pressable, TouchableOpacity } from "react-native";

  

const FeedScreen = () => {
  const[count, setCount] = useState(0);
  const[count2, setCount2] = useState(0)

  return (
    <View style={styles.container}>
      <ScrollView>
      <Image source={require("../assets/feed_bg.png")}
             style={styles.headerContainer}></Image>
        <Text style={styles.headerTitle}>Mark's Feed</Text>

      
        <Text style={styles.textContainer}>
          <Image source={require("../assets/friends_profile5.png")}
                 style = {styles.profilePic}>
          </Image>
          <Text style={{textAlign: 'center'}}>  Maia </Text>
          <Text style={{textAlign: 'center'}}>                                       </Text>
          <Text style={{textAlign: 'center'}}> Feb 12th</Text>
        </Text>
        
        <View style={styles.line}></View>

        <Text style={{fontSize:20, marginHorizontal: 30, marginVertical: 30}}>Participated in my first hackathon!!</Text>
       
        <TouchableOpacity 
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
          onPress={() => {setCount(count + 1)}}>
          <Image
            source={require("../assets/heart.png")}
            style={styles.likeButton}
          />
          <Text style={styles.numLikes}>{count}</Text>
        </TouchableOpacity>

        <Text style={styles.textContainer}>
          <Image source={require("../assets/friends_profile4.png")}
                 style = {styles.profilePic}>
          </Image>
          <Text style={{textAlign: 'center'}}>  John with Tom </Text>
          <Text style={{textAlign: 'center'}}>                       </Text>
          <Text style={{textAlign: 'center'}}>Jan 23rd</Text>
        </Text>
        
        <View style={styles.line}></View>

        <Text style={{fontSize:20, marginHorizontal: 30, marginVertical: 30}}>Skydiving woohoo!</Text>

        <Image source={require("../assets/skydiving.png")}
               style={styles.postPic}>
               </Image>

        <TouchableOpacity 
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
          onPress={() => {setCount2(count2 + 1)}}>
          <Image
            source={require("../assets/heart.png")}
            style={styles.likeImage}
          />
          <Text style={styles.numImg}>{count2}</Text>
        </TouchableOpacity>



        <Text style={styles.textContainer}>
          <Image source={require("../assets/friends_profile1.png")}
                 style = {styles.profilePic}>
          </Image>
          <Text style={{textAlign: 'center'}}>  Kasey </Text>
          <Text style={{textAlign: 'center'}}>                               </Text>
          <Text style={{textAlign: 'center'}}>      Jan 21st</Text>
        </Text>
        
        <View style={styles.line}></View>

        <Text style={{fontSize:20, marginHorizontal: 30, marginVertical: 30}}>Say hi to the fish!</Text>

        <Image source={require("../assets/scuba.png")}
               style={styles.postPic}>
               </Image>
        
               <TouchableOpacity 
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
          onPress={() => {setCount(count + 1)}}>
          <Image
            source={require("../assets/heart.png")}
            style={styles.likeImage}
          />
          <Text style={styles.numImg}>{count}</Text>
        </TouchableOpacity>

        <Text style={styles.textContainer}>
          <Image source={require("../assets/friends_profile3.png")}
                 style = {styles.profilePic}>
          </Image>
          <Text style={{textAlign: 'center'}}>  Grace </Text>
          <Text style={{textAlign: 'center'}}>                                     </Text>
          <Text style={{textAlign: 'center'}}> Jan 14th</Text>
        </Text>
        
        <View style={styles.line}></View>

        <Text style={{fontSize:20, marginHorizontal: 30, marginVertical: 30}}>Went to Indonesia last week :)</Text>

        <TouchableOpacity 
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
          onPress={() => {setCount2(count2 + 1)}}>
          <Image
            source={require("../assets/heart.png")}
            style={styles.likeButton}
            
          />
          <Text style={styles.numLikes}>{count2}</Text>
        </TouchableOpacity>

        <Text style={styles.textContainer}>
          <Image source={require("../assets/friends_profile2.png")}
                 style = {styles.profilePic}>
          </Image>
          <Text style={{textAlign: 'center'}}>  Emily </Text>
          <Text style={{textAlign: 'center'}}>                                       </Text>
          <Text style={{textAlign: 'center'}}> Jan 8th</Text>
        </Text>
        
        <View style={styles.line}></View>

        <Text style={{fontSize:20, marginHorizontal: 30, marginVertical: 30}}>Completed horseback riding!</Text>

        <TouchableOpacity 
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
          onPress={() => {setCount(count + 1)}}>
          <Image
            source={require("../assets/heart.png")}
            style={styles.likeButton}
          />
          <Text style={styles.numLikes}>{count}</Text>
        </TouchableOpacity>

        <Text style={styles.textContainer}>
          <Image source={require("../assets/user_profile_pic.png")}
                 style = {styles.profilePic}>
          </Image>
          <Text style={{textAlign: 'center'}}>  Ethan </Text>
          <Text style={{textAlign: 'center'}}>                                    </Text>
          <Text style={{textAlign: 'center'}}> Dec 19th</Text>
        </Text>
        
        <View style={styles.line}></View>

        <Text style={{fontSize:20, marginHorizontal: 30, marginVertical: 30}}>Went to Paris with my buddies!</Text>

        <Image source={require("../assets/paris.png")}
               style={styles.postPic}>
               </Image>
        <TouchableOpacity 
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
          onPress={() => {setCount(count + 1)}}>
          <Image
            source={require("../assets/heart.png")}
            style={styles.likeImage}
          />
          <Text style={styles.numImg}>{count}</Text>
        </TouchableOpacity>


        
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white'
  },
  
  headerContainer: {
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: 'white'
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left', 
    marginVertical: 90,
    marginLeft: 40,
    position: 'absolute',
  },

  textContainer: {
    justifyContent: 'center',
    marginVertical: 30, 
    marginHorizontal: 20, 
    fontSize: 20, 
    color: 'black', 
    backgroundColor: 'white', 
    marginTop: 20,
  },

  /*userTitle: {
    fontSize: 20,
    color: 'black',
    textAlignVertical: 'center',
    marginHorizontal: 45,
    marginVertical: 30,
   

  },

  date: {
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
    textAlignVertical: 'center',
  },*/

  profilePic: {
    /*
    marginVertical: 30, 
    marginHorizontal: 10,*/
    width: 50,
    height: 50,
    
  },

  line: {
    borderBottomColor: 'black', 
    borderBottomWidth: '2%', 
    marginHorizontal: 20, 
    marginVertical: -20
  },

  postPic: {
    justifyContent: 'center',
    marginHorizontal: 15,
    width: 400,
    height: 400,
  },

  likeButton: { 
    marginHorizontal: 20,
    marginVertical: -25,
    width: 40,
    height: 40,
  },

  numLikes: {
    marginHorizontal: 60,
    marginVertical: -7,
    fontSize: 15,
  },

  likeImage: { 
    marginHorizontal: 20,
    marginVertical: 10,
    width: 40,
    height: 40,
  },

  numImg: {
    marginHorizontal: 60,
    marginVertical: -15,
    fontSize: 15,
  },


});



export default FeedScreen;
