import {
  GET_MILESTONES,
  ADD_MILESTONE,
  UPDATE_MILESTONE,
  DELETE_MILESTONE,
  SET_CURRENT_MILESTONE,
  CLEAR_CURRENT_MILESTONE,
  MILESTONE_ERROR,
  SET_LOADING
} from '../actions/types';

const initialState = {
  milestones: null,
  current: null,
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MILESTONES:
      return {
        ...state,
        milestones: action.payload,
        loading: false
      };
    case ADD_MILESTONE:
      return {
        ...state,
        milestones: [...state.milestones, action.payload],
        loading: false
      };
    case DELETE_MILESTONE:
      return {
        ...state,
        milestones: state.milestones.filter(
          (milestone) => milestone.id !== action.payload
        ),
        loading: false
      };
    case UPDATE_MILESTONE:
      return {
        ...state,
        milestones: state.milestones.map((milestone) =>
          milestone.id === action.payload.id ? action.payload : milestone
        ),
        loading: false
      };
    case SET_CURRENT_MILESTONE:
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
      };
    default:
      return state;
  }
};