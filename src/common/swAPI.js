// swAPI Config

import axios from 'axios';

export const API = axios.create({
    baseURL: '//swapi.co/api/'
})
API.interceptors.request.use(function (config) {
    // config.params.APPID = '192ade269df16bdea841c0f76b264815';
    // config.params.units = 'imperial';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });