import { View, StyleSheet, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={{ gap: 20 }}>
        <View>
          <Text style={styles.text}>
            A premium online store for sported and their stylish choice
          </Text>
        </View>

        <View style={styles.viewImage}>
          <Image
            source={require('../assets/BikeShop/bifour_-removebg-preview.png')}
            resizeMode="center"
            style={styles.image}
          />
        </View>

        <View>
          <Text style={styles.nameShop}>POWER BIKE SHOP</Text>
        </View>
      </View>

      <View style={{ marginTop: 50, alignItems: 'center' }}>
        <Button
          mode="contained"
          icon="camera"
          color="red"
          style={{ borderRadius: 50, paddingVertical: 5, width: 250 }}
          onPress={() => navigation.navigate('Store')}>
          Get Started
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    // marginVertical: 100,
  },
  viewImage: {
    backgroundColor: 'pink',
    borderRadius: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  nameShop: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
