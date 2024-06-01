import Axios from 'axios';

export const ApiGetDataJobsheetID = async () => {
  const response = await Axios.get(
    'https://panellokasee.host/api/apcargo/public/admin/getJSbuyingSelling/'
  )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });

  return response;
};
