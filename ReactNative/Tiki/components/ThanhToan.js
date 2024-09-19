import { View, Text, StyleSheet, Button, Alert } from "react-native"

const ThanhToan = ({ soLuong, gia }) => {
  const handlePay = () => {
    Alert.alert('Thông báo', `Đồng ý thanh toán ${soLuong * gia}đ`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.totalPrice}>
        <Text style={styles.price}>Thành tiền</Text>
        <Text style={styles.text}> {soLuong * gia} đ</Text>
      </View>
      <Button title="TIẾN HÀNH ĐẶT HÀNG" color="red" onPress={handlePay} />
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