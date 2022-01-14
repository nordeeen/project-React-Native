import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Tipe data
// Primitive
const name = 'Budi'; // string
let age = 21; // number
const apakahLelaki = true; // boolean

// complex
// object
const hewanPeliharaan = {
  nama: 'Miauw',
  umur: 5,
  jenis: 'Kucing',
  warna: 'Kuning',
  apakahItuUnggas: false,
  indukan: {
    jantan: 'Jimbrong',
    Betina: 'Betti',
  },
};

// Function
const sapaOrang = () => {
  return alert(`halo saya ${name}, dan umur saya ${age} tahun`);
};

//sapaOrang();

// object -- array
const namaOrang = [
  'Budi',
  'Joni',
  'Gabriel',
  'Thomas',
  'Mizka',
  'Danu',
  'Taufik',
  'Prawono',
  'Adji',
  'Seulgi',
  'Jung Hwo',
];

// cek type data
typeof namaOrang;

// conditional statement
const sapaHewan = objectHewan => {
  //   let result = '';
  //   if (objectHewan.nama === 'Miauw') {
  //     result = 'ini hewan kucing';
  //   } else {
  //     result = 'ini hewan siapa dong?';
  //   }
  //   return result;

  // ternary operator
  return objectHewan.nama === 'Miauw'
    ? 'ini hewan kucing'
    : 'ini hewan siapa dong?';
};

const BasicJavascript = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Materi Basic Javascript di React Native</Text>
      <Text>Nama : {name}</Text>
      <Text>Usia : {age}</Text>
      <Text>hasil : {sapaHewan(hewanPeliharaan)}</Text>
      <Text>{namaOrang[0]}</Text>
      <Text>{namaOrang[1]}</Text>
      <Text>{namaOrang[2]}</Text>
      <Text>{namaOrang[3]}</Text>
      <Text>{namaOrang[4]}</Text>
      <Text>=== Mapping ===</Text>
      {namaOrang.map((orang, index) => (
        <Text key={index}>{orang}</Text>
      ))}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    textAlign: 'center',
  },
});
