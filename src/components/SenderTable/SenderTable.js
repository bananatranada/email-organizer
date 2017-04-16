import React, { Component } from 'react';
import './SenderTable.css'

import SenderList from '../../components/SenderList/SenderList';
import {
  Table,
} from 'semantic-ui-react';

class SenderTable extends Component {
  componentDidMount() {
    this.props.updateFuse()
  }

  componentDidUpdate() {
    this.props.updateFuse()
  }

  render() {
    return (
      <Table basic='very' selectable className='SenderTable'>
        <Table.Header className='SenderTable-Header'>
          <Table.Row>
            <Table.HeaderCell>Sender</Table.HeaderCell>
            <Table.HeaderCell>Domain</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Folder</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <SenderList senders={this.props.senders} />
      </Table>
    )
  }
}

export default SenderTable;
