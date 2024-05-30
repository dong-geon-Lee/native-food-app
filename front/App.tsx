import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>이름</Text>
        <TextInput style={styles.input} />
      </View>
    </SafeAreaView>
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
