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
}from './types';

//Dummy Data
//TODO: Delete when backend is finished

let data={
    incomes:[
        {
            id: 1,
            owner: 'Feri',
            name: 'Fizetés',
            price: '220000',
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
            name:'Maszek',
            price: 20000,
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

export const getIncomes = () => async (dispatch) => {
    try {
      setLoading();
      const { incomes } = data;
      dispatch({
        type: GET_INCOMES,
        payload: incomes
      });
    } catch (err) {
      dispatch({
        type: INCOME_ERROR,
        payload: err.response.statusText
      });
    }
  };

  export const addIncome = (income) => async (dispatch) => {
    try {
      setLoading();
      const data = income;
      dispatch({
        type: ADD_INCOME,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: INCOME_ERROR,
        payload: err.response.statusText
      });
    }
  };

  export const deleteIncome = (id) => async (dispatch) => {
    try {
      setLoading();
      const data = id;
      dispatch({
        type: DELETE_INCOME,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: INCOME_ERROR,
        payload: err.response.statusText
      });
    }
  };

  export const updateIncome = (income) => async (dispatch) => {
    try {
      setLoading();
      const data = income;
      dispatch({
        type: UPDATE_INCOME,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: INCOME_ERROR,
        payload: err.response.statusText
      });
    }
  };

  export const setLoading = () => {
    return {
      type: SET_LOADING
    };
  };