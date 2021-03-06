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
  SET_ACCOUNT_MODAL,
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
    dispatch(getAccounts());
  } catch (err) {
    console.log(err);
    dispatch(
      {
        type: ACCOUNT_ERROR,
        payload: err.response.data.errors,
      },
      err.response.data.errors.forEach((error) => {
        setAlert(error.message, "alert");
      })
    );
  }
};

export const deleteAccount = (id) => async (dispatch) => {
  try {
    setLoading();
    await api.delete(`/accounts/${id}`);
    dispatch({
      type: DELETE_ACCOUNT,
      payload: id,
    });
    dispatch(setAlert("Számla törölve", "success"));
  } catch (err) {
    dispatch({
      type: ACCOUNT_ERROR,
      payload: err.response.statusText,
    });
    dispatch(setAlert("Hiba a számla törlése közben", "danger"));
  }
};

export const updateAccount = (account) => async (dispatch) => {
  const body = JSON.stringify(account);
  try {
    setLoading();
    await api.put(`/accounts/${account._id}`, body);

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
    dispatch(setAlert("Hiba a számla frissítése közben", "danger"));
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

export const setAccountModal = (modal) => {
  return {
    type: SET_ACCOUNT_MODAL,
    payload: modal,
  };
};

export const closeAccountModal = () => {
  return {
    type: SET_ACCOUNT_MODAL,
    payload: { title: "", open: false },
  };
};
