import { useState } from 'react';

import { ICard } from '../../types/card';

import { EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import CardDetail from './CardDetail';

const Container = styled.div`
  background: #fff;
  height: 32px;
  border: 1px solid #d9d9d9;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  cursor: pointer;
`;

interface IProps {
  data: any[];
}

function Card({ data }: IProps) {
  const [detailInfo, setDetailInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const onOpenCardDetail = () => setIsOpen(true);

  const onCloseCardDetail = () => setIsOpen(false);

  return (
    <>
      {isOpen && <CardDetail data={detailInfo} onClose={onCloseCardDetail} />}
      {data?.map((d, idx) => (
        <>
          <Container
            key={idx}
            onClick={() => {
              setDetailInfo({ ...d });
              onOpenCardDetail();
            }}
          >
            <div>{d.title}</div>
            <EditOutlined />
          </Container>
        </>
      ))}
    </>
  );
}

export default Card;
