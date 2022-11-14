import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HomeNaviParams, NaviParamsProps} from '../navigations/Stack';

interface ItemProps extends NaviParamsProps<'Item'> {
  navigation: StackNavigationProp<HomeNaviParams, 'Item'>;
  route: RouteProp<HomeNaviParams, 'Item'>;
}

const Item = ({route}: ItemProps) => {
  console.log('💡💡💡', route);
  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>Item</Text>
      <Text style={styles.styledText}>ID : {route?.params?.id}</Text>
      <Text style={styles.styledText}>Name: {route?.params?.name}</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styledText: {
    fontSize: 30,
    marginBottom: 10,
  },
});
