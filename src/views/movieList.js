import React, { Component } from 'react';
import { connect } from "react-redux"
import {
  ScrollView,
} from 'react-native';

import MovieList from "../components/movieList"
import Swiper from "../components/swiper"

import { async_getMovies } from "../store/actions"

class List extends Component {


  componentDidMount() {
    const arr = ["comingMovies", "hotMovies"]
    arr.forEach(key => {
      this.props.dispatch(async_getMovies(key))
    })
  }

  render() {
    return (
      <ScrollView
        style={{ backgroundColor: "#F2F2F2" }}
        showsVerticalScrollIndicator={false}
      >
        <Swiper />
        <MovieList type={"hotMovies"} navigation={this.props.navigation} {...this.props.hotMovies} />
        <MovieList type={"comingMovies"} navigation={this.props.navigation} {...this.props.comingMovies} />
      </ScrollView>
    );
  }
}

export default connect(({ hotMovies, comingMovies }) => {
  console.log(hotMovies)
  return {
    hotMovies, comingMovies
  }
})(List)