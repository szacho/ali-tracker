import axios from 'axios';
import { reset } from 'redux-form';

const API_URL = `${window.location.origin.replace('3000', '3010')}/api`;
export const ADD_PACKAGE = 'ADD_PACKAGE';
export const SET_TOKEN = 'SET_TOKEN';
export const GET_TOKEN = 'GET_TOKEN';
export const REMOVE_PACKAGE = 'REMOVE_PACKAGE';
export const RESET_PACKAGES = 'RESET_PACKAGES';
export const THROW_ERROR = 'THROW_ERROR';
export const NO_ERROR = 'NO_ERROR';
export const SIGN_OUT = 'SIGN_OUT';

function noError(dispatch) {
  dispatch({
    type: NO_ERROR
  });
}

function throwError(error, dispatch) {
  dispatch({
    type: THROW_ERROR,
    payload: error.response.data
  });
}

export function signOut() {
  window.localStorage.removeItem('token');
  return (dispatch) => {
    dispatch({
      type: SIGN_OUT
    });
  }
}

export function addPackageToToken({packageName, packageNumber, provider}, token) {
  return async (dispatch) => {
    try {
      const { data: gotPackageData } = await axios.get(`${API_URL}/package/${provider}/${packageNumber}`);
      const { data: putPackageToToken } = await axios.put(`${API_URL}/token/`, { packageName, packageNumber, provider, token });
      if(gotPackageData.done) {
        const { data: savedPackage } = await axios.post(`${API_URL}/package/`, { package: { ...gotPackageData, name: packageName, token }});
        console.log('SAVED PACKAGE: ', savedPackage);
      }
      console.log('PUT PACKAGE: ', putPackageToToken);
      dispatch({
        type: ADD_PACKAGE,
        payload: { ...gotPackageData, name: packageName, token }
      });
      dispatch(reset('add-package'));
      noError(dispatch);
    } catch(error) { throwError(error, dispatch) }
  }
}

export function createToken({ packageName, packageNumber, provider }) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${API_URL}/token`, { packageName, packageNumber, provider });
      dispatch({
        type: SET_TOKEN,
        payload: data.savedToken
      });
      noError(dispatch);
    } catch(error) { throwError(error, dispatch) }
  }
}

export function removeMessage() {
  return (dispatch) => {
    noError(dispatch);
  }
}

export function getToken() {
  return (dispatch) => {
    const token = JSON.parse(window.localStorage.getItem('token'));
    dispatch({
      type: GET_TOKEN,
      payload: token
    });
  }
}

export function loadToken(token, isNew = false) {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`${API_URL}/token/${token}`);
      if(!isNew) {
        dispatch({
          type: SET_TOKEN,
          payload: data.token
        });
      }
      if(data.token.packages.length > 0) {
        data.token.packages.map(async (pack) => {
          try {
            const { data: gotPackageData } = await axios.get(`${API_URL}/package/${pack.provider}/${pack.packageNumber}`);
            if(gotPackageData.done) {
              const { data: savedPackage } = await axios.post(`${API_URL}/package/`, { package: { ...gotPackageData, name: pack.packageName, token }});
              console.log(savedPackage);
            }
            dispatch({
              type: ADD_PACKAGE,
              payload: { ...gotPackageData, name: pack.packageName, token }
            });
            dispatch(reset('add-package'));
            noError(dispatch);
          } catch(error) {
            throwError(error, dispatch);
            dispatch({
              type: REMOVE_PACKAGE,
              payload: pack.packageNumber
            });
            const { data: removeBrokenPack } = await axios.patch(`${API_URL}/token/`, { packageNumber: pack.packageNumber, token: data.token.token });
            console.log(removeBrokenPack);
          }
        });
      } else {
        dispatch({
          type: RESET_PACKAGES
        });
        noError(dispatch);
      }
    } catch(error) { throwError(error, dispatch) }
  }
}

export function removePackageFromToken(token, packageNumber) {
  return async (dispatch) => {
    try {
      const { data } = await axios.patch(`${API_URL}/token/`, { token, packageNumber });
      console.log(data);
      dispatch({
        type: REMOVE_PACKAGE,
        payload: packageNumber
      });
      noError(dispatch);
    } catch(error) { throwError(error, dispatch) }
  }
}
