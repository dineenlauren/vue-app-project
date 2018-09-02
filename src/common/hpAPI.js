// hpAPI Config

import axios from 'axios';

export const API = axios.create({
    baseURL: '//www.potterapi.com/v1/'
})
API.interceptors.request.use(function (config) {
    config.params.key = '$2a$10$JQcuNhDya5Fm5DLqOKHslO0YrVFiE/8Zquo0Ikpma9Frpn0nvXF76';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });