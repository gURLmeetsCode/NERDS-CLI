import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import {Welcome as Root} from './components/index'
import './index.css';


render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
