import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { scaleSize, setSpText } from "../utils/scale"

export default class App extends Component {

  _onPressButton = () => {
    this.props.navigation.navigate("MovieList")
  }

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <Image
          style={styles.avatarImg}
          source={require("../images/avatar/2.png")}
        />
        <Text style={[styles.base, {
          fontWeight: '700',
          fontSize: setSpText(40),
          marginBottom: scaleSize(204),
        }]}>佛也要生活</Text>
        <TouchableOpacity onPress={this._onPressButton}>
          <View
            style={[{
              borderWidth: scaleSize(2),
              borderColor: "#42BD56",
              width: scaleSize(204),
              height: scaleSize(88),
              borderRadius: scaleSize(10),
              justifyContent: "center",
              alignItems: 'center'
            }]}
          >
            <Text
              style={[styles.base, {
                fontSize: setSpText(28),
              }]}
            >进入豆瓣电影</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    color: "#42BD56",
    fontFamily: "MicroSoft Yahei"
  },
  avatarImg: {
    width: scaleSize(154),
    height: scaleSize(154),
    marginTop: scaleSize(208),
    marginBottom: scaleSize(108),
  },
});
