import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontFamilies} from './src/constants/fontFamilies';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App test dat</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontFamily: fontFamilies.MontserratItalic,
  },
});
