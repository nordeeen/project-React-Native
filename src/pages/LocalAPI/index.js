import React, {useState, useEffect} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Axios from 'axios';

const Item = ({name, email, bidang, onPress, onDelete}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri: 'https://placeimg.com/640/480/people',
          }}
          style={styles.picture}
        />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

//==========================================//

const LocalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  // POST
  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };

    // LOGIC BUTTON SIMPAN & UPDATE
    if (button === 'Simpan') {
      Axios.post('http://192.168.43.59:3004/users', data)
        .then(res => {
          console.log('result :', res);
          setName('');
          setEmail('');
          setBidang('');
          getData(); // agar postingan terbaru lgsg muncul.
        })
        .catch(err => {
          console.log('error message :', err);
        });
    } else if (button === 'Update') {
      Axios.put(`http://192.168.43.59:3004/users/${selectedUser.id}`, data)
        .then(res => {
          console.log('res data update :', res);
          setName('');
          setEmail('');
          setBidang('');
          getData();
          setButton('Simpan');
        })
        .catch(err => {
          console.log('error message :', err);
        });
    }
  };

  //GET
  const getData = () => {
    Axios.get('http://192.168.43.59:3004/users')
      .then(res => {
        console.log('res get data :', res);
        setUsers(res.data);
      })
      .catch(err => {
        console.log('error message :', err);
      });
  };

  //PUT
  const selectedItem = item => {
    console.log('selected data item :', item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('Update');
  };

  //DELETE
  const deleteItem = item => {
    console.log('data del :', item);
    Axios.delete(`http://192.168.43.59:3004/users/${item.id}`)
      .then(res => {
        console.log('res del :', res);
        getData();
      })
      .catch(err => {
        console.log('error message :', err);
      });
  };

  //json-server --host 192.168.1.102 db.json --port 3004

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Local API (JSON SERVER)</Text>
        <Text style={styles.subjudul}>
          Masukan Anggota Creative Squad Programming
        </Text>
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

        <Button title="Simpan" onPress={submit} />
        <View style={styles.line}></View>
        {users.map(user => {
          return (
            <Item
              key={user.id}
              name={user.name}
              email={user.email}
              bidang={user.bidang}
              onPress={() => selectedItem(user)}
              onDelete={() =>
                Alert.alert(
                  'Peringatan',
                  'Anda yakin ingin menghapus user ini?',
                  [
                    {
                      text: 'Tidak',
                      onPress: () => console.log('Button Tidak'),
                    },
                    {
                      text: 'Ya',
                      onPress: () => deleteItem(user),
                    },
                  ],
                )
              }
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default LocalAPI;

// STYLEING
const styles = StyleSheet.create({
  container: {padding: 20},
  text: {textAlign: 'center', padding: 20},
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
  descName: {fontSize: 20, fontWeight: 'bold'},
  descEmail: {fontSize: 16},
  descBidang: {fontSize: 12, marginTop: 8},
  delete: {fontSize: 20, fontWeight: 'bold', color: 'red'},
});
