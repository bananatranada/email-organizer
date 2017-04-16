import Fuse from 'fuse.js';

export const SEARCH_QUERY_UPDATE = 'SEARCH_QUERY_UPDATE';
export const SEARCH_RESULTS_UPDATE = 'SEARCH_RESULTS_UPDATE';
export const SEARCH_FUSE_UPDATE = 'SEARCH_FUSE_UPDATE';

const defaultSearchState = {
  query: '',
  results: [],
  fuse: null,
};

export default function searchReducer(state = defaultSearchState, action = {}) {
  switch (action.type) {
    case SEARCH_QUERY_UPDATE:
      return {
        ...state,
        query: action.query,
      }
    case SEARCH_RESULTS_UPDATE:
      return {
        ...state,
        results: action.results,
      }
    case SEARCH_FUSE_UPDATE:
      return {
        ...state,
        fuse: action.fuse,
      }
    default:
      return state
  }
}

export const updateQueryAndResults = query => {
  return (dispatch, getState) => {
    updateQuery(query)
    // const senders =
  }
}

export const updateQuery = query => {
  return {
    type: SEARCH_QUERY_UPDATE,
    query,
  }
}

export const updateResults = results => {
  return {
    type: SEARCH_RESULTS_UPDATE,
    results,
  }
}

export const updateFuse = () => {
  return (dispatch, getState) => {
    const senders = getState().senders;
    const options = {
      keys: ['sender', 'email'],
      id: 'email',
    }
    dispatch({
      type: SEARCH_FUSE_UPDATE,
      fuse: new Fuse(senders, options)
    })
  }
}

export const getResults = state => state.search.results;
export const getQuery = state => state.search.query;
export const getFuse = state => state.search.fuse;
