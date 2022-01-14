import React, {Component} from 'react';
import {View, Text, Image, TextInput} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: 'orangered',
          width: 100,
          height: 100,
        }}
      />
      <Text
        style={{
          fontSize: 20,
          color: 'red',
          fontWeight: 'bold',
          textTransform: 'uppercase',
        }}>
        Hello World!
      </Text>
      <Text> Happy Coding </Text>
      <Text> Dont forget semicolon </Text>
      <Code />
      <Photo />
      <TextInput
        style={{
          borderWidth: 1,
          marginTop: 20,
        }}
      />
      <BoxGreen />
      <Picture />
    </View>
  );
};

const Code = () => {
  return <Text> Ready Seat Code </Text>;
};

const Photo = () => {
  return (
    <Image
      source={{
        uri: 'https://placeimg.com/640/480/people',
      }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 50,
      }}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text> Ini component dari Class </Text>;
  }
}

class Picture extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 25,
        }}>
        <Image
          source={{
            uri: 'https://placeimg.com/640/480/animals',
          }}
          style={{
            width: 100,
            height: 100,
          }}
        />
        <Text> this is Animal </Text>
      </View>
    );
  }
}

export default SampleComponent;
