import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import axios from 'axios';

const CallAPIAxios = () => {
  const [DataUser, setDataUser] = useState({
    avatar: '',
    first_name: '',
    last_name: '',
    email: '',
  });

  const [DataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  const getData = () => {
    axios
      .get('https://reqres.in/api/users/2')
      .then(result => {
        console.log('result :', result);
        setDataUser(result.data.data);
      })
      .catch(error => console.log('error :', error));
  };

  //========================//

  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };

    axios
      .post('https://reqres.in/api/users', dataForAPI)
      .then(res => {
        console.log('res :', res);
        setDataJob(res.data);
      })
      .catch(err => console.log('err :', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Materi Call API dengan Axios</Text>
      <Text>Response GET Data</Text>
      <Button title="GET DATA" onPress={getData} />
      {DataUser.avatar.length > 0 && (
        <Image source={{uri: DataUser.avatar}} style={styles.picture} />
      )}
      <Text>
        {DataUser.first_name} {DataUser.last_name}
      </Text>
      <Text>{DataUser.email}</Text>
      <View style={styles.line} />
      <Text>Response POST Data</Text>
      <Button title="POST DATA" onPress={postData} />
      <Text>{DataJob.name}</Text>
      <Text>{DataJob.job}</Text>
    </View>
  );
};

export default CallAPIAxios;

const styles = StyleSheet.create({
  container: {padding: 20},
  text: {textAlign: 'center', padding: 20},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  picture: {width: 100, height: 100, borderRadius: 100 / 2},
});
