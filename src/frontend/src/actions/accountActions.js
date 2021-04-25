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
import api from "../utils/api";
import { setAlert } from "./alertActions";

export const getAccounts = () => async (dispatch) => {
  try {
    const res = await api.get("/accounts");
    dispatch({ type: GET_ACCOUNTS, payload: res.data });
  } catch (err) {
    dispatch({ type: ACCOUNT_ERROR, payload: err.response.msg });
  }
};

export const addAccount = (account) => async (dispatch) => {
  const body = JSON.stringify(account);
  try {
    setLoading();
    const res = await api.post(`/accounts/create`, body);
    const data = await res.data;
    console.log(data);
    dispatch({
      type: ADD_ACCOUNT,
      payload: data,
    });
    dispatch(setAlert("Számla hozzáadva", "success"));
  } catch (err) {
    console.log(err);
    dispatch({
      type: ACCOUNT_ERROR,
      payload: err.response.errors,
    });
    dispatch(setAlert("Hibás adat", "danger"));
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
    dispatch(setAlert("Számla módosítva", "success"));
  } catch (err) {
    dispatch({
      type: ACCOUNT_ERROR,
      payload: err.response.statusText,
    });
    dispatch(setAlert(err, "danger"));
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
