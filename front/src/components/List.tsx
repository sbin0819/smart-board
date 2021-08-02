import { Input } from 'antd';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useState } from 'react';

import { updateList, deleteList } from '../api/list';

import CreateCard from './CreateCard';
import useFetchData from '../hooks/useFetchData';

import { ICard } from '../types/card';

import Card from './Card';

const ListContainer = styled.div`
  flex: 0 0 auto; // overflow inner display
  width: 284px;
  min-height: 76px;
  background: #ececec;
  padding: 5px;
  border-radius: 8px;
  .list_title {
    width: 80%;
    background: none;
    border: none;
    :focus {
      background: #fff;
    }
  }
`;

const FootContainer = styled.div`
  .add_card {
    display: flex;
    align-items: center;
    margin-left: 6px;
    cursor: pointer;
    height: 40px;
    width: 50%;
  }
`;

interface IProps {
  title: string;
  id: string;
}
function List({ title, id }: IProps) {
  const {
    data: cardData,
    loading,
    error,
  }: { data: ICard[]; loading: any; error: any } = useFetchData(
    `/cards?listId=${id}`,
  );

  if (cardData[0]) {
    console.log(cardData[0]);
  }

  const [newTitle, setNewTitle] = useState(title);
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const [isOpenCard, setIsOpenCard] = useState(false);

  const closeAddCard = () => setIsOpenCard(false);
  const openAddCard = () => setIsOpenCard(true);

  if (loading) {
    return <div>card loading...</div>;
  }

  return (
    <ListContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateList(id, { id, title: newTitle });
        }}
      >
        <Input
          className="list_title"
          name="list_title"
          placeholder="Enter list title..."
          value={focused ? newTitle : title}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(e) => {
            const { value } = e.target;
            setNewTitle(value);
          }}
        />
        <CloseOutlined onClick={() => deleteList(id)} />
      </form>
      {!loading && cardData.length > 0 && <Card data={cardData} />}
      {isOpenCard && <CreateCard onClose={closeAddCard} />}
      {!isOpenCard && (
        <FootContainer>
          <div className="add_card" onClick={() => openAddCard()}>
            <PlusOutlined />
            <p>Add a Card</p>
          </div>
        </FootContainer>
      )}
    </ListContainer>
  );
}

export default List;
