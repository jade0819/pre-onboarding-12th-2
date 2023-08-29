import axios from 'axios';

const BASE_URL = 'https://api.github.com/repos/facebook/react';
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    const token = TOKEN;

    if (token) {
      config.headers.Authorization = `Bearer ${TOKEN}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Axios 응답 인터셉터를 추가하여 응답과 에러를 전역적으로 처리
api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('다음 오류가 발생했습니다:', error);
    return Promise.reject(error);
  },
);

export default api;
