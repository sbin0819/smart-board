import { Link } from 'react-router-dom';
import { useStore } from '../context';

function Sub() {
  const [{ memo }] = useStore();
  console.log(memo);
  return (
    <div>
      <h1>SUB PAGE</h1>
      <Link to="/">HOME</Link>
    </div>
  );
}

export default Sub;
