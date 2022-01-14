import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import macbook from '../../assets/images/macbook.jpg';

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.teks}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: '#5f27cd',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: 'red',
          marginTop: 25,
          marginLeft: 25,
        }}>
        <Image
          source={macbook}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, marginTop: 16, fontWeight: 'bold'}}>
          New Macbook Pro 2019
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994A',
            marginTop: 12,
          }}>
          Rp. 25.000.000,-
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            borderRadius: 25,
            paddingVertical: 6,
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: '#FFFF',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teks: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 40,
    color: '#10ac18',
  },
});

export default StylingComponent;
