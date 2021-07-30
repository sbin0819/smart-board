import { Row, Col } from 'antd';

function home() {
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
    </Row>
  );
}

export default home;
