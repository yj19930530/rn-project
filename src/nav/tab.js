import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import MovieList from "../views/movieList"
import Studios from "../views/studios"
import Theaters from "../views/theaters"
import Mine from "../views/mine"

import { Image } from "react-native"
import { setSpText, scaleSize, } from "../utils/scale.js"

const movieIcon = require("../images/icon/movie.png")
const studiosIcon = require("../images/icon/studios.png")
const mineIcon = require("../images/icon/mine.png")


export default createBottomTabNavigator({
  MovieList: {
    screen: MovieList,
    navigationOptions: {
      header: null,
      title: "主页"
    }
  },
  Studios: {
    screen: Studios,
    navigationOptions: {
      header: null,
      title: "门禁记录"
    }
  },
  Theaters: {
    screen: Theaters,
    navigationOptions: {
      header: null,
      title: "物业管理"
    }
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
      header: null,
      title: "个人中心"
    }
  },
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let source;
      switch (routeName) {
        case "MovieList":
          source = movieIcon;
          break;
        case "Studios":
          source = studiosIcon;
          break;
        case "Mine":
          source = mineIcon;
          break;
        default:
          source = mineIcon;
          break;
      }
      return <Image style={[{
        width: scaleSize(50),
        height: scaleSize(50)
      }, { tintColor }]} source={source} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#42BD56',
    inactiveTintColor: 'black',
  },
});