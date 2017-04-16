import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Sender from '../../components/Sender/Sender';
import * as sendersActions from '../../redux/modules/senders/senders';

const mapStateToProps = (state, ownProps) => {
  return {
    visible: (
      (state.folderFilter === 'Show all' ||
      state.folderFilter === ownProps.sender.folder) &&
      (state.search.query === '' || state.search.results.includes(ownProps.sender.email))
    ),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    select: email => dispatch(sendersActions.selectSender(email)),
    deselect: email => dispatch(sendersActions.deselectSender(email)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sender);
