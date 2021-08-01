import React, { createContext, useContext, useReducer } from 'react';
import { messageReducer, messageInitialState } from './message';
import { memoReducer, memoInitialState } from './memo';

/**
 * React context for store
 */
const StoreContext = createContext<any>(null);

/**
 * Combine initial states
 */
const store = {
  message: messageInitialState,
  memo: memoInitialState,
};

/**
 * Combine reducers
 */
const reducers = (store: any, action: any) => ({
  message: messageReducer(store.message, action),
  memo: memoReducer(store.memo, action),
});

/**
 * Store context provider
 */
export const StoreProvider = ({ children }: { children: React.ReactNode }) => (
  <StoreContext.Provider value={useReducer(reducers, store)}>
    {children}
  </StoreContext.Provider>
);

/**
 * React hook for consuming store
 */
export const useStore = () => useContext(StoreContext);
