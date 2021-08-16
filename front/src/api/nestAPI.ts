import axios from 'axios';

const NEST_URL = 'http://localhost:8000';

export const getAllBoard = async () => {
  const response = await axios.get(NEST_URL + '/boards');
  return response;
};

export const createBoard = async (title: string) => {
  const response = await axios.post(NEST_URL + '/boards', { title });
  return response;
};

export const getBoard = async (id: number) => {
  const response = await axios.get(`${NEST_URL}/boards/children/${id}`);
  return response;
};

export const getListAll = async () => {
  const response = await axios.get(NEST_URL + '/lists');
  return response;
};

export const getList = async (id: number) => {
  const response = await axios.get(`${NEST_URL}/lists/${id}`);
  return response;
};

export const createList = async (title: string) => {
  const response = await axios.post(NEST_URL + '/lists', { title });
  return response;
};

export const getCardAll = async () => {
  const response = await axios.get(NEST_URL + '/cards');
  return response;
};

export const getCard = async (id: number) => {
  const response = await axios.get(`${NEST_URL}/cards/${id}`);
  return response;
};

export const createCard = async (title: string) => {
  const response = await axios.post(NEST_URL + '/cards', { title });
  return response;
};
