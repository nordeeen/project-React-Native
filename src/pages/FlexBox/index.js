import React, {useState, useEffect} from 'react';
import {Text, View, Image} from 'react-native';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('constructor');
//     this.state = {
//       subsciber: 200,
//     };
//   }

//   componentDidMount() {
//     console.log('component did mount');
//     setTimeout(() => {
//       this.setState({
//         subsciber: 700,
//       });
//     }, 3000);
//   }

//   componentDidUpdate() {
//     console.log('component did update');
//   }

//   componentWillUnmount() {
//     console.log('component will unmount');
//   }

//   render() {
//     console.log('render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: 'yellow',
//             alignItems: 'flex-start',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>
//         <View
//           style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
//           <Image
//             source={{
//               uri: 'https://yt3.ggpht.com/ytc/AKedOLRexzNqKp2lRPNUmvq0_xOUu8oxf-z5LjSxi2lOPlc=s88-c-k-c0x00ffffff-no-rj',
//             }}
//             style={{
//               width: 100,
//               height: 100,
//               borderRadius: 50,
//               marginTop: 20,
//               borderWidth: 5,
//               borderColor: 'blue',
//             }}
//           />
//           <View style={{marginLeft: 20}}>
//             <Text style={{fontWeight: 'bold', fontSize: 20}}>
//               Prawito Hudoro
//             </Text>
//             <Text>{this.state.subsciber} ribu subscriber</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subscriber, setSubscriber] = useState(200);
  const [icon, setIcon] = useState(true);

  // useEffect(() => {
  //   console.log('component did mount');
  //   setTimeout(() => {
  //     setSubscriber(900);
  //   }, 6000);
  //   return () => {
  //     console.log('component did update');
  //   };
  // }, [subscriber]);

  // useEffect(() => {
  //   console.log('component did update');
  //   setTimeout(() => {
  //     setSubscriber(800);
  //   }, 6000);
  // }, [subscriber]);

  // Ketika name Prawito Hudoro menghilang / will unmount
  // useEffect(() => {
  //   console.log('did update');
  //   setTimeout(() => {
  //     setIcon(false);
  //   }, 3000);
  // }, []);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'yellow',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
        <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
        <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
        <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
        <Image
          source={{
            uri: 'https://yt3.ggpht.com/ytc/AKedOLRexzNqKp2lRPNUmvq0_xOUu8oxf-z5LjSxi2lOPlc=s88-c-k-c0x00ffffff-no-rj',
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginTop: 20,
            borderWidth: 5,
            borderColor: 'blue',
          }}
        />
        <View style={{marginLeft: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            {icon && 'Prawito Hudoro'}
          </Text>
          <Text>{subscriber} ribu subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
