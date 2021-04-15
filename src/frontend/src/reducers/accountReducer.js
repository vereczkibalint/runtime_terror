import {
  GET_ACCOUNT,
  GET_ACCOUNTS,
  ADD_ACCOUNT,
  UPDATE_ACCOUNT,
  DELETE_ACCOUNT,
  SET_CURRENT_ACCOUNT,
  CLEAR_CURRENT_ACCOUNT,
  ACCOUNT_ERROR,
  SET_LOADING,
} from "../actions/types";

const initialState = {
  accounts: [],
  current: null,
  loading: false,
  error: null,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNT:
      return {
        ...state,
        accounts: action.payload,
        loading: false,
      };
    case GET_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload,
        loading: false,
      };
    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
        loading: false,
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        account: state.accounts.filter(
          (account) => account.id !== action.payload
        ),
        loading: false,
      };
    case UPDATE_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.map((account) =>
          account.id === action.payload.id ? action.payload : account
        ),
        loading: false,
      };
    case SET_CURRENT_ACCOUNT:
      return {
        ...state,
        current: action.payload,
        loading: false,
      };
    case CLEAR_CURRENT_ACCOUNT:
      return {
        ...state,
        current: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ACCOUNT_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default accountReducer;
