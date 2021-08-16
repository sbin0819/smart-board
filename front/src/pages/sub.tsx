import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context';

import { getAllBoard, createBoard } from '../api/nestAPI';

interface Board {
  id: number;
  title: string;
}

function Sub() {
  const [value, setValue] = useState('');
  const [boards, setBoards] = useState<Board[]>([]);
  const [{ memo }] = useStore();

  const fetchData = async () => {
    const response = await getAllBoard();
    setBoards(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>SUB PAGE</h1>
      <Link to="/">HOME</Link>
      <div>
        <div>
          {boards.length > 0 &&
            boards.map((el, idx) => <li key={idx}>{el.title}</li>)}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createBoard(value);
            setValue('');
          }}
        >
          <input
            value={value}
            style={{ height: 40, fontSize: 30, padding: '5px 10px' }}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            type="submit"
            style={{ height: 40, fontSize: 30, padding: '0 20px' }}
          >
            create a board
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sub;
