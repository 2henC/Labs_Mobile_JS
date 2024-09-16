import { Button, Dimensions, Image, StyleSheet, Text, TextInput, View } from "react-native"

const ThongTinSach = ({ tenSach, nhaCungCap, giaCu, giaMoi }) => {

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={[styles.container, { maxWidth: screenWidth * 1 }]}>
      <View style={{ flexDirection: 'row', gap: 40 }}>
        <View style={{ flex: 1 }}>
          <Image style={{ height: screenWidth * 0.45, width: screenWidth * 0.33 }} source={require('../assets/book.png')} />
        </View>
        <View style={styles.thongTinSach}>
          <Text style={styles.text} numberOfLines={2}>{tenSach}</Text>
          <Text style={styles.text}>Cung cấp bởi {nhaCungCap}</Text>
          <Text style={styles.giaMoi}>{giaMoi} đ</Text>
          <Text style={styles.giaCu}>{giaCu} đ</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.soLuong}>
              <Text style={styles.button}>-</Text>
              <Text style={{ fontWeight: 'bold' }}>1</Text>
              <Text style={styles.button}>+</Text>
            </View>
            <Text style={{ color: 'blue', fontWeight: 'bold' }}>Mua sau</Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Mã giảm giá đã lưu</Text>
        <Text style={{ color: 'blue', fontWeight: 'bold' }}>Xem tại đây</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <TextInput style={styles.maGiamGia} />
        <Button title="Áp dụng" />
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    marginTop: 10,
    backgroundColor: 'white'
  },
  text: {
    fontWeight: 'bold'
  },
  thongTinSach: {
    // marginLeft: 10
    flex: 2,
    gap: 10
  },
  soLuong: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    fontWeight: 'bold'
  },
  button: {
    width: 20,
    height: 20,
    borderWidth: 1,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  giaCu: {
    textDecorationLine: 'line-through',
    color: 'gray',
    fontWeight: 'bold'
  },
  giaMoi: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold'
  },
  maGiamGia: {
    borderWidth: 1,
    padding: 3,
    width: 200
  }
})
export default ThongTinSach;