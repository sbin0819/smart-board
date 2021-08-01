/**
 * Actions types
 */
export const SET_MESSAGE = 'SET_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

/**
 * Initial State
 */
interface State {
  content: {
    type: string | undefined;
    text: string | undefined;
    autoClose: boolean;
  };
}

// type Action = { type: 'SET_MESSAGE' } | { type: 'CLEAR_MESSAGE' };

export const messageInitialState: State = {
  content: {
    type: '',
    text: '',
    autoClose: true,
  },
};

/**
 * Message Reducer
 */
export const messageReducer = (state = messageInitialState, action: any) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        content: {
          type: action.payload.type,
          text: action.payload.text,
          autoClose: action.payload.autoClose,
        },
      };
    case CLEAR_MESSAGE: {
      return {
        ...state,
        ...messageInitialState,
      };
    }

    default:
      return state;
  }
};
