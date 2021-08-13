import axios from 'axios';
import { NEST_URL } from '../constants/API';

export const getBoards = async () => {
  const response = await axios.get(NEST_URL + '/boards');
  return response;
};

export const postBoard = async (title: string) => {
  const response = await axios.post(NEST_URL + '/boards', { title });
  console.log(response);
  return response;
};
