import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import AuthHomeScreen from './src/screens/AuthHomeScreen';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';

const App = () => {
  const [name, setName] = useState('');

  const handleChangeInput = (e: string) => {
    setName(e);
  };

  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    width: 50,
    height: 50,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: 'beige',
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 30,
    // paddingVertical: 30,
  },
});

export default App;
