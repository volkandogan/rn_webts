import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BriefCard } from './src/components';
const App = () => {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <BriefCard />
        </View>
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