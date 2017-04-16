import React, { Component } from 'react';
import { connect } from 'react-redux';

//SenderList/Sender

import * as searchActions from '../../redux/modules/search/search';
import SenderTable from '../../components/SenderTable/SenderTable';


const mapStateToProps = (state) => {
  return {
    senders: state.senders,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateFuse: () => dispatch(searchActions.updateFuse())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SenderTable);
