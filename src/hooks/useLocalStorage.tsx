import { useState } from "react";

const useLocalStorage = <T,>(
  key: string
): [T | null, (newValue: T) => void] => {
  const [value, setValue] = useState<T | null>(() => {
    const storedValue = window.localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : null;
  });

  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
};

export default useLocalStorage;
