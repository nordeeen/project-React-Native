import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import macbook from '../../assets/images/macbook.jpg';

const Cart = props => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={macbook} style={styles.iconImage} />
        <Text style={styles.title}>New Macbook Pro 2019</Text>
        <Text style={styles.titlePrice}>Rp. 25.000.000,-</Text>
        <Text style={styles.titleLoc}>Jakarta Barat</Text>
        <TouchableOpacity onPress={props.onPressBtn}>
          <View style={styles.btn}>
            <Text style={styles.textBtn}>Beli</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'red',
    marginTop: 25,
    marginLeft: 25,
  },
  iconImage: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    marginTop: 16,
    fontWeight: 'bold',
  },
  titlePrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F2994A',
    marginTop: 12,
  },
  titleLoc: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },
  btn: {
    backgroundColor: '#6FCF97',
    borderRadius: 25,
    paddingVertical: 6,
    marginTop: 10,
  },
  textBtn: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFF',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
