import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Item = ({name, bidang, email, onPicture, onRemove}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPicture}>
        <Image
          source={{uri: 'https://placeimg.com/640/480/people'}}
          style={styles.picture}
        />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>Name : {name}</Text>
        <Text style={styles.descEmail}>Email : {email}</Text>
        <Text style={styles.descBidang}>Profesi : {bidang}</Text>
      </View>
      <TouchableOpacity onPress={onRemove}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const MyCrud = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [selectUser, setSelectUsers] = useState({});
  const [button, setButton] = useState('Save');

  useEffect(() => {
    getData();
  }, []);

  // DATA POST
  const submitData = () => {
    const data = {
      name: name,
      email: email,
      bidang: bidang,
    };

    {
      button === 'Save' &&
        axios
          .post('http://192.168.43.59:3004/users', data)
          .then(res => {
            console.log('res post data :', res);
            setName('');
            setEmail('');
            setBidang('');
            getData();
          })
          .catch(err => {
            console.log('error message :', err);
          });
    }

    {
      button === 'Update' &&
        axios
          .put(`http://192.168.43.59:3004/users/${selectUser.id}`, data)
          .then(res => {
            console.log('res put data :', res);
            setName('');
            setEmail('');
            setBidang('');
            setButton('Simpan');
            getData();
          })
          .catch(err => {
            console.log('error message :', err);
          });
    }
  };

  // DATA GET
  const getData = () => {
    axios
      .get('http://192.168.43.59:3004/users?_sort=id&_order=desc')
      .then(res => {
        console.log('res get data :', res);
        setUsers(res.data);
      })
      .catch(err => {
        console.log('error message :', err);
      });
  };

  // DATA PUT
  const putData = items => {
    console.log('res data items :', items);
    setSelectUsers(items);
    setName(items.name);
    setEmail(items.email);
    setBidang(items.bidang);
    setButton('Update');
  };

  // DATA DELETE
  const deleteData = itemUser => {
    axios
      .delete(`http://192.168.43.59:3004/users/${itemUser.id}`)
      .then(res => {
        console.log('res delete :', res);
      })
      .catch(err => {
        console.log('error message :', err);
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>My Crud</Text>
        <Text style={styles.subjudul}>Masukan Member Kamu</Text>
        <TextInput
          placeholder="Nama Lengkap"
          style={styles.input}
          value={name}
          onChangeText={value => setName(value)}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          placeholder="Bidang"
          style={styles.input}
          value={bidang}
          onChangeText={value => setBidang(value)}
        />
        <Button title={button} onPress={submitData} />
        <View style={styles.line}></View>
        {users.map(user => {
          return (
            <Item
              key={user.id}
              name={user.name}
              email={user.email}
              bidang={user.bidang}
              onPicture={() => putData(user)}
              onRemove={() => deleteData(user)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default MyCrud;

// STYLE CSS
const styles = StyleSheet.create({
  container: {padding: 20},
  text: {textAlign: 'center', padding: 20, textTransform: 'uppercase'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  picture: {width: 100, height: 100, borderRadius: 100 / 2},
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  subjudul: {marginBottom: 15, textAlign: 'center'},
  itemContainer: {flexDirection: 'row', marginBottom: 20, flex: 1},
  desc: {marginLeft: 18, flex: 1},
  descName: {fontSize: 18, fontWeight: 'bold'},
  descEmail: {fontSize: 14},
  descBidang: {fontSize: 12, marginTop: 5},
  delete: {fontSize: 20, fontWeight: 'bold', color: 'red'},
});
