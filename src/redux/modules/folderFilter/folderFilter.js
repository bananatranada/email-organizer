export const FOLDER_FILTER_SET = 'FOLDER_FILTER_SET';

const defaultFolderFilterState = 'Show all';

export default function folderFilter(state = defaultFolderFilterState, action = {}) {
  switch (action.type) {
    case FOLDER_FILTER_SET:
      return action.filter
    default:
      return state
  }
}

export const setFolderFilter = filter => {
  return {
    type: FOLDER_FILTER_SET,
    filter,
  }
}

export const getFolderFilter = state => state.folderFilter
