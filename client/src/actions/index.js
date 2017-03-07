import axios from 'axios';

export const CHECK_PACKAGE = 'checkpackage';

export function checkPackageNumber(packageName, packageNumber) {
  return (dispatch) => {
      axios.post(`http://localhost:3090/api/check`, JSON.stringify({ packageName, packageNumber })).then((response) => {
        return JSON.parse(response.request.response);
      }).then((payload) => {
        console.log(payload);
        dispatch({
          type: CHECK_PACKAGE,
          payload
        });
      });

  };
}
