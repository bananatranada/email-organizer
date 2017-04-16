import _ from 'lodash';
import * as senderActions from '../senders/senders';
import * as folderFilterActions from '../folderFilter/folderFilter';

export const FOLDERS_ADD = 'FOLDERS_ADD';
export const FOLDERS_REMOVE = 'FOLDERS_REMOVE';
export const FOLDERS_EDIT = 'FOLDERS_EDIT';

const defaultFoldersState = [
  'Show all',
  'Uncategorized',
  'Business',
  'Home',
  'Finance',
  'Education',
  'Real Estate',
  'Travel',
  'Entertainment',
  'Social Networking',
  'News',
  'Jobs',
  'Groups',
  'Shopping',
  'Sports',
];

export default function folderFilter(state = defaultFoldersState, action = {}) {
  switch (action.type) {
    case FOLDERS_ADD:
      return [
        ...state,
        action.folder,
      ]
    case FOLDERS_REMOVE: {// in action creator: change all target senders to Uncategorized
      const i = _.findIndex(state, action.folder);
      return [
        ...state.slice(0, i),
        ...state.slice(i + 1),
      ]
    }
    case FOLDERS_EDIT: {// in action creator: change all target senders to the new category
      const i = _.findIndex(state, action.oldFolder);
      return [
        ...state.slice(0, i),
        action.newFolder,
        ...state.slice(i + 1),
      ]
    }
    default:
      return state
  }
}

export const addFolder = folder => {
  // TODO: If exists, return
  return (dispatch, getState) => {
    dispatch({
      type: FOLDERS_ADD,
      folder,
    })
    // dispatch(folderFilterActions.setFolderFilter('Show all'))
  }
}

export const removeFolder = folder => {
  if (folder === 'Show all' || folder === 'Uncategorized') {
    return
  }
  return (dispatch, getState) => {
    const senders = getState.senders;
    senders.forEach(sender => {
      if (sender.folder === folder) {
        dispatch(senderActions.setFolder(sender.email, 'Uncategorized'))
      }
    })
    dispatch({
      type: FOLDERS_REMOVE,
      folder,
    })
  }
}

export const editFolder = (oldFolder, newFolder) => {
  // TODO: If exists, return
  if (oldFolder === 'Show all' || oldFolder === 'Uncategorized') {
    return
  }
  return (dispatch, getState) => {
    const senders = getState.senders;
    senders.forEach(sender => {
      if (sender.folder === oldFolder) {
        dispatch(senderActions.setFolder(sender.email, newFolder))
      }
    })
    dispatch({
      type: FOLDERS_EDIT,
      oldFolder,
      newFolder,
    })
  }
}

export const getFolders = state => state.folders
