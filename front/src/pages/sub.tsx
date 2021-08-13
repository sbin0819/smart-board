import { Link } from 'react-router-dom';
import { useStore } from '../context';
import { useEffect } from 'react';

import { getBoards, postBoard } from '../api/boards';

function Sub() {
  const [{ memo }] = useStore();

  useEffect(() => {
    getBoards();
  }, []);
  return (
    <div>
      <h1>SUB PAGE</h1>
      <Link to="/">HOME</Link>
      <div>
        <button
          style={{ height: 40, fontSize: 30, padding: '0 20px' }}
          onClick={() => postBoard('new board')}
        >
          create a board
        </button>
      </div>
    </div>
  );
}

export default Sub;
