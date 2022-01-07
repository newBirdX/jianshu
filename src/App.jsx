import React, { Component } from 'react'
import Header from './common/header/index.jsx';
import { Iconf } from './statics/iconfont/iconfont.js';
import { GlobalStyle} from './style.js';
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <GlobalStyle/>
        <Iconf/>
      </div>
    )
  }
}

