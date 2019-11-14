import React from 'react';
import { useScreens } from 'react-native-screens';
import StackNavigation from './src/navigation/StackNavigation';

export default function App() {
  useScreens();
  return (
    <StackNavigation />
  );
}
