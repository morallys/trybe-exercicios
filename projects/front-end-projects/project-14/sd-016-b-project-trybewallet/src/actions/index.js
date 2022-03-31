// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';
const linkAPI = 'https://economia.awesomeapi.com.br/json/all';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const addExpense = (expenses, rates) => ({
  type: ADD_EXPENSE,
  expenses,
  rates,
});

// REVIEW - referência Matheus Nugas.

export const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCY,
  currencies,
});

export const fetchCurrencies = () => (dispatch) => fetch(linkAPI)
  .then((response) => response.json())
  .then((payload) => dispatch(receiveCurrencies(payload)));

export const fetchRates = (expenses) => (dispatch) => fetch(linkAPI)
  .then((response) => response.json())
  .then((rates) => dispatch(addExpense(expenses, rates)));
