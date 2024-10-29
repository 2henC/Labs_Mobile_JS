import React from 'react';
import { Text, View, TextInput, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import AntDesign from '@expo/vector-icons/AntDesign';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 40,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    color: 'purple',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputName: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    paddingLeft: 40,
  },
  buttonStart: {
    borderRadius: 10,
    backgroundColor: 'green',
  },
});

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('../assets/image/Image95.png')}
          style={styles.image}
        />
      </View>

      <View>
        <Text style={styles.title}>MANAGE YOUR TASK</Text>
      </View>
      <View style={{position: 'relative', justifyContent: 'center'}}>
        <AntDesign
          name="mail"
          size={24}
          color="black"
          style={{ position: 'absolute', left: 10}}
        />
        <TextInput style={styles.inputName} placeholder="Enter your mail"/>
      </View>
      <View>
        <Button
          mode="contained"
          style={styles.buttonStart}
          onPress={() => navigation.navigate('Home')}>
          GET STARTED
        </Button>
      </View>
    </View>
  );
}
