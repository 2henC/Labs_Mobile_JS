import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateBike } from '../redux/slice';

export default function EditBike({ route, navigation }) {
  const { bikeId } = route.params;
  const dispatch = useDispatch();

  const bike = useSelector((state) => 
    state.bike.bikes.find((b) => b.id === bikeId)
  );

  const [name, setName] = useState(bike?.name || '');
  const [price, setPrice] = useState(bike?.price.toString() || '');
  const [description, setDescription] = useState(bike?.description || '');
  const [image, setImage] = useState(bike?.image || '');

  useEffect(() => {
    if (!bike) {
      Alert.alert('Error', 'Bike not found');
      navigation.goBack();
    }
  }, [bike]);

  const handleSave = () => {
    dispatch(updateBike({
      id: bikeId,
      name,
      price: parseFloat(price),
      description,
      image,
    }));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>EDIT BIKE</Text>


      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      
      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={[styles.input, {height: 120, textAlignVertical: 'top'}]}
        value={description}
        onChangeText={setDescription}
        multiline
      />
      
      <Text style={styles.label}>Image URL:</Text>
      <TextInput
        style={styles.input}
        value={image}
        onChangeText={setImage}
      />
      
      <Button title="Save Changes" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
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
});
