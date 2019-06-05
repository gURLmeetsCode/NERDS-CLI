import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'
import store from './store'
import {getMeThunk} from './reducers/index'

import Login from './components/Login'
import UserPage from './components/UserPage'
import SignUpForm from './components/SignUp'
import NavBar from './components/NavBar'

import './index.css';


const Main = withRouter(class extends Component {
  componentDidMount () {
    store.dispatch(getMeThunk())
      .then(() => {
        this.props.history.push('/home')
      })
  }

  render () {
    return (
      <div>
        <NavBar />
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/home' component={UserPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUpForm}/>
          </Switch>
      </div>
    )
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('root')
)
