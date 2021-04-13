import{
    GET_INCOMES,
    ADD_INCOME,
    UPDATE_INCOME,
    DELETE_INCOME,
    SET_CURRENT_INCOME,
    CLEAR_CURRENT_INCOME,
    INCOME_ERROR,
    SEARCH_INCOME,
    SET_LOADING
} from '../actions/types';

const initialState = {
    incomes: null,
    current: null,
    error: null,
    loading: false
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_INCOMES:
        return {
          ...state,
          incomes: action.payload,
          loading: false
        };
      case ADD_INCOME:
        return {
          ...state,
          incomes: [...state.incomes, action.payload],
          loading: false
        };
      case DELETE_INCOME:
        return {
          ...state,
          incomes: state.incomes.filter(
            (income) => income.id !== action.payload
          ),
          loading: false
        };
      case UPDATE_INCOME:
        return {
          ...state,
          incomes: state.incomes.map((income) =>
            income.id === action.payload.id ? action.payload : income
          ),
          loading: false
        };
      /*case SET_CURRENT_MILESTONE:
        return {
          ...state,
          current: action.payload
        };
      case CLEAR_CURRENT_MILESTONE:
        return {
          ...state,
          current: null
        };
      case MILESTONE_ERROR:
        console.error(action.payload);
        return {
          ...state,
          error: action.payload
        };
      case SET_LOADING:
        return {
          ...state,
          loading: true
        };*/
      default:
        return state;
    }
  };