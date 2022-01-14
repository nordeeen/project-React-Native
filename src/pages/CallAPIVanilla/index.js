import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';

const CallAPIVanilla = () => {
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

  useEffect(() => {
    // call API method GET
    // fetch('https://reqres.in/api/users/2')
    //   .then(response => response.json())
    //   .then(json => console.log(json));
    //     // call API method POST
    //     // data body
    //     const dataForAPI = {
    //       name: 'morpheus',
    //       job: 'leader',
    //     };
    //     console.log('data object :', dataForAPI);
    //     console.log('data stringfy :', JSON.stringify(dataForAPI));
    //     fetch('https://reqres.in/api/users', {
    //       method: 'POST',
    //       headers: {'Content-Type': 'application/json'},
    //       body: JSON.stringify(dataForAPI),
    //     })
    //       .then(response => response.json())
    //       .then(json => console.log('post response :', json));
  }, []);

  //========================//
  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };

    // console.log('data object :', dataForAPI);
    // console.log('data stringfy :', JSON.stringify(dataForAPI));
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(dataForAPI),
    })
      .then(response => response.json())
      .then(json => {
        console.log('post response :', json);
        setDataJob(json);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Materi Call API dengan Vanilla JS</Text>
      <Text>Response GET Data</Text>
      <Button title="GET DATA" onPress={getData} />
      <Image source={{uri: DataUser.avatar}} style={styles.picture} />
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

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {padding: 20},
  text: {textAlign: 'center', padding: 20},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  picture: {width: 100, height: 100, borderRadius: 100 / 2},
});
