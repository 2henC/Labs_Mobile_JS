
import {React} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from "react-native-elements";

const styles = StyleSheet.create({
  container : {
    backgroundColor: 'white',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  item: {
    flexDirection: 'row',
    gap: 20
  },
  item_info : {
    gap: 8
  }

})

export default function Card ({data}) {

  const handleClick = () => {
    alert("Click")
  }
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image source={require('../assets/img/ca_nau_lau.png')} />
        <View style={styles.item_info}>
          <Text>{data.name}</Text>
          <Text>Shop {data.shop}</Text>
        </View>
      </View>
      <View>
        <Button buttonStyle={{backgroundColor:"red", width: 80, height: 35, marginTop: 20}} title="Chat"></Button>
      </View>
    </View>
  )
}