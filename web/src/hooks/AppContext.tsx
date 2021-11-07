import React, { createContext, useState } from "react";

interface AppContext {
  title: string;
  setTitle: (title: string) => void;
}
export const appContext = createContext<AppContext>({} as AppContext);
export const AppProvider = ({ children }: Element | any) => {
  const [title, setTitle] = useState("");
  return (<appContext.Provider
    value={{
      setTitle,
      title,
    }}
  >
    {children}
  </appContext.Provider>
  );
};
