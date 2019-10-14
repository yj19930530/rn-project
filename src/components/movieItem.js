import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { scaleSize, setSpText } from "../utils/scale"
import Stars from "./stars"

export default class extends Component {

  static defaultProps = {
    marginRight: 16,
  }

  render() {
    const { title, movieImg, average, stars, id } = this.props.movie
    console.log(movieImg)
    return (
      <TouchableOpacity onPress={() => {
        this.props.navigation.navigate("MovieDetail", { movie: this.props.movie })
      }}>
        <View
          style={{
            marginRight: scaleSize(this.props.marginRight),
          }}
        >
          <Image
            style={{
              width: scaleSize(200),
              height: scaleSize(270)
            }}
            source={{ uri: movieImg }}
          />
          <Text
            style={{
              marginVertical: scaleSize(24),
              fontSize: setSpText(28),
              color: "#00084E",
            }}
          >{title.length > 5 ? title.substring(0, 5) + "..." : title}</Text>
          <Stars stars={stars} average={average} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

});
