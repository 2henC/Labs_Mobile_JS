import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Home from './Page/Home';
import Store from './Page/Store';
import BikeDetail from './Page/BikeDetail';
import BikeCard from './Page/BikeCard';
import EditBike from './Page/EditBike';
import AddBike from './Page/AddBike'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Trang chủ' }}
      />
      <Stack.Screen
        name="Store"
        component={Store}
        options={{ title: 'Danh sách xe đạp' }}
      />
      <Stack.Screen
        name="BikeDetail"
        component={BikeDetail}
        options={{ title: 'Chi tiết sản phẩm' }}
      />
      <Stack.Screen name="BikeCard" component={BikeCard} />
      <Stack.Screen name="EditBike" component={EditBike} />
      <Stack.Screen name="AddBike" component={AddBike} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
