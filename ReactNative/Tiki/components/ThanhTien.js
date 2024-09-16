import { StyleSheet, Text, View } from "react-native"

const ThanhTien = ({ tongTien }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>Tạm tính</Text>
      <Text style={styles.text}> 141800 đ</Text>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: "red"
  },
  price: {
    fontSize: 20, fontWeight: 'bold', textAlign: 'center'
  }
})
export default ThanhTien