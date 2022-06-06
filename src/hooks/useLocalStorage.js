// import React from "react";

export const useLocalStorage = () => {
  const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = (key) => {
    const value = localStorage.getItem(key);
    if (!value) return "";
    return JSON.parse(value);
  };

  return [getItem, setItem];
};
