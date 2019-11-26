import axios from "axios";

export const pAPI = axios.create({
  baseURL: "https://www.potterapi.com/v1/"
});

export const swAPI = axios.create({
  baseURL: "https://swapi.co/api/"
});

swAPI.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

pAPI.interceptors.request.use(
  function(config) {
    config.params.key =
      "$2a$10$JQcuNhDya5Fm5DLqOKHslO0YrVFiE/8Zquo0Ikpma9Frpn0nvXF76";
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
