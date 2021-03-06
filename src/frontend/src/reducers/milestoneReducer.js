import {
  GET_MILESTONES,
  ADD_MILESTONE,
  UPDATE_MILESTONE,
  DELETE_MILESTONE,
  SET_CURRENT_MILESTONE,
  CLEAR_CURRENT_MILESTONE,
  MILESTONE_ERROR,
  SET_LOADING,
  SET_MILESTONE_MODAL,
} from "../actions/types";

const initialState = {
  milestones: null,
  current: null,
  error: null,
  modal: {
    open: false,
    title: "",
  },
  loading: false,
};

const milestoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MILESTONES:
      return {
        ...state,
        milestones: action.payload,
        loading: false,
      };
    case ADD_MILESTONE:
      return {
        ...state,
        milestones: [...state.milestones, action.payload],
        loading: false,
      };
    case DELETE_MILESTONE:
      return {
        ...state,
        milestones: state.milestones.filter(
          (milestone) => milestone._id !== action.payload
        ),
        loading: false,
      };
    case UPDATE_MILESTONE:
      return {
        ...state,
        milestones: state.milestones.map((milestone) =>
          milestone._id === action.payload._id ? action.payload : milestone
        ),
        loading: false,
      };
    case SET_CURRENT_MILESTONE:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_MILESTONE:
      return {
        ...state,
        current: null,
      };
    case MILESTONE_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case SET_MILESTONE_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default milestoneReducer;
