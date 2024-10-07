import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1;


const State = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [diceRoll, setDiceRoll] = useState([]);
  const [randomValue, setRandomValue] = useState(() => randomDiceRoll());

  return (
    <View style={{ padding: 20 }}>
      <Text>useState</Text>

      <View style={{ margin: 20 }}>
        <Text>Count: {count}</Text>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>

      <View style={{ margin: 20 }}>
        <Button
          title="Roll dice!"
          onPress={() => setDiceRoll([...diceRoll, randomDiceRoll()])}
        />
        {diceRoll.map((diceRoll, index) => (
          <Text key={index}>{diceRoll}</Text>
        ))}
      </View>

      <View style={{ margin: 20 }}>
        <Text>Initial Random Value: {randomValue}</Text>
        <Button title="Increase" onPress={() => setRandomValue(randomValue + 1)} />
        <Button title="Reset" onPress={() => setRandomValue(() => randomDiceRoll())} />
      </View>
    </View >
  );
};
export default State;
