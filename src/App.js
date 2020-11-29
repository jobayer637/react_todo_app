import React, { Component } from 'react'
import Todo from './todo/index'

class App extends Component {
  render() {
    return <div className="container my-3">
      <div className="row">
        <div className="col-md-8">
          <Todo />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  }
}

export default App;
