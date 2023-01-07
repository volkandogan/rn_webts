import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BriefCard } from './src/components';

const App = () => {
  return (
    <BriefCard title="Title" subtitle='Subtitle' currency={100} />
  );
};

const styles = StyleSheet.create({
});

export default App;