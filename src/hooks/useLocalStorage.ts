import { useCallback } from "react";

export const useLocalStorage = () => {
  const setValue = useCallback(({ key, value }: { key: string; value: string }) => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getValue = useCallback((key: string) => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { setValue, getValue };
};
