const CART = 'itemsCart';

export const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setLocalStorage = (key, obj) => (
  localStorage.setItem(key, JSON.stringify(obj)));

export const getCart = () => getLocalStorage(CART);

export const setCart = (obj) => setLocalStorage(CART, obj);
