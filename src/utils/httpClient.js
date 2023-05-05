import { apiKey } from './apiKey.js';
const API = 'https://api.themoviedb.org/3';

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization: apiKey,
      'Content-Type': 'application/json;charset=utf-8',
    },
  }).then((result) => result.json());
}
