import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Button } from 'react-native-paper';

export default NoteDetail = (props) => {
  const { item } = props.route.params;
  const navigation = props.navigation;

  const [note, setNote] = useState(item?.name);

  const handleUpdateNote = () => {
    const updatedNote = {
      ...item,
      name: note,
    };
    navigation.navigate({ name: 'Home', params: { updatedNote }, merge: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
        <View style={{ flex: 2 }}>
          <AntDesign
            name="back"
            size={24}
            color="black"
            onPress={() => navigation.navigate('Home')}
            style={{ alignSelf: 'flex-end' }}
          />
        </View>
      </View>
      <View>
        <Text style={styles.title}>Edit your task</Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <AntDesign
          name="profile"
          size={24}
          color="black"
          style={{ position: 'absolute', left: 5, top: 2 }}
        />
        <TextInput
          style={styles.inputTask}
          placeholder="Search"
          value={note}
          onChangeText={(value) => setNote(value)}
        />
      </View>
      <View style={{ alignItems: 'center', margin: 20 }}>
        <Button
          mode="contained"
          style={styles.buttonStart}
          onPress={handleUpdateNote}>
          FINISH
        </Button>
      </View>
      <View style={{ alignItems: 'center', margin: 20 }}>
        <Image
          source={require('../assets/image/Image95.png')}
          style={styles.image}
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
  title: { textAlign: 'center', fontWeight: 'bold', fontSize: 24, margin: 10 },
  inputTask: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    paddingLeft: 40,
  },
  buttonStart: {
    borderRadius: 10,
    backgroundColor: 'green',
    width: 200,
  },
  image: {
    width: 100,
    height: 100,
  },
});
