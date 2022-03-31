// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
  case ADD_USER:
    return { email: actions.payload };
  default:
    return state;
  }
};

export default userReducer;
