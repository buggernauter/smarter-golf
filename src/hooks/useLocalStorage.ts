import { useCallback } from "react";

export const useLocalStorage = () => {
  const setValue = useCallback(
    ({ key, value }: { key: string; value: string }) => {
      if (typeof window === "undefined") {
        return;
      }

      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        console.log(error);
      }
    },
    [],
  );

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

  const removeValue = useCallback((key: string) => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getJsonValue = useCallback(
    <T,>(key: string, fallback: T): T => {
      const value = getValue(key);

      if (!value) {
        return fallback;
      }

      try {
        return JSON.parse(value) as T;
      } catch (error) {
        console.log(error);
        return fallback;
      }
    },
    [getValue],
  );

  const setJsonValue = useCallback(
    <T,>({ key, value }: { key: string; value: T }) => {
      setValue({ key, value: JSON.stringify(value) });
    },
    [setValue],
  );

  return {
    setValue,
    getValue,
    removeValue,
    getJsonValue,
    setJsonValue,
  };
};
