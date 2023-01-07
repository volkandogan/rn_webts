import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RootNavigator from './src/navigation';
const App = () => {
    const [count, setCount] = useState(0);
    return (
        <RootNavigator />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C3E8BD',
        paddingTop: 40,
        paddingHorizontal: 10,
    },
});

export default App;