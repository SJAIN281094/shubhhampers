"use client";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();
const ContextProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
        setMessage("");
      }, 3500);
    }
  }, [error]);

  return (
    <Context.Provider
      value={{
        error,
        message,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
