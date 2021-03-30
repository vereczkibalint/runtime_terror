import {
    GET_EXPENDITURES,
    ADD_EXPENDITURE,
    UPDATE_EXPENDITURE,
    DELETE_EXPENDITURE,
    SET_CURRENT_EXPENDITURE,
    CLEAR_CURRENT_EXPENDITURE,
    EXPENDITURE_ERROR,
    SEARCH_EXPENDITURE,
    SET_LOADING
}from './types';

//Dummy Data
//TODO: Delete when backend is finished
let data ={
    expenditures:[
        {
            id: 1,
            owner: 'Feri',
            name: 'PS5',
            price: '185000',
            date: new Date().setFullYear(2021),
            sources: [
                {
                  account: 'main',
                  amount: 3000,
                  createdAt: new Date().setMonth(3)
                },
                {
                  account: 'second',
                  amount: 2000,
                  createdAt: new Date().setMonth(1)
                },
                {
                  account: 'asdfasdfasdf',
                  amount: 30000000,
                  createdAt: new Date().setMonth(11)
                }
              ]
        },
        {
            id: 2,
            owner: 'Zsolt',
            name:'PC',
            price: 200000,
            date: new Date().setFullYear(2021),
            sources: [
                {
                  account: '123',
                  amount: 2222,
                  createdAt: new Date().setMonth(1)
                },
                {
                  account: 'xyz',
                  amount: 1111,
                  createdAt: new Date().setMonth(1)
                },
                {
                  account: 'asdfasdfasdf',
                  amount: 4444,
                  createdAt: new Date().setMonth(4)
                }
              ]
        }
    ]
};

export const getExpenditures = () => async (dispatch) => {
    try {
      setLoading();
      const { expenditures } = data;
      dispatch({
        type: GET_EXPENDITURES,
        payload: expenditures
      });
    } catch (err) {
      dispatch({
        type: EXPENDITURE_ERROR,
        payload: err.response.statusText
      });
    }
  };

  export const addExpenditure = (expenditure) => async (dispatch) => {
    try {
      setLoading();
      const data = expenditure;
      dispatch({
        type: ADD_EXPENDITURE,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: EXPENDITURE_ERROR,
        payload: err.response.statusText
      });
    }
  };

  export const deleteExpenditure = (id) => async (dispatch) => {
    try {
      setLoading();
      const data = id;
      dispatch({
        type: DELETE_EXPENDITURE,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: EXPENDITURE_ERROR,
        payload: err.response.statusText
      });
    }
  };

  export const updateExpenditure = (expenditure) => async (dispatch) => {
    try {
      setLoading();
      const data = expenditure;
      dispatch({
        type: UPDATE_EXPENDITURE,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: EXPENDITURE_ERROR,
        payload: err.response.statusText
      });
    }
  };

  export const setLoading = () => {
    return {
      type: SET_LOADING
    };
  };