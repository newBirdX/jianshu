import React, { PureComponent } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './common/header/index.jsx';
import { Iconf } from './statics/iconfont/iconfont.js';
import { GlobalStyle} from './style.js';
import store from './store/index'
import Home from './page/home/index'
import Detail from './page/detail/index'
export default class App extends PureComponent  {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            <Header />
            <Router>
              <div>
              <Route path="/" component={Home}  exact />
              <Route path="/detail"  component={Detail}/>
              </div>
            </Router>
          </div>
        </Provider>
        <GlobalStyle/>
        <Iconf/>
      </div>
    )
  }
}

