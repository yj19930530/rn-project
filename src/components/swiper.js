import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


import { scaleSize, deviceWidth } from "../utils/scale"

import Swiper from 'react-native-swiper';

export default class  extends Component {
  render() {
    return (
      <View
        style={{
          height: scaleSize(400)
        }}
      >
        <Swiper
          autoplay={true}
          autoplayTimeout={1.5}
          dotColor={"#FFFFFF"}
          activeDotColor={"red"}
        >
          <Image
            style={{
              width: deviceWidth,
              height: scaleSize(400),
            }}
            source={require("../images/9ea02e470af84cd1af74e469facbd96d20170205115136.png")}
          />
          <Image
            style={{
              width: deviceWidth,
              height: scaleSize(400),
            }}
            source={require("../images/889cf46b056d48d9be848d4aa3166cfa20170206090116.jpeg")}
          />
          <Image
            style={{
              width: deviceWidth,
              height: scaleSize(400),
            }}
            source={require("../images/39114a8f04634d2cbd9888f2869b5e8120170125085034.jpeg")}
          />
          <Image
            style={{
              width: deviceWidth,
              height: scaleSize(400),
            }}
            source={require("../images/e894f9b2c45b43f58006e7fbe944803020170205114757.png")}
          />
        </Swiper>
      </View>
    );
  }
}