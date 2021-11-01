import Axios from 'axios';
import get from 'lodash';

export const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});