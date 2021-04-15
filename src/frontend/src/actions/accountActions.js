import {
  GET_ACCOUNT,
  GET_ACCOUNTS,
  ADD_ACCOUNT,
  UPDATE_ACCOUNT,
  DELETE_ACCOUNT,
  SET_CURRENT_ACCOUNT,
  CLEAR_CURRENT_ACCOUNT,
  ACCOUNT_ERROR,
  SET_LOADING,
} from "./types";
import axios from "axios";

export const getAccounts = () => async (dispatch) => {
  try {
    const res = await axios.get("/accounts");
    dispatch({ type: GET_ACCOUNTS, payload: res.data });
  } catch (err) {
    dispatch({ type: ACCOUNT_ERROR, payload: err.response.msg });
  }
};

export const addAccount = (account) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/accounts/create`, {
      method: "POST",
      body: JSON.stringify(account),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_ACCOUNT,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ACCOUNT_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const deleteAccount = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/accounts/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_ACCOUNT,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: ACCOUNT_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const updateAccount = (account) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/accounts/${account.id}`, {
      method: "PUT",
      body: JSON.stringify(account),
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: UPDATE_ACCOUNT,
      payload: account,
    });
  } catch (err) {
    dispatch({
      type: ACCOUNT_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const getAccount = (id) => async (dispatch) => {
  try {
    const res = await fetch(`/accounts/${id}`);
    const data = await res.json();
    dispatch({
      type: GET_ACCOUNT,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ACCOUNT_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const setCurrent = (account) => {
  return {
    type: SET_CURRENT_ACCOUNT,
    payload: account,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT_ACCOUNT,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
