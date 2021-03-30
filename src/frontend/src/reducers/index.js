import { combineReducers } from 'redux';
import milestoneReducer from './milestoneReducer';
import expendureReducer from './expenditureReducer';
import incomeReducer from './incomeReducer';
import auth from './auth';

export default combineReducers({
  milestone: milestoneReducer,
  expenditure:expendureReducer,
  income:incomeReducer,
  auth:auth
});
