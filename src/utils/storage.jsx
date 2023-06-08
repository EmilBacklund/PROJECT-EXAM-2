export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
  const item = localStorage.getItem(key);

  if (!item) {
    return null; // or whatever you prefer
  }

  try {
    return JSON.parse(item);
  } catch (error) {
    console.error("Parsing error:", error);
    return null; // or whatever you prefer
  }
};
