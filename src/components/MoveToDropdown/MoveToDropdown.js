import React, { Component } from 'react';
import {
  Button,
  Dropdown,
} from 'semantic-ui-react';
import './MoveToDropdown.css';

class MoveToDropdown extends Component {
  render() {
    return (
      <Button.Group color='blue' className='MoveToDropdown'>
        <Dropdown text='Move to' floating button className='icon' options={this.props.options} onChange={(e, data) => this.props.moveToFolder(data.value)}/>
      </Button.Group>
    )
  }
}

export default MoveToDropdown;
