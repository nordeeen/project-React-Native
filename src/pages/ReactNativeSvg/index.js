import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IlustrationMyApp from '../../assets/images/undraw_my_app_re_gxtj.svg';

const ReactNativeSvg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Materi Menggunakan File Svg di dalam React Native
      </Text>
      <IlustrationMyApp width={244} height={125} />
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
  },
});
