import axios from 'axios';
import { BASE_URL } from '../constants/API';
import { v4 as uuidv4 } from 'uuid';

export const postList = async (title: string) => {
  await axios.post(BASE_URL + '/lists', { id: uuidv4(), title });
  window.location.reload(); // react-query 전 임시
};

export const updateList = async (id: string, data: any) => {
  await axios.put(BASE_URL + '/lists/' + id, data);
  window.location.reload(); // react-query 전 임시
};

export const deleteList = async (id: string) => {
  await axios.delete(BASE_URL + '/lists/' + id);
  window.location.reload(); // react-query 전 임시
};
