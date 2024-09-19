import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ThongTinSach from './components/ThongTinSach';
import PhieuGiamGia from './components/PhieuGiamGia';
import ThanhTien from './components/ThanhTien';
import ThanhToan from './components/ThanhToan';
import { useState } from 'react';

export default function App() {
  const tenSach = "Nguyên hàm tích phân và ứng dụng";
  const nhaCungCap = "Tiki Trading";
  const giaCu = 141800;
  const giaMoi = 130000;

  const [soLuong, setSoLuong] = useState(1);

  const handleIncrease = () => {
    setSoLuong(soLuong + 1)
  }

  const handleDecrease = () => {
    if (soLuong != 0)
      setSoLuong(soLuong - 1)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ThongTinSach
        tenSach={tenSach}
        nhaCungCap={nhaCungCap}
        giaCu={giaCu}
        giaMoi={giaMoi}
        soLuong={soLuong}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
      />
      <PhieuGiamGia />
      <ThanhTien soLuong={soLuong} gia={giaMoi} />
      <ThanhToan soLuong={soLuong} gia={giaMoi} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 20,

  },


});
