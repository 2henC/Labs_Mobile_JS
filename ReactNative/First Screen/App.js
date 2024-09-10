import {Text, StyleSheet, Button, View} from 'react-native';

export default function App() {
   const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 'auto',
      width: '100%'
    },
    circle: {
      width: 100,          // Đường kính của vòng tròn
      height: 100,         // Đường kính của vòng tròn
      borderRadius: 50,    // Bán kính = 1/2 đường kính
      borderWidth: 10,      // Độ dày của đường viền
      backgroundColor: 'transparent', // Màu nền trong suốt
    },
    flexCenter: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      marginTop: 50,
      flexDirection: 'row',
      justifyContent: 'space-around',
     }
   })

  return (
  <View style={[{backgroundColor:'#00CCF9'}, styles.container]}>
    <View style={[{flex: 2}, styles.flexCenter]}>
        <View style={styles.circle}></View>
    </View>
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 28}}>
        GROW 
      </Text>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 28}}>
        YOUR BUSINESS
      </Text>
    </View>
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', padding: 10, fontWeight: 'bold'}}>
        We will help you to grow your business using online server
      </Text>
    </View>
    <View style={{flex:1}}>
      <View style={styles.button}>
        <Button color="#E3C000" title="LOGIN"/> 
        <Button color="#E3C000" title="SIGN UP"/> 
      </View>
    </View>
  </View>
  
  );
}

