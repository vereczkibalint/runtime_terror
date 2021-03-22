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