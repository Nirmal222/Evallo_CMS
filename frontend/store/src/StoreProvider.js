import React from "react";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import { useDispatchers } from "./utils/dispatchers";

export const GlobalProvider = ({ children }) => {
  return (
      <Provider store={store}>{children}</Provider>
  );
};

export const useStore = () => {
    const state = useSelector((selector) => {
      return selector.Global;
    });
  
    const Moterfunctions = useDispatchers();
  
    return {
      state,
      ...Moterfunctions,
    };
  };
  