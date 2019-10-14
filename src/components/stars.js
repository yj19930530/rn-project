import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { scaleSize, setSpText } from "../utils/scale"

const star_0 = require("../images/icon/star_0.png")
const star_1 = require("../images/icon/star_1.png")
const star_5 = require("../images/icon/star_5.png")

export default class extends Component {

  render() {
    const { stars } = this.props;
    const arr = [], fullStar = stars[0], halfStar = stars[1];

    for (let i = 0; i < fullStar; i++) {
      arr.push(1)
    }

    if (halfStar === "5") {
      arr.push(5)
    }

    for (let i = arr.length; i < 5; i++) {
      arr.push(0)
    }

    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {
          arr.map((item, index) => {

            let source = star_0;
            if (item === 1) {
              source = star_1
            } else if (item === 5) {
              source = star_5
            }
            return (
              <Image
                key={index}
                style={{
                  width: scaleSize(16),
                  height: scaleSize(16),
                }}
                source={source}
              />
            )
          })
        }

        <Text style={{
          marginLeft: scaleSize(10),
          fontSize: scaleSize(22),
        }}>{this.props.average}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
