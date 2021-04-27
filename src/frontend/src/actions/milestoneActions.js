import {
  GET_MILESTONES,
  ADD_MILESTONE,
  UPDATE_MILESTONE,
  DELETE_MILESTONE,
  SET_CURRENT_MILESTONE,
  CLEAR_CURRENT_MILESTONE,
  MILESTONE_ERROR,
  SET_LOADING,
} from "./types";

import api from "../utils/api";
import { setAlert } from "./alertActions";

export const getMilestones = () => async (dispatch) => {
  try {
    const res = await api.get("/milestones");
    dispatch({ type: GET_MILESTONES, payload: res.data });
  } catch (err) {
    dispatch({ type: MILESTONE_ERROR, payload: err.response.msg });
  }
};

export const addMilestone = (milestone) => async (dispatch) => {
  //const body = JSON.stringify(milestone);
  const body = JSON.stringify({
    owner: "6063570f325f8331d0d2d4dc",
    name: "string",
    goalPrice: -5000,
    deadline: "2021-06-27T13:44:21.395Z",
  });
  try {
    setLoading();
    const res = await api.post(`/milestones/create`, body);
    const data = await res.data;
    console.log(data);
    dispatch({
      type: ADD_MILESTONE,
      payload: data,
    });
    dispatch(setAlert("Mérföldkő hozzáadva", "success"));
  } catch (err) {
    console.log(err);
    dispatch({
      type: MILESTONE_ERROR,
      payload: err.response.data.errors,
    });
    err.response.data.errors.forEach((error) => {
      dispatch(setAlert(error.message, "danger"));
    });
  }
};

export const deleteMilestone = (id) => async (dispatch) => {
  try {
    setLoading();
    await api.delete(`/milestones/${id}`);
    dispatch({
      type: DELETE_MILESTONE,
      payload: id,
    });
    dispatch(setAlert("Mérföldkő törölve", "success"));
  } catch (err) {
    dispatch({
      type: MILESTONE_ERROR,
      payload: err.response.statusText,
    });
    dispatch(setAlert("Hiba a mérföldkő törlése közben", "danger"));
  }
};

export const updateMilestone = (milestone) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/milestones/${milestone.id}`, {
      method: "PUT",
      body: JSON.stringify(milestone),
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: UPDATE_MILESTONE,
      payload: milestone,
    });
    dispatch(setAlert("Mérföldkő módosítva", "success"));
  } catch (err) {
    dispatch({
      type: MILESTONE_ERROR,
      payload: err.response.statusText,
    });
    dispatch(setAlert(err, "danger"));
  }
};

export const getMilestone = (id) => async (dispatch) => {
  try {
    const res = await fetch(`/milestones/${id}`);
    const data = await res.json();
    dispatch({
      type: GET_MILESTONES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: MILESTONE_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const setCurrent = (milestone) => {
  return {
    type: SET_CURRENT_MILESTONE,
    payload: milestone,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT_MILESTONE,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
