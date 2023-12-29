import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import React from 'react';

export default function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
