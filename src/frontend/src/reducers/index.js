import { combineReducers } from 'redux';
import milestoneReducer from './milestoneReducer';
import expendureReducer from './expenditureReducer';

export default combineReducers({
  milestone: milestoneReducer,
  expenditure:expendureReducer
});
