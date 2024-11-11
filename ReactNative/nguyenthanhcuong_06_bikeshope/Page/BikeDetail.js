import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import {
  Button,
  IconButton,
  Checkbox,
  RadioButton,
  Card,
  Avatar,
} from 'react-native-paper';
import { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

export default function BikeDetail({ route }) {
  const { data } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 3,
          backgroundColor: 'pink',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{ uri: data.image }}
          style={styles.imageBike}
          resizeMode="center"
        />
      </View>

      <View style={{ flex: 3, gap: 10 }}>
        <Text style={styles.title}>{data.name}</Text>
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <Text>
            <Text style={{ color: 'red' }}>15% OFF</Text> |{' '}
            <Text style={{ fontWeight: 'bold' }}>{(data.price*0.85).toFixed(2)}$</Text>
          </Text>
          <Text style={{ textDecorationLine: 'line-through' }}>{data.price}$</Text>
        </View>
        <Text style={{ fontWeight: 'bold' }}>Description</Text>
        <Text>{data.description}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <IconButton icon="camera" style={{ flex: 1 }} />
        <Button
          style={styles.button}
          color="white"
          uppercase={false}
          onPress={() => navigation.goBack()}>
          Add to card
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  imageBike: {
    width: 300,
    height: 300,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 20,
    flex: 3,
  },
});
