import { useState } from 'react';

import styled from 'styled-components';
import { EditOutlined } from '@ant-design/icons';

import CardDetail from './CardDetail';

const Container = styled.div`
  height: 32px;
  border: 1px solid #d9d9d9;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  cursor: pointer;
  border-radius: 4px;
`;

interface IProps {
  data: any;
}

function Card({ data }: IProps) {
  const [detailInfo, setDetailInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const onOpenCardDetail = () => setIsOpen(true);
  const onCloseCardDetail = () => setIsOpen(false);

  return (
    <>
      {isOpen && <CardDetail data={detailInfo} onClose={onCloseCardDetail} />}
      <Container
        onClick={() => {
          setDetailInfo({ ...data });
          onOpenCardDetail();
        }}
      >
        <div>{data.content}</div>
        <EditOutlined />
      </Container>
    </>
  );
}

export default Card;
