import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import HomeIndex from './components/HomePage/home_index';
import BlogNew from './components/blogs/BlogNew';

//For Testing purposes
import axios from 'axios';
window.axios = axios;

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>
          <Route path='/blog/new' component={BlogNew}/>
          <Route path='/' component={HomeIndex}/>
        </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
