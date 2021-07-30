/**
 * Actions types
 */
export const SET_MEMO = 'SET_MEMO';
export const DELETE_MEMO = 'DELETE_MEMO';

/**
 * Initial State
 */
interface State {
  content: {
    type: 'todo' | 'ongoing' | 'done' | '';
    text: string | undefined;
    date: Date | '';
    autoClose: boolean;
  };
}

// type Action = { type: 'SET_MESSAGE' } | { type: 'CLEAR_MESSAGE' };

export const memoInitialState: State = {
  content: {
    type: '',
    text: '',
    date: '',
    autoClose: true,
  },
};

/**
 * Message Reducer
 */
export const memoReducer = (state = memoInitialState, action: any) => {
  switch (action.type) {
    case SET_MEMO:
      return {
        ...state,
        content: {
          type: action.payload.type,
          text: action.payload.text,
          date: action.payload.date,
          autoClose: action.payload.autoClose,
        },
      };
    case DELETE_MEMO: {
      return {
        ...state,
        ...memoInitialState,
      };
    }

    default:
      return state;
  }
};
