import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'

import routes from '../../routes'

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default Root
