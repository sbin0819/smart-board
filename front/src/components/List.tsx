import { useState, useEffect, useRef } from 'react';

import { updateList, deleteList } from '../api/list';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import styled from 'styled-components';
import { Input } from 'antd';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import Card from './Card';
import CreateCard from './CreateCard';

import useClickOutside from '../hooks/useClickOutside';

const ListContainer = styled.div`
  flex: 0 0 auto; // overflow inner display
  width: 284px;
  min-height: 76px;
  padding: 10px 6px;
  .list_form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 5px;
    .list_title {
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
  columnId: string;
  name: any;
  id: any;
  items: any;
}
function List({ columnId, name, id, items }: IProps) {
  const [newTitle, setNewTitle] = useState(name);
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const [isOpenCard, setisOpenCard] = useState(false);
  const closeAddCard = () => setisOpenCard(false);

  const ref = useRef<any>();
  useClickOutside(ref, closeAddCard);

  return (
    <Droppable droppableId={columnId} key={columnId}>
      {(provided, snapshot) => {
        return (
          <div
            key={columnId}
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              borderRadius: 8,
              background: snapshot.isDraggingOver ? 'lightblue' : '#ececec',
            }}
          >
            <ListContainer>
              <form
                className="list_form"
                onSubmit={(e) => {
                  e.preventDefault();
                  updateList(id, { id, name: newTitle, items });
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
                            backgroundColor: snapshot.isDragging
                              ? '#fde0e0'
                              : '#fff',
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
              {isOpenCard && (
                <div ref={ref}>
                  <CreateCard
                    listId={id}
                    listName={name}
                    cards={items}
                    onClose={closeAddCard}
                  />
                </div>
              )}
              {!isOpenCard && (
                <FootContainer>
                  <div
                    className="add_card"
                    onClick={() => {
                      setisOpenCard(true);
                    }}
                  >
                    <PlusOutlined />
                    <p>Add a Card</p>
                  </div>
                </FootContainer>
              )}
            </ListContainer>
          </div>
        );
      }}
    </Droppable>
  );
}

export default List;
