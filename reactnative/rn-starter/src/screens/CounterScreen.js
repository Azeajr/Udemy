import React, { useState } from 'react';
import { View, Text, Stylesheet, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return <View>
        <Button title="Increase"onPress={() => {
            setCounter(counter + 1);
        }} />
        <Button title="Decrease"onPress={() => {
            setCounter(counter - 1);
        }} />
        <Text>Current Count: {counter}</Text>
    </View>
};

const styles = Stylesheet.create({});

export default CounterScreen;