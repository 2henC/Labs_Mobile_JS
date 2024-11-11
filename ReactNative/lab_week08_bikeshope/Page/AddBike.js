import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBike } from '../redux/slice';

export default function AddBike({ navigation }) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleAddBike = () => {
    if (!name || !price || !description || !image) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    const newBike = {
      id: Date.now().toString(),
      name,
      price: parseFloat(price),
      description,
      image,
    };

    dispatch(addBike(newBike));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add New Bike</Text>
      </View>

      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        value={description}
        onChangeText={setDescription}
        multiline
        textAlignVertical="top"
      />

      <Text style={styles.label}>Image URL:</Text>
      <TextInput style={styles.input} value={image} onChangeText={setImage} />

      <View style={{ marginBottom: 10 }}>
        <Button title="Add Bike" onPress={handleAddBike} />
      </View>

      <View style={{ marginBottom: 10 }}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    paddingVertical: 15,
    backgroundColor: '#eee',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
    padding: 8,
  },
  descriptionInput: {
    height: 120,
    textAlignVertical: 'top',
  },
});
