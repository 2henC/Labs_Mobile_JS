import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { Menu } from "react-native-paper";


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'cyan',
    padding: 5,
    alignItems: 'center',
    position: 'absolute',
    bottom: 26,
    width: "100%"
  }
})

const Tab = createBottomTabNavigator();

export default function Footer() {
  return (
    <SafeAreaView style={styles.container}>
      <View><SimpleLineIcons name="menu" size={24} color="black" /></View>
      <View><Text>CHAT</Text></View>
      <View><Ionicons name="home" size={24} color="black" /></View>
    </SafeAreaView>
  )
}