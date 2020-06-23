import React, { useLayoutEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

import { Container, Button, Logo, Text } from './styles';

export default function Signin() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerMode: 'none',
      headerShown: false,
    });
  }, [navigation]);
  const handleOnPressSignin = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Logo>IFLIX</Logo>
        <Button onPress={handleOnPressSignin}>
          <Text>Signin</Text>
        </Button>
      </Container>
    </SafeAreaView>
  );
}
