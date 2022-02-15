import axios from 'axios';
import { heroesMethods } from '../reducers/heroes';

const sendRequest = async (reqUrl) => {
  const url = reqUrl;
  const response = await axios({
    method: 'GET',
    url: url
  });

  const data = response;

  return data;
};

export const getHeroes = () => {
  return async dispatch => {
    const request = await sendRequest('/api/heroes');
    const data = request.data;

    if (request.status !== 200) {
    }

    dispatch(heroesMethods.setHeroes(data));
  };
};

export const getHero = payload => {
  return async dispatch => {
    const heroId = payload;

    const request = await sendRequest(`/api/heroes/${payload}`);
    const data = request.data;

    if (request.status !== 200) {
    }

    dispatch(heroesMethods.setCurrentHero(data));
  };
};
