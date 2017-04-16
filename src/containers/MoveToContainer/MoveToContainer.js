import React, { Component } from 'react';
import { connect } from 'react-redux';

import MoveToDropdown from '../../components/MoveToDropdown/MoveToDropdown';
import * as sendersActions from '../../redux/modules/senders/senders';
import * as selectors from '../../redux/modules/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    options: selectors.getMoveToOptions(state),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    moveToFolder: folder => dispatch(sendersActions.moveActiveToFolder(folder))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveToDropdown);
