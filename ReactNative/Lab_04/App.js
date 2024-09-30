import { SafeAreaView, StyleSheet, View } from 'react-native';

// You can import supported modules from npm
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View><Header /></View>
      <View><Body /></View>
      <View><Footer /></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginTop: 36,
  },
});
