import axios from 'axios';

const API_URL = 'http://localhost:3010/api';
export const ADD_PACKAGE = 'checkpackage';
export const CREATE_TOKEN = 'createtoken';

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
    console.log(data);
    dispatch({
      type: CREATE_TOKEN,
      payload: data.savedToken
    });
    dispatch({
      type: ADD_PACKAGE,
      payload: data.savedParcel
    });
  }
}
