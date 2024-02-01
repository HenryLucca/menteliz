export const useLocalStorage = () => {
  const setItem = (key: string, value: unknown) => {
    try {
      window?.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  };

  const getItem = (key: string) => {
    try {
      const item = window?.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.error("Error getting from localStorage", error);
      return null;
    }
  };

  const removeItem = (key: string) => {
    try {
      window?.localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from localStorage", error);
    }
  };

  return {
    setItem,
    getItem,
    removeItem,
  };
};
