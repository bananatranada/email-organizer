import { createSelector } from 'reselect';
import * as foldersSelectors from './folders/folders';
import * as folderFilterSelectors from './folderFilter/folderFilter';
import * as searchSelectors from './search/search';

export const getFolderOptions = createSelector(
  [ foldersSelectors.getFolders ],
  (folders) => {
    return folders.map(folder => ({ key: folder, text: folder, value: folder }))
  }
)

export const getMoveToOptions = createSelector(
  [ foldersSelectors.getFolders ],
  (folders) => {
    return folders.filter(folder => folder !== 'Show all').map(folder => ({value: folder, text: folder}))
  }
)
