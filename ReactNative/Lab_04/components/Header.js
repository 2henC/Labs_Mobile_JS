import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container : {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'cyan',
    padding: 5,
    alignItems: 'center'
  }
})

export default function Header () {
  return (
    <View style={styles.container}>
      <View><Ionicons name="arrow-back-outline" size={24} color="black" /></View>
      <View><Text>CHAT</Text></View>
      <View><MaterialIcons name="local-grocery-store" size={24} color="black" /></View>
    </View>
  )
}