import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import trolley from '../../assets/icons/trolley.png';

const Position = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartWrapper}>
        <Image source={trolley} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
  wrapper: {padding: 20, alignItems: 'center'},
  iconCart: {width: 50, height: 50},
  cartWrapper: {
    borderWidth: 2,
    borderColor: '#4398D1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    fontSize: 14,
    color: '#000',
    fontWeight: '700',
    marginTop: 15,
  },
  notif: {
    fontSize: 12,
    color: 'white',
    padding: 4,
    backgroundColor: '#6FCF97',
    width: 24,
    height: 24,
    borderRadius: 25,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
