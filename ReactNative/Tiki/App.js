import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ThongTinSach from './components/ThongTinSach';
import PhieuGiamGia from './components/PhieuGiamGia';
import ThanhTien from './components/ThanhTien';
import ThanhToan from './components/ThanhToan';

export default function App() {
  const tenSach = "Nguyên hàm tích phân và ứng dụng";
  const nhaCungCap = "Tiki Trading";
  const giaCu = 141800;
  const giaMoi = 150000;

  return (
    <SafeAreaView style={styles.container}>
      <ThongTinSach tenSach={tenSach} nhaCungCap={nhaCungCap} giaCu={giaCu} giaMoi={giaMoi} />
      <PhieuGiamGia />
      <ThanhTien />
      <ThanhToan />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  },


});
