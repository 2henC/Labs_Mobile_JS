import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function BikeCard({ data }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('BikeDetail', { data })}>
      <Image
        source={{ uri: data.image }}
        style={styles.imageBike}
        resizeMode="center"
      />
      <IconButton
        icon="pencil-circle-outline"
        size={24}
        style={styles.iconButton}
        onPress={() => navigation.navigate('EditBike', { bikeId: data.id })}
      />
      <Text style={{ textAlign: 'center' }}>{data.name}</Text>
      <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
        $ {data.price}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    position: 'relative',
    margin: 5,
  },
  imageBike: {
    width: 100,
    height: 100,
  },
  iconButton: {
    position: 'absolute',
    top: -12,
    left: -12,
  },
});
