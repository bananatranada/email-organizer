import React, { Component } from 'react';
import './SenderList.css';
import {
  Table,
} from 'semantic-ui-react';

import VisibleSender from '../../containers/VisibleSender/VisibleSender';

class SenderList extends Component {
  render() {
    return (
      <Table.Body className='SenderList'>
        {this.props.senders.map(sender =>
          <VisibleSender
            key={sender.email}
            sender={sender}
          />
        )}
      </Table.Body>
    )
  }
}

export default SenderList;
