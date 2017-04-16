import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'

import DevTools from '../DevTools/DevTools'

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          {this.props.children}
          <DevTools />
        </div>
      </Provider>
    )
  }
}

export default Root
