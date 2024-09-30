import React from "react";
import {View, Text, StyleSheet} from "react-native";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


const styles = StyleSheet.create({
  container : {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'cyan',
    padding: 5,
    alignItems: 'center' 
  }
})

export default function Footer () {
  return (
    <View style={styles.container}>
      <View><SimpleLineIcons name="menu" size={24} color="black" /></View>
      <View><Text>CHAT</Text></View>
      <View><Ionicons name="home" size={24} color="black" /></View>
    </View>
  )
}