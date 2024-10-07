import { Button, Text, View } from "react-native";
import { useState, useEffect } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const countEvery3 = Math.floor(count / 3);

  // useEffect(() => {
  //   alert(countEvery3);
  // });

  // useEffect(() => {
  //   alert(countEvery3);
  // }, []);

  useEffect(() => {
    alert(count);
  }, [count]);

  return (
    <View style={{ padding: 20 }}>
      <View>
        <Text>useEffect(callback)</Text>
        <Button
          title={`Increment ${count}`}
          onPress={() => {
            setCount(count + 1);
          }}
        />
      </View>

      <View>
        <Text>useEffect(callback, [])</Text>
        <Button
          title={`Increment ${count}`}
          onPress={() => {
            setCount(count + 1);
          }}
        />
      </View>

      <View>
        <Text>useEffect(callback, [deps])</Text>
        <Button
          title={`Increment ${count}`}
          onPress={() => {
            setCount(count + 1);
          }}
        />
      </View>
    </View>
  );
};
export default Effect;
