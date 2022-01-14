import React, {useState, Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

class CounterClass extends Component {
  state = {
    nomor: 0,
  };

  render() {
    return (
      <View style={{marginTop: 10}}>
        <Text>{this.state.nomor}</Text>
        <Button
          title="+"
          onPress={() => this.setState({nomor: this.state.nomor + 1})}
        />
      </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Materi Component Dinamis dengan State</Text>
      <Counter />
      <CounterClass />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {paddingTop: 20},
  text: {textAlign: 'center', marginBottom: 20},
});
