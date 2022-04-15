import {View, ImageBackground, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

const MobileContainer = props => {
  const {children, style} = props;
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(1,32,96,255)',
    width: '100%',
    height: '100%',
  },
});

export default MobileContainer;
