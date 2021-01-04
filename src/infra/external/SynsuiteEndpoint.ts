import 'dotenv/config';
import axios from 'axios';
import tough from 'tough-cookie';
import axiosCookieJarSupport from 'axios-cookiejar-support';

const api = axios.create({
  baseURL: process.env.SYNSUITE_SERVER_ENDPOINT,
});

axiosCookieJarSupport(api);
api.defaults.jar = new tough.CookieJar();

export { api };
