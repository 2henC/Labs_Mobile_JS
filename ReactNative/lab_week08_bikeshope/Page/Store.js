import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useState, useEffect } from 'react';
import { Button, ActivityIndicator } from 'react-native-paper';
import BikeCard from './BikeCard';
import { setInitialBikes } from '../redux/slice';
import { useDispatch, useSelector } from 'react-redux';

export default function Store({ navigation }) {
  const dispatch = useDispatch();
  const bikes = useSelector((state) => state.bike.bikes);

  useEffect(() => {
    fetch('https://671154ee4eca2acdb5f4870b.mockapi.io/api/Bike')
      .then(async (res) => {
        const data = await res.json();
        dispatch(setInitialBikes(data));
      })
      .catch((err) => alert(err));
  }, [dispatch]);

  const renderBike = ({ item }) => {
    return <BikeCard data={item} />;
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginVertical: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.title}>The world's Best Bike </Text>
        <Button onPress={() => navigation.navigate('Home')}>Back home </Button>
      </View>

      <View style={{borderWidth:1, marginBottom: 10}}>
        <Button onPress={() => navigation.navigate('AddBike')}>Add New Bike</Button>
      </View>

      <View style={styles.header}>
        <TouchableOpacity style={[styles.headerTab, { color: 'red' }]}>
          All
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerTab}>Roadbike</TouchableOpacity>
        <TouchableOpacity style={styles.headerTab}>Mountain</TouchableOpacity>
      </View>

      <ScrollView>
        <FlatList data={bikes} renderItem={renderBike} numColumns={2} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTab: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    maxWidth: 150,
    minWidth: 100,
    textAlign: 'center',
    color: 'gray',
    paddingVertical: 2,
  },
});
