import axios from "axios";

// API 서비스
const request = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  timeout: 5000
});

request.interceptors.request.use(config => {
  return config;
});
request.interceptors.response.use(res => {
  return res;
});

// 인증 서비스
// const authService = axios.create({
//   timeout: 5000
// });

// authService.interceptors.request.use(config => {
//   return config;
// });
// authService.interceptors.response.use(res => {
//   return res;
// });

export default request
