import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import StackNavigation from './navigations/Stack';

const cacheImages = images => {
  return images.map(image => {
    if (typeof image == 'string') {
      return Image.prefetch(image);
    }
  });
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
