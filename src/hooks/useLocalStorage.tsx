import { useEffect, useState } from "react";

const useLocalStorage = (
  key: string
): [string[] | [], React.Dispatch<React.SetStateAction<[] | string[]>>] => {
  const [list, setList] = useState<string[] | []>([]);

  useEffect(() => {
    if (window.localStorage.getItem(key)) {
      setList(JSON.parse(window.localStorage.getItem(key)!));
    }
  }, []);

  return [list, setList];
};

export default useLocalStorage;
