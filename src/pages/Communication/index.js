import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cart from '../../components/Cart';
import Product from '../../components/Product';

const Communication = () => {
  const [TotalProduct, setTotalProduct] = useState(0);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Materi Komunikasi Antar Komponen</Text>
      <Product quantity={TotalProduct} />
      <Cart onPressBtn={() => setTotalProduct(TotalProduct + 1)} />
    </View>
  );
};

export default Communication;

const styles = StyleSheet.create({
  wrapper: {padding: 10},
  text: {textAlign: 'center', marginBottom: 20},
});
