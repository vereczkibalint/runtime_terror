import {
    GET_EXPENDITURES,
    ADD_EXPENDITURE,
    UPDATE_EXPENDITURE,
    DELETE_EXPENDITURE,
    SET_CURRENT_EXPENDITURE,
    CLEAR_CURRENT_EXPENDITURE,
    EXPENDITURE_ERROR,
    SEARCH_EXPENDITURE
} from '../actions/types';

const initialState = {
    expenditures: null,
    current: null,
    error: null,
    loading: false
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_EXPENDITURES:
        return {
          ...state,
          expenditures: action.payload,
          loading: false
        };
      case ADD_EXPENDITURE:
        return {
          ...state,
          expenditures: [...state.expenditures, action.payload],
          loading: false
        };
      case DELETE_EXPENDITURE:
        return {
          ...state,
          expenditures: state.expenditures.filter(
            (expenditure) => expenditure.id !== action.payload
          ),
          loading: false
        };
      case UPDATE_EXPENDITURE:
        return {
          ...state,
          expenditures: state.expenditures.map((expenditure) =>
            expenditure.id === action.payload.id ? action.payload : expenditure
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