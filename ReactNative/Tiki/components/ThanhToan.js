import { View, Text, StyleSheet, Button } from "react-native"

const ThanhToan = () => {
  return (
    <View style={styles.container}>
      <View style={styles.totalPrice}>
        <Text style={styles.price}>Thành tiền</Text>
        <Text style={styles.text}> 141800 đ</Text>
      </View>
      <Button title="TIẾN HÀNH ĐẶT HÀNG" color="red" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    marginTop: 'auto',
    backgroundColor: 'white'
  },
  totalPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  text: {
    fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: "red"
  },
  price: {
    fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'gray'
  }
})
export default ThanhToan