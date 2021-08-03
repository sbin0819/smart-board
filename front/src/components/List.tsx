import { useState } from 'react';

import { updateList, deleteList } from '../api/list';
import { Draggable } from 'react-beautiful-dnd';

import styled from 'styled-components';
import { Input } from 'antd';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import Card from './Card';
import CreateCard from './CreateCard';

const ListContainer = styled.div`
  flex: 0 0 auto; // overflow inner display
  width: 284px;
  min-height: 76px;
  padding: 10px 6px;
  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .list_title {
      width: 80%;
      background: none;
      border: none;
      :focus {
        background: #fff;
      }
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
  name: any;
  id: any;
  items: any;
  provided: any;
}
function List({ name, id, items, provided }: IProps) {
  const [newTitle, setNewTitle] = useState(name);
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const [isOpenCard, setIsOpenCard] = useState(false);

  const closeAddCard = () => setIsOpenCard(false);
  const openAddCard = () => setIsOpenCard(true);
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
          value={focused ? newTitle : name}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(e) => {
            const { value } = e.target;
            setNewTitle(value);
          }}
        />
        <CloseOutlined onClick={() => deleteList(id)} />
      </form>
      {items.map((item: any, index: number) => {
        return (
          <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided, snapshot) => {
              return (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={{
                    backgroundColor: snapshot.isDragging ? '#fde0e0' : '#fff',
                    ...provided.draggableProps.style,
                  }}
                >
                  <Card data={item} />
                </div>
              );
            }}
          </Draggable>
        );
      })}
      {provided.placeholder}
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
