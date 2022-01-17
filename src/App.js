import React, {useState, useEffect, Component} from 'react';
import {ScrollView, View} from 'react-native';
// import SampleComponent from './pages/SampleComponent';
// import StylingComponent from './pages/StylingComponent';
// import Position from './pages/Position';
// import FlexBox from './pages/FlexBox';
// import PropsDinamis from './pages/PropsDinamis';
// import StateDinamis from './pages/StateDinamis';
// import Communication from './pages/Communication';
// import BasicJavascript from './pages/BasicJavascript';
// import ReactNativeSvg from './pages/ReactNativeSvg';
// import CallAPIVanilla from './pages/CallAPIVanilla';
// import CallAPIAxios from './pages/CallAPIAxios';
// import LocalAPI from './pages/LocalAPI';
import MyCrud from './pages/MyCrud';

const App = () => {
  const [isShow, SetIsShow] = useState(true);

  // useEffect(() => {
  //   console.log('component will unmount');
  //   setTimeout(() => {
  //     SetIsShow(false);
  //   }, 8000);
  // }, []);

  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />*/}
        {/* <StylingComponent /> */}
        {/* <Position />*/}
        {/* <PropsDinamis />*/}
        {/* <StateDinamis />*/}
        {/* <Communication />*/}
        {/*isShow && <FlexBox />*/}
        {/*<BasicJavascript /> */}
        {/*<ReactNativeSvg /> */}
        {/* <CallAPIVanilla />*/}
        {/* <CallAPIAxios />*/}
        {/*<LocalAPI /> */}
        <MyCrud />
      </ScrollView>
    </View>
  );
};

export default App;
