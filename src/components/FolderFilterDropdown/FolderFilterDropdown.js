import React, { Component } from 'react';
import {
  Dropdown,
} from 'semantic-ui-react';
import {
  SHOW_ALL,
  SPORTS,
  SHOPPING,
  INBOX,
} from '../../redux/modules/folderFilter/folderFilter';

class FolderFilterDropdown extends Component {
  render() {

    return (
      <Dropdown
        value={this.props.filter}
        labeled
        onChange={(e, data) => this.props.setFilter(data.value)} 
        onAddItem={(e, data) => this.props.addFolder(data.value)}
        selection
        allowAdditions
        search
        options={this.props.options}
      />
    )
  }
}

export default FolderFilterDropdown;
