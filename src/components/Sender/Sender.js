import React, { Component } from 'react';
import './Sender.css';
import {
  Table,
} from 'semantic-ui-react';
import classnames from 'classnames';

class Sender extends Component {
  render() {
    if (this.props.visible) {
      const SenderClass = classnames({
        Sender: true,
      })
      return (
        <Table.Row active={this.props.sender.selected}
          className={SenderClass}
          onClick={e => {
            e.preventDefault();
            if (this.props.sender.selected) {
              this.props.deselect(this.props.sender.email)
            } else {
              this.props.select(this.props.sender.email)
            }
          }}>
          <Table.Cell>{this.props.sender.sender}</Table.Cell>
          <Table.Cell>{this.props.sender.domain}</Table.Cell>
          <Table.Cell>{this.props.sender.email}</Table.Cell>
          <Table.Cell>{this.props.sender.folder}</Table.Cell>
        </Table.Row>
      )
    }
    return null;
  }
}

export default Sender;
