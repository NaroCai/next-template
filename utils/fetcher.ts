import axios from 'axios';

export const fetcher = (url: string) => {
  return axios.post(url).then(res => res.data);
}

export const fetcherGet = (url: string) => {
  return axios.get(url).then(res => res.data);
}
