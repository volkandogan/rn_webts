import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabs from './Tab';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default RootNavigator;