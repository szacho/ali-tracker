import axios from 'axios';

const API_URL = 'http://localhost:3010/api';
export const ADD_PACKAGE = 'checkpackage';
export const SET_TOKEN = 'SETtoken';

export function checkPackageNumber(packageName, packageNumber, token) {
  return (dispatch) => {
    axios.post(`${API_URL}/package`, { packageName, packageNumber, token })
      .then((response) => {
        console.log(response);
        dispatch({
          type: ADD_PACKAGE,
          payload: response.request.response
        });
      }).catch((err) => {
        console.log(err);
      });
  }
}

export function createToken(packageName, packageNumber, provider) {
  return async (dispatch) => {
    const { data } = await axios.post(`${API_URL}/token`, { packageName, packageNumber, provider });
    dispatch({
      type: SET_TOKEN,
      payload: data.savedToken
    });
  }
}

export function loadToken(token) {
  return async (dispatch) => {
    const { data } = await axios.get(`${API_URL}/token/${token}`);
    console.log(data.token);
    dispatch({
      type: SET_TOKEN,
      payload: data.token
    });
    data.token.packages.map(async (pack) => {
      const { data } = await axios.get(`${API_URL}/package/${pack.provider}/${pack.packageNumber}`);
      dispatch({
        type: ADD_PACKAGE,
        payload: { ...data, name: pack.packageName, token }
      });
    });
  }
}
