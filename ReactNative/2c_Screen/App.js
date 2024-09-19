import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(0);

  const handleGenerate = () => {
    setPassword(password);
    setLength(password.length)
  }

  return (
    <View style={{ backgroundColor: '#3B3B98', flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>PASSWORD</Text>
          <Text style={styles.textHeader}>GENERATE</Text>
        </View>
        <TextInput style={styles.passwordInput} value={password} onChangeText={v => setPassword(v)} />
        <View style={styles.flex_row_between}>
          <Text style={styles.textTitle}>Password length</Text>
          <TextInput style={styles.lengthPassword} value={length.toString()} editable={false} />
        </View>
        <View style={styles.flex_row_between}>
          <Text style={styles.textTitle}>Include lower case letters</Text>
          <TextInput style={styles.checkBox} />
        </View>
        <View style={styles.flex_row_between}>
          <Text style={styles.textTitle}>Include upcase letters</Text>
          <TextInput style={styles.checkBox} />
        </View>
        <View style={styles.flex_row_between}>
          <Text style={styles.textTitle}>Include number</Text>
          <TextInput style={styles.checkBox} />
        </View>
        <View style={styles.flex_row_between}>
          <Text style={styles.textTitle}>Include spceical symbol</Text>
          <TextInput style={styles.checkBox} />
        </View>
        <View style={styles.buttonSubmit}>
          <Button title='Generate Password' onPress={handleGenerate} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23235B',
    margin: 20,
    borderRadius: 30,
  },
  flex_row_between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 10
  },
  header: {
    alignItems: 'center',
    marginVertical: 40
  },
  textHeader: {
    fontSize: 24,
    color: 'white',
    fontWeight: '500'
  },
  passwordInput: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#151537',
    marginHorizontal: 10,
    padding: 10,
    marginBottom: 30,
    color: 'white'
  },
  lengthPassword: {
    backgroundColor: 'white',
    width: 100,
    textAlign: 'center'
  },
  textTitle: {
    color: 'white',
    fontSize: 18
  },
  checkBox: {
    backgroundColor: 'white'
  },
  buttonSubmit: {
    margin: 'auto'
  }


});
