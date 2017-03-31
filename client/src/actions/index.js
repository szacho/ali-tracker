import axios from 'axios';

const API_URL = 'http://localhost:3010/api';
export const ADD_PACKAGE = 'checkpackage';
export const SET_TOKEN = 'SETtoken';
export const REMOVE_PACKAGE = 'REMOVE_PACKAGE';
export const THROW_ERROR = 'THROW_Merr';

//RF550476480CN
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
    } catch(error) {
      dispatch({
        type: THROW_ERROR,
        payload: error.response.data
      });
    }
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
    dispatch({
      type: SET_TOKEN,
      payload: data.token
    });
    data.token.packages.map(async (pack) => {
      const { data: gotPackageData } = await axios.get(`${API_URL}/package/${pack.provider}/${pack.packageNumber}`);
      if(gotPackageData.done) {
        const { data: savedPackage } = await axios.post(`${API_URL}/package/`, { package: { ...gotPackageData, name: pack.packageName, token }});
        console.log(savedPackage);
      }
      dispatch({
        type: ADD_PACKAGE,
        payload: { ...gotPackageData, name: pack.packageName, token }
      });
    });
  }
}

export function removePackageFromToken(token, packageNumber) {
  return async (dispatch) => {
    const {data} = await axios.patch(`${API_URL}/token/`, { token, packageNumber });
    console.log(data);
    dispatch({
      type: REMOVE_PACKAGE,
      payload: packageNumber
    });
  }
}
