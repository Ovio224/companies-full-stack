import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext(undefined);

const GlobalStore = (props) => {
  if (props === undefined) {
    throw new Error(
      'Props Undefined. You probably mixed up between default/named import'
    );
  }
  // eslint-disable-next-line react/prop-types
  const { store, ...rest } = props;
  // eslint-disable-next-line react/prop-types
  const [state, dispatch] = useReducer(store.reducer, store.initialState);

  return <AppContext.Provider value={{ state, dispatch }} {...rest} />;
};

export const useStore = () => useContext(AppContext);

export default GlobalStore;
