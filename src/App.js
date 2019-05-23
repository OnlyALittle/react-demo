import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store'
import RouterTree from './router'


import {GlobalStyle} from './style';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      		<div>
            <GlobalStyle></GlobalStyle>
            <RouterTree/>
      		</div>
      </Provider>
    );
  }
}

export default App;
