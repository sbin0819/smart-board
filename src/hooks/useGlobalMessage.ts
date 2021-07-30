import { useStore } from '../context';
import { SET_MESSAGE } from '../context/message';

const MessageType = {
  SUCCESS: 'SUCCESS',
  INFO: 'INFO',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
};

// const allMessageTypes = Object.keys(MessageType);

/**
 * React hook for dispatching global messages
 */
export const useGlobalMessage = () => {
  const [, dispatch] = useStore();

  const dispatchAction = (text: any, messageType: any, autoClose: any) => {
    dispatch({
      type: SET_MESSAGE,
      payload: {
        type: messageType,
        text: text,
        autoClose,
      },
    });
  };

  const success = (text: string, autoClose: any) =>
    dispatchAction(text, MessageType.SUCCESS, autoClose);

  const info = (text: string, autoClose: any) =>
    dispatchAction(text, MessageType.INFO, autoClose);

  const warning = (text: string, autoClose: any) =>
    dispatchAction(text, MessageType.WARNING, autoClose);

  const error = (text: string, autoClose: any) =>
    dispatchAction(text, MessageType.ERROR, autoClose);

  return { success, info, warning, error };
};
