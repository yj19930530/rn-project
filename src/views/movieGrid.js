import React, { Component } from 'react';
import { connect } from "react-redux"
import {
  Text,
  FlatList
} from 'react-native';
import { setSpText, scaleSize, deviceWidth } from "../utils/scale.js"
import MovieItem from "../components/movieItem"
import { async_getMovies } from "../store/actions"

class MovieGrid extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.title,
    }
  };

  state = {
    isRefreshing: false
  }

  render() {
    const key = this.props.navigation.getParam("type")
    const data = this.props[key].rows
    return (
      <FlatList
        onEndReachedThreshold={.1}
        onRefresh={() => {
          console.log("onRefresh")
        }} // 上拉刷新
        onEndReached={() => {
          console.log('endRefresh')
          this.setState({
            isRefreshing: true
          }, () => {
            this.props.dispatch(async_getMovies(key, () => {
              this.setState({
                isRefreshing: false
              })
            }))
          })
        }} //下拉加载更多
        keyExtractor={(item) => item.id}
        refreshing={this.state.isRefreshing}
        data={data}
        columnWrapperStyle={{
          paddingVertical: scaleSize(34),
          paddingLeft: scaleSize(34)
        }}
        numColumns={3}
        renderItem={({ item }) => <MovieItem marginRight={45} navigation={this.props.navigation} movie={item} />}
      />
    );
  }
}

export default connect(({ hotMovies, comingMovies }) => {
  return {
    hotMovies, comingMovies
  }
})(MovieGrid)