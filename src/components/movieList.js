import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { scaleSize, setSpText } from "../utils/scale"
import MovieItem from "./movieItem"

export default class extends Component {
  render() {

    const {title, rows, type} = this.props

    return (
      <View style={{
        paddingHorizontal: scaleSize(34),
        paddingVertical: scaleSize(34),
        backgroundColor: "#FFFFFF",
        marginBottom: scaleSize(30),
      }}>

        <View style={{
          flexDirection: 'row',
          justifyContent: "space-between",
          marginBottom: scaleSize(34),
        }}>
          <Text
            style={styles.base}
          >{title}</Text>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate("MovieGrid", {
              title, type
            })
          }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text style={styles.base}>更多</Text>
              <Image
                style={{
                  width: scaleSize(10),
                  height: scaleSize(20),
                  marginLeft: scaleSize(10),
                }}
                source={require("../images/icon/arrow-right.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          {
            rows.map(item => {
              return <MovieItem navigation={this.props.navigation}  movie={item} key={item.id} />
            })
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    color: "#00084E",
    fontSize: setSpText(28),
  }
});
