import { View, Text, Button } from "react-native"

const Home = ({ navigation }) => {
  return (
    <View>
      <Button title="useState" onPress={() => navigation.navigate('useState')} />
      <Button title="useMemo" onPress={() => navigation.navigate('useMemo')} />
      <Button title="useEffect" onPress={() => navigation.navigate('useEffect')} />
      <Button title="useRef" onPress={() => navigation.navigate('useRef')} />
      <Button title="useCallBack" onPress={() => navigation.navigate('useCallBack')} />
    </View>
  )
}
export default Home