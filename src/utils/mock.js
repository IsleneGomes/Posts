import MockAdapter from 'axios-mock-adapter';
import axios from './axios';

const instance = new MockAdapter(axios, { delayRespone: 0 });

export default instance;