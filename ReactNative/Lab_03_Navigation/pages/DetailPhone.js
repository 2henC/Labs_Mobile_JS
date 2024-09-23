import { useEffect, useState } from "react"
import { Text, View, Image, Button, StyleSheet } from "react-native"

const DetailPhone = ({ navigation, route }) => {

  const [imageSource, setImageSource] = useState(require("../assets/images/vs_blue.png"));
  const [color, setColor] = useState('vs_blue');

  useEffect(() => {
    switch (color) {
      case 'vs_blue':
        setImageSource(require("../assets/images/vs_blue.png"));
        break;
      case 'vs_red':
        setImageSource(require("../assets/images/vs_red.png"));
        break;
      case 'vs_silver':
        setImageSource(require("../assets/images/vs_silver.png"));
        break;
      case 'vs_black':
        setImageSource(require("../assets/images/vs_black.png"));
        break;
    }
  }, [color])

  const handleSubmit = () => {
    navigation.navigate({
      name: 'Phone',
      params: { color },
      merge: true,
    });
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Image
          source={imageSource}
          style={{ width: 100, height: 150, resizeMode: 'contain' }}
        />
        <View style={{ marginTop: 10 }}>
          <Text>Điện Thoại Vsmart Joy 3</Text>
          <Text>Hàng chính hãng</Text>
        </View>
      </View>

      <View style={styles.choose_color}>
        <View>
          <Text>Chọn một màu bên dưới: </Text>
          <View style={{ alignItems: 'center', gap: 10, paddingVertical: 10 }}>
            <Text style={[styles.block_color, { backgroundColor: 'silver' }]} onPress={() => setColor('vs_silver')}></Text>
            <Text style={[styles.block_color, { backgroundColor: 'black' }]} onPress={() => setColor('vs_black')}></Text>
            <Text style={[styles.block_color, { backgroundColor: 'red' }]} onPress={() => setColor('vs_red')}></Text>
            <Text style={[styles.block_color, { backgroundColor: 'blue' }]} onPress={() => setColor('vs_blue')}></Text>
          </View>
        </View>

      </View>
      <View style={{ position: 'absolute', bottom: 10, left: "50%", width: 200, transform: [{ translateX: (-75) }] }}>
        <Button buttonStyle={{ backgroundColor: 'red' }} title="XONG" onPress={() => handleSubmit()} />
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

  },
  choose_color: {
    justifyContent: 'space-between'
  },
  block_color: {
    width: 100,
    height: 100,

  }
})
export default DetailPhone