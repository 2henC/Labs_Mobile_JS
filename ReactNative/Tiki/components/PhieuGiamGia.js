import { StyleSheet, Text, View } from "react-native"

const PhieuGiamGia = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontStyle: 'italic' }}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
      <Text style={{ color: 'blue', fontWeight: 'bold', fontStyle: 'italic' }}>Nhập tại đây!</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'white'
  }
})
export default PhieuGiamGia