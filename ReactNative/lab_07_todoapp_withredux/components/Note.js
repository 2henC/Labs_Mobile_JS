import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Checkbox } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 20,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default Note = ({ itemInfo, handleDeleteNote, handleViewNote }) => {
  const [checked, setChecked] = useState(itemInfo.status);

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.content}>
        <View>
          <Checkbox
            color="gray"
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View>
        <View>
          <Text style={checked ? { textDecorationLine: 'line-through' } : {}}>
            {itemInfo.name}
          </Text>
        </View>
      </View>

      <View style={styles.action}>
        <AntDesign
          name="edit"
          size={24}
          color="black"
          onPress={() => handleViewNote()}
        />
        <AntDesign
          name="delete"
          size={24}
          color="black"
          onPress={() => handleDeleteNote(itemInfo.id)}
        />
      </View>
    </TouchableOpacity>
  );
};
