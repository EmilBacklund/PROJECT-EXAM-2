import { useDispatch } from 'react-redux';

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const removeItem = (key) => {
  localStorage.removeItem(key);
};

export const logOut = () => {
  const dispatch = useDispatch();
  localStorage.clear();
  dispatch(setAuthentication(false));
};
