import { Alert, Button, Image, StyleSheet, Text, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import { useEffect, useState } from "react";

const Phone = ({ navigation, route }) => {
  const [imageSource, setImageSource] = useState(require("../assets/images/vs_blue.png"));

  useEffect(() => {
    const color = route.params?.color;
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
  }, [route.params?.color])

  const handlePay = () => {
    Alert.alert("Thông báo", "Thanh toán điện thoại này!")
  }

  return (
    <View style={styles.container}>
      {/* Anh */}
      <View>
        <Image
          source={imageSource}
          style={styles.phone_image}
        />
      </View>

      {/* Ten dien thoai */}
      <View>
        <Text style={styles.phone_name}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>

      {/* Danh gia */}
      <View style={styles.phone_rating}>
        <View style={styles.phone_number_star}>
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              source={require("../assets/images/star.png")}
              style={{ width: 20, height: 20 }}
            />
          ))}
        </View>
        <Text style={styles.phone_name}>(Xem 828 đánh giá)</Text>
      </View>

      {/* Gia tien */}
      <View style={styles.phone_price}>
        <Text style={styles.phone_old_price}>1.790.000 đ</Text>
        <Text style={styles.phone_new_price}>2.000.000 đ</Text>
      </View>

      {/* O dau re hon */}
      <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
        <Text style={{ fontSize: 15, color: 'red', fontWeight: 'bold' }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <AntDesign name="questioncircleo" size={18} color="black" />
      </View>

      {/* Button chon mau */}
      <View style={styles.phone_click_color}>
        <Text style={{ fontSize: 18, fontWeight: '400' }} onPress={() => navigation.navigate('DetailPhone')}>4 MÀU - CHỌN MÀU {<AntDesign name="right" size={18} color="black" style={{ alignItems: 'flex-end' }} />}</Text>
      </View>

      {/* Button chon mua */}
      <View style={{}}>
        <Button title="CHỌN MUA" color="red" onPress={() => handlePay()} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    gap: 12
  },
  phone_image: {
    width: 'auto',
    resizeMode: 'contain'
  },
  phone_name: {
    fontSize: 17
  },
  phone_price: {
    flexDirection: 'row',
    gap: 50
  },
  phone_old_price: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  phone_new_price: {
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'line-through',
    color: 'gray'
  },
  phone_number_star: {
    flexDirection: 'row',
    gap: 8
  },
  phone_rating: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  phone_click_color: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5

  }
})
export default Phone