import React, { Component } from 'react';
import './App.css';
import {
  Button,
  Dropdown,
  Input,
  Menu,
  Table,
} from 'semantic-ui-react';

import SenderTableContainer from '../../containers/SenderTableContainer/SenderTableContainer';
import FolderFilter from '../../containers/FolderFilter/FolderFilter';
import FuzzySearch from '../../containers/FuzzySearch/FuzzySearch';
import MoveToContainer from '../../containers/MoveToContainer/MoveToContainer';

class App extends Component {
  render() {



    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-header__title">Organize your emails</h2>
          <div className="App-header-actions">
            <div className="app-header-actions-left">
              <FuzzySearch />
            </div>
            <div className="app-header-actions-right">
              <MoveToContainer />
              <FolderFilter />
            </div>
          </div>
          <SenderTableContainer />
        </div>
      </div>
    );
  }
}

export default App;
