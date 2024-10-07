import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import State from './pages/State';
import Callback from './pages/Callback';
import Memo from './pages/Memo';
import Ref from './pages/Ref';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import Effect from './pages/Effect';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="useState" component={State} />
        <Stack.Screen name="useEffect" component={Effect} />
        <Stack.Screen name="useMemo" component={Memo} />
        <Stack.Screen name="useCallback" component={Callback} />
        <Stack.Screen name="useRef" component={Ref} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
