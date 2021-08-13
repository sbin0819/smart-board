import axios from 'axios';
import { NEST_URL } from '../constants/API';

export const getBoards = async () => {
  const response = await axios.get(NEST_URL + '/boards');
  return response;
};
