import React, { Component } from 'react'
import { Provider } from 'react-redux';
import Header from './common/header/index.jsx';
import { Iconf } from './statics/iconfont/iconfont.js';
import { GlobalStyle} from './style.js';
import store from './store/index'
export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        <Header/>
        </Provider>
        <GlobalStyle/>
        <Iconf/>
      </div>
    )
  }
}

