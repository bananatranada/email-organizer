import { combineReducers } from 'redux'

import senders from './senders/senders';
import folderFilter from './folderFilter/folderFilter';
import folders from './folders/folders';
import search from './search/search';

const rootReducer = combineReducers({
  senders,
  folderFilter,
  folders,
  search,
})

export default rootReducer
