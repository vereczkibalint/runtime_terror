import { combineReducers } from 'redux';
import milestoneReducer from './milestoneReducer';

export default combineReducers({
  milestone: milestoneReducer
});
