import {
  GET_MILESTONES,
  ADD_MILESTONE,
  UPDATE_MILESTONE,
  DELETE_MILESTONE,
  SET_CURRENT_MILESTONE,
  CLEAR_CURRENT_MILESTONE,
  MILESTONE_ERROR,
  SET_LOADING
} from './types';

// Dummy Data
//TODO: Delete when backend is finished
let data = {
  milestones: [
    {
      id: 1,
      owner: 'Feri',
      name: 'PS5',
      goalPrice: 185000,
      deadLine: new Date().setFullYear(2022),
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
      name: 'PC',
      goalPrice: 200000,
      deadLine: new Date().setFullYear(2023),
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

export const getMilestones = () => async (dispatch) => {
  try {
    setLoading();
    const { milestones } = data;
    dispatch({
      type: GET_MILESTONES,
      payload: milestones
    });
  } catch (err) {
    dispatch({
      type: MILESTONE_ERROR,
      payload: err.response.statusText
    });
  }
};

export const addMilestone = (milestone) => async (dispatch) => {
  try {
    setLoading();
    const data = milestone;
    dispatch({
      type: ADD_MILESTONE,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: MILESTONE_ERROR,
      payload: err.response.statusText
    });
  }
};

export const deleteMilestone = (id) => async (dispatch) => {
  try {
    setLoading();
    const data = id;
    dispatch({
      type: DELETE_MILESTONE,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: MILESTONE_ERROR,
      payload: err.response.statusText
    });
  }
};

export const updateMilestone = (milestone) => async (dispatch) => {
  try {
    setLoading();
    const data = milestone;
    dispatch({
      type: UPDATE_MILESTONE,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: MILESTONE_ERROR,
      payload: err.response.statusText
    });
  }
};