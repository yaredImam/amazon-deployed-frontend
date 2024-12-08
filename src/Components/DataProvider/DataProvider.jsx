import { createContext, useReducer } from "react";

export const DataContext = createContext();
export const DataProvider = ({ children, reducer, initialState }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}> {/* use reducer receives reducer &initialState & returns dispatch & state */}
      {children}
    </DataContext.Provider>
  );
};
