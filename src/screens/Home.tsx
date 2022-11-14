import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {HomeNaviParams, NaviParamsProps} from '../navigations/Stack';

interface HomeProps extends NaviParamsProps<'Home'> {
  navigation: StackNavigationProp<HomeNaviParams, 'Home'>;
}

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>Home</Text>
      <Button title="List" onPress={() => navigation.navigate('List')} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  styledText: {
    fontSize: 30,
    marginBottom: 10,
  },
});
