// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, RECEIVE_CURRENCY } from '../actions';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, actions) => {
  const { expenses, rates } = actions;

  switch (actions.type) {
  case ADD_EXPENSE:
    expenses.exchangeRates = rates;
    return { ...state, expenses: [...state.expenses, actions.expenses] };
  case RECEIVE_CURRENCY:
    return { ...state, currencies: actions.currencies };
  default:
    return state;
  }
};

export default walletReducer;
