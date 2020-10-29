import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View,StyleSheet,Text,Image, TouchableOpacity,ScrollView} from 'react-native';
import { Audio } from 'expo-av';


const AllBackgroundColors = {
  1:  "#A3CB37",
  2:  "#43BE31",
  3:  "#2ecc72",
  4:  "#F5C469",
  5:  "#EEC213",
  6:  "#BB2CD9",
  7:  "#E1DA00",
  8:  "#E83350",
  9:  "#AE1438",
  10: "#3498DB"

}

const allSounds = {
  one:  require('./assets/one.wav'),
  two:  require('./assets/two.wav'),
  three:require('./assets/three.wav'),
  four: require('./assets/four.wav'),
  five: require('./assets/five.wav'),
  six:  require('./assets/six.wav'),
  seven:require('./assets/seven.wav'),
  eight:require('./assets/eight.wav'),
  nine: require('./assets/nine.wav'),
  ten:  require('./assets/ten.wav'),
}
export default class App extends React.Component{
  playSound = async number => {
    const soundObject = new Audio.Sound();
    try {
      let path = allSounds[number]
      await soundObject.loadAsync(path)
      await soundObject
      .playAsync()
      .then( async playbackStatus => {
        setTimeout(() => {
          soundObject.unloadAsync();
        }, playbackStatus.playableDurationMillis);
      })
      .catch(error => {
        console.log(error);
      })
    } catch (error) {
      console.log(error);
    }
  }
  render(){
    return(
      <ScrollView style = {styles.container}>
            <View style = {styles.gridContainer}>
        <Text style={styles.firText}> Spanish Number App </Text>
        <Image style = {styles.logo} source={require("./assets/logo.png")} />
        <View style = {styles.rowContainer}> 
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[1]} ,styles.item]} onPress = {() => {this.playSound("one")}}>
          <Text style = {styles.itemText}>ONE</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[2]} ,styles.item]} onPress = {() => {this.playSound("two")}}>
          <Text style = {styles.itemText}>TWO</Text>
        </TouchableOpacity>
        </View>
        <View style = {styles.rowContainer}> 
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[3]} ,styles.item]} onPress = {() => {this.playSound("three")}}>
          <Text style = {styles.itemText}>THREE</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[4]} ,styles.item]} onPress = {() => {this.playSound("four")}}>
          <Text style = {styles.itemText}>FOUR</Text>
        </TouchableOpacity>
        </View>
        <View style = {styles.rowContainer}> 
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[5]} ,styles.item]} onPress = {() => {this.playSound("five")}}>
          <Text style = {styles.itemText}>FIVE</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[6]} ,styles.item]} onPress = {() => {this.playSound("six")}}>
          <Text style = {styles.itemText}>SIX</Text>
        </TouchableOpacity>
        </View>
        <View style = {styles.rowContainer}> 
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[7]} ,styles.item]} onPress = {() => {this.playSound("seven")}}>
          <Text style = {styles.itemText}>SEVEN</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[8]} ,styles.item]} onPress = {() => {this.playSound("eight")}}>
          <Text style = {styles.itemText}>EIGHT</Text>
        </TouchableOpacity>
        </View>
        <View style = {styles.rowContainer}> 
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[9]} ,styles.item]} onPress = {() => {this.playSound("nine")}}>
          <Text style = {styles.itemText}>NINE</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[{backgroundColor: AllBackgroundColors[10]} ,styles.item]} onPress = {() => {this.playSound("ten")}}>
          <Text style = {styles.itemText}>TEN</Text>
        </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  firText:{
    marginTop: 30,
    marginBottom: 15,
    marginLeft: 35,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#A3CB37',
  },
  gridContainer:{
    flex: 1,
    margin: 5,
  },
  logo:{
    alignSelf: "center",
    marginTop: 15,
    height: 250,
    width: 250
  },
  rowContainer:{
    flexDirection: "row"
  },
  item:{
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: 'center',
    margin: 2
  },
  itemText:{
    color: "#ffffff",
    fontSize: 20
  }
});