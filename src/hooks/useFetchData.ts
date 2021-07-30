import { useEffect, useState } from 'react';
import axios from 'axios';

import { BASE_URL } from '../constants/API';

function useFetchData(url: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response: any = await axios.get(BASE_URL + url);
      setData(response.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
}

export default useFetchData;
