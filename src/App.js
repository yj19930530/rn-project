import { Provider } from "react-redux"
import App from "./nav/root"
import React, {Component} from "react"
import store from "./store/store"

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}