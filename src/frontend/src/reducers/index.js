import { combineReducers } from 'redux';
import milestoneReducer from './milestoneReducer';
import expendureReducer from './expenditureReducer';
import incomeReducer from './incomeReducer';

export default combineReducers({
  milestone: milestoneReducer,
  expenditure:expendureReducer,
  income:incomeReducer
});
