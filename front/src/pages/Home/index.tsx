import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  a {
    font-size: 30px;
  }
`;
function index() {
  return (
    <Container>
      <Link to="/board/example">Board</Link>
    </Container>
  );
}

export default index;
