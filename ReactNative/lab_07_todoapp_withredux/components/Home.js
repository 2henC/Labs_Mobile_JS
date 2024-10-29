import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import Note from './Note';
import { noteList } from '../assets/data';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../redux/slice';

export default Home = ({ navigation, route }) => {
  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const listNotes = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const [note, setNote] = useState('');
  // const [listNotes, setListNotes] = useState(tasks);

  const handleAddNote = () => {
    if (note.trim().length > 0) {
      const newNote = {
        id: getRandomArbitrary(1, 100),
        name: note,
        status: 0
      };
      dispatch(addTask(newNote));
      setNote('');
    } else {
      alert('No input');
    }
  };

  const handleUpdateNote = (updatedData) => {
    dispatch(updateTask(updatedData))
  };

  useEffect(() => {
    if (route.params?.updatedNote) {
      handleUpdateNote(route.params.updatedNote);
    }
  }, [route.params?.updatedNote]);

  const handleViewNote = (item) => {
    navigation.navigate('NoteDetail', { item });
  };

  const handleDeleteNote = (id) => {
      dispatch(deleteTask(id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 2 }}>
          <AntDesign
            name="back"
            size={24}
            color="black"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <View style={styles.userInfo}>
          <View style={{ flex: 1 }}>
            <Image
              source={require('../assets/image/Image95.png')}
              style={styles.avata}
            />
          </View>
          <View style={{ flex: 3 }}>
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
              Hi Twinkle
            </Text>
            <Text
              style={{ fontWeight: 'bold', fontSize: 12, textAlign: 'center' }}>
              Have agrate day a head
            </Text>
          </View>
        </View>
      </View>

      <View style={{ marginVertical: 40 }}>
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={{ position: 'absolute', left: 5, top: 2 }}
        />
        <TextInput
          style={styles.inputSearch}
          placeholder="Search"
          value={note}
          onChangeText={(value) => setNote(value)}
        />
      </View>

      <View>
        <FlatList
          data={listNotes}
          renderItem={({ item }) => (
            <Note
              itemInfo={item}
              handleViewNote={() => handleViewNote(item)}
              handleDeleteNote={() => handleDeleteNote(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.buttonAddNote}>
        <AntDesign
          name="pluscircle"
          size={50}
          color="skyblue"
          onPress={() => handleAddNote()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    flex: 3,
    alignItems: 'center',
  },
  avata: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  inputSearch: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    paddingLeft: 30,
  },
  buttonAddNote: {
    alignItems: 'center',
  },
});
