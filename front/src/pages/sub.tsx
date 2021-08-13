import { Link } from 'react-router-dom';
import { useStore } from '../context';
import { useEffect } from 'react';

import { getBoards } from '../api/boards';

function Sub() {
  const [{ memo }] = useStore();

  useEffect(() => {
    getBoards();
  }, []);
  return (
    <div>
      <h1>SUB PAGE</h1>
      <Link to="/">HOME</Link>
    </div>
  );
}

export default Sub;
