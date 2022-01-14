import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const Story = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image source={{uri: props.gambar}} style={styles.gambar} />
      <Text style={styles.textPic}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text style={styles.text}>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <Story judul="Sport" gambar="https://placeimg.com/640/480/people" />
          <Story judul="Animal" gambar="https://placeimg.com/640/480/animals" />
          <Story judul="Arch" gambar="https://placeimg.com/640/480/arch" />
          <Story judul="Nature" gambar="https://placeimg.com/640/480/nature" />
          <Story judul="Tech" gambar="https://placeimg.com/640/480/tech" />
          <Story
            judul="Gray"
            gambar="https://placeimg.com/640/480/tech/grayscale"
          />
          <Story
            judul="Sepia"
            gambar="https://placeimg.com/640/480/tech/sepia"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {textAlign: 'center', marginBottom: 10},
  gambar: {
    width: 70,
    height: 70,
    marginLeft: 15,
    borderRadius: 70 / 2,
  },
  textPic: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'left',
    marginBottom: 10,
    maxWidth: 50,
  },
});

export default PropsDinamis;
