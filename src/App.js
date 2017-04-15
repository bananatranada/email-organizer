import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Email from './components/Email';
import {
  Button,
  Dropdown,
  Input,
  Menu,
  Table,
} from 'semantic-ui-react';

class App extends Component {
  render() {
    const options = [
  { key: 'edit', icon: 'edit', text: 'Shopping', value: 'edit' },
  { key: 'delete', icon: 'delete', text: 'Sports', value: 'delete' },
  { key: 'hide', icon: 'hide', text: 'Hide Post', value: 'hide' },
]

    const stateOptions = [
      {
        key: 'show_all',
        value: 'show_all',
        text: 'Show all',
      },
      {
        key: 'sports',
        value: 'sports',
        text: 'Sports',
      },
      {
        key: 'shopping',
        value: 'shopping',
        text: 'Shopping',
      },
      {
        key: 'inbox',
        value: 'inbox',
        text: 'Inbox',
      },
    ]
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2 className="App-header__title">Organize your emails</h2>
          <Input icon="search" placeholder="Search sender" />
          <Button.Group color='blue'>
            <Dropdown text='Move to' floating button className='icon'>
              <Dropdown.Menu>
                <Dropdown.Item text='Shopping' />
                <Dropdown.Item text='Inbox' />
                <Dropdown.Item text='Sports' />
              </Dropdown.Menu>
            </Dropdown>
          </Button.Group>
          <Dropdown placeholder='Show all' search selection options={stateOptions} />
          <Table basic='very'>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Sender</Table.HeaderCell>
                <Table.HeaderCell>Domain</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Folder</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>None</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Requires call</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell>None</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
