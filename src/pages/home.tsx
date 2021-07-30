import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

import { useStore } from '../context';
import { SET_MEMO } from '../context/memo';

function Home() {
  const [_, dispatch] = useStore();
  const onClick = () => {
    dispatch({
      type: SET_MEMO,
      payload: {
        type: 'good type',
        text: 'text',
        date: new Date(),
        autoClose: false,
      },
    });
  };
  return (
    <Row align="middle" style={{ height: 400, textAlign: 'center' }}>
      <Col span={24}>
        <h1 style={{ fontSize: 70, fontWeight: 'bold' }}>Smart Board</h1>
        <p style={{ fontSize: 24 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque
          odit doloribus nemo obcaecati quisquam nobis distinctio repellendus
          molestias debitis necessitatibus ad, maiores repudiandae
          exercitationem perspiciatis maxime dolorum itaque aspernatur modi
          aliquam! Et atque distinctio obcaecati odio fugiat expedita ipsum.
        </p>
      </Col>
      <Link to="/sub">sub</Link>
      <Button onClick={onClick}>버튼</Button>
    </Row>
  );
}

export default Home;
