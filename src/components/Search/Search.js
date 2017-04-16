import React, { Component } from 'react';
import {
  Input,
} from 'semantic-ui-react';
import './Search.css';

class Search extends Component {
  // constructor(props) {
  //   this.
  // }
  componentDidMount() {
  }

  render() {
    return (
      <Input
        className='Search'
        icon="search"
        iconPosition='left'
        placeholder="Search by name or email"
        onChange={(e, data) => {
          this.props.updateQuery(data.value)
          const results = this.props.fuse.search(data.value)
          this.props.updateResults(results)
        }}
      />
    )
  }
}

export default Search;
