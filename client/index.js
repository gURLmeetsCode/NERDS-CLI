import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class Welcome extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return <h1>Hello, World</h1>;
  }
}

ReactDOM.render(
  <Welcome />,
  document.getElementById('root')
);
