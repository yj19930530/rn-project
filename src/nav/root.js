import {
  createStackNavigator,
} from 'react-navigation';

import Hello from "../views/hello"
import MovieList from "../views/movieList"
import MovieDetail from "../views/movieDetail"
import MovieGrid from "../views/movieGrid"
import TabNav from "./tab"

const App = createStackNavigator({
  TabNav: {
    screen: TabNav,
    navigationOptions: {
      header: null
    }
  },
  MovieGrid: {
    screen: MovieGrid,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#42BD56"
      },
      headerTitleStyle: {
        color: "#FFFFFF"
      },
      headerTintColor: "#FFFFFF"
    },
  },
  Home: {
    screen: Hello,
    navigationOptions: {
      header: null
    }
  },
  MovieDetail: {
    screen: MovieDetail,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#42BD56"
      },
      headerTitleStyle: {
        color: "#FFFFFF"
      },
      headerTintColor: "#FFFFFF"
    },
  },
});

export default App;