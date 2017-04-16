import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as folderFilterActions from '../../redux/modules/folderFilter/folderFilter';
import * as foldersActions from '../../redux/modules/folders/folders';
import FolderFilterDropdown from '../../components/FolderFilterDropdown/FolderFilterDropdown';
import * as selectors from '../../redux/modules/selectors';

const mapStateToProps = state => {
  return {
    filter: state.folderFilter,
    options: selectors.getFolderOptions(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setFilter: filter => dispatch(folderFilterActions.setFolderFilter(filter)),
    addFolder: folder => dispatch(foldersActions.addFolder(folder)),
    removeFolder: folder => dispatch(foldersActions.removeFolder(folder)),
    editFolder: (oldFolder, newFolder) => dispatch(foldersActions.editFolder(oldFolder, newFolder)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FolderFilterDropdown);
