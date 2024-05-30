import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AuthHomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="로그인 화면으로 이동"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
};

export default AuthHomeScreen;

const styles = StyleSheet.create({});
