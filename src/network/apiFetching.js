import axios from 'axios';

import {COVID_CASES_DATA_URL} from '../config/apiLink';

export const apiFetching = async () => {
  const data = await axios.get(`${COVID_CASES_DATA_URL}`).then(res => {
    return res.data;
  });
  return data;
};
