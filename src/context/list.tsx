/**
 * Actions types
 */
export const SET_LIST = 'SET_LIST';
export const DELETE_LIST = 'DELETE_LIST';

/**
 * Initial State
 */

export const listInitialState = {
  content: {
    id: '',
    title: '',
    memo: [],
    autoClose: true,
  },
};

/**
 * Message Reducer
 */
export const listReducer = (state = listInitialState, action: any) => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        content: {
          id: '',
          title: action.payload.title,
          autoClose: action.payload.autoClose,
        },
      };
    case DELETE_LIST: {
      return {
        ...state,
        ...listInitialState,
      };
    }

    default:
      return state;
  }
};
