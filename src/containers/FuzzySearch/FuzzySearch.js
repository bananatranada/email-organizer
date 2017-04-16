import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../../components/Search/Search';
import * as searchActions from '../../redux/modules/search/search';

// class FuzzySearch extends Component {
//   render() {
//     return (
//
//     )
//   }
// }

const mapStateToProps = (state, ownProps) => {
  return {
    query: state.search.query,
    fuse: state.search.fuse,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateQuery: query => dispatch(searchActions.updateQuery(query)),
    updateResults: results => dispatch(searchActions.updateResults(results)),
    updateFuse: () => dispatch(searchActions.updateFuse()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
